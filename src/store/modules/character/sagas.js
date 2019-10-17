import { takeLatest, call, put, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  getCharacterSuccess,
  getCharacterFailure,
  saveCharacterSuccess,
} from './actions';
import { getSeriesRequest } from '../series/actions';

import * as selectors from './selectors';

export function* getCharacter({ payload }) {
  const { characterId } = payload;

  try {
    const response = yield call(api.get, `characters/${characterId}`, {
      params: {
        ...api.defaults.params,
      },
    });

    const formatted = response.data.data.results.map(character => {
      return {
        id: character.id,
        name: character.name,
        url: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        description: character.description,
      };
    });

    yield put(getSeriesRequest(characterId, 1));
    yield put(getCharacterSuccess(formatted));

    history.push('/detail');
  } catch (err) {
    toast.error('Falha ao carregar personagem da API da Marvel.');
    yield put(getCharacterFailure());
  }
}

export function* saveCharacter({ payload }) {
  const { name, description } = payload;
  const character = yield select(selectors.character);

  const updatedCharacter = { ...character[0], name, description };

  yield put(saveCharacterSuccess(updatedCharacter));
}

export default all([
  takeLatest('@character/REQUEST', getCharacter),
  takeLatest('@character/SAVE_REQUEST', saveCharacter),
]);
