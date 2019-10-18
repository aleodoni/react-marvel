import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  getCharactersSuccess,
  getCharactersFailure,
  saveCharactersSuccess,
} from './actions';

import { saveCharacterRequest } from '../character/actions';

import * as selectors from './selectors';

const limit = 6;

export function* getCharacters({ payload }) {
  const { page, searchString } = payload;

  const extraParams = {
    limit,
    offset: (page - 1) * limit,
  };

  try {
    const response = yield call(api.get, 'characters', {
      params: {
        ...api.defaults.params,
        ...extraParams,
        ...(searchString !== '' && { nameStartsWith: searchString }),
      },
    });

    const { total } = response.data.data;

    const formatted = response.data.data.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
      };
    });

    yield put(getCharactersSuccess(formatted, total, searchString, page));
  } catch (err) {
    toast.error('Falha ao carregar personagens da API da Marvel.');
    yield put(getCharactersFailure());
  }
}

export function* saveCharacter({ payload }) {
  const { characterId, name, description } = payload;
  const characters = yield select(selectors.characters);

  const updatedCharacters = characters.map(character => {
    return character.id === characterId
      ? { ...character, name, description }
      : character;
  });

  yield put(saveCharacterRequest(characterId, name, description));
  yield put(saveCharactersSuccess(updatedCharacters));

  toast.success('Herói alterado com sucesso.');

  history.push('/detail');
}

export default all([
  takeLatest('@characters/REQUEST', getCharacters),
  takeLatest('@characters/SAVE_REQUEST', saveCharacter),
]);
