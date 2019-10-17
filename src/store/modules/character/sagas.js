import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { getCharacterSuccess, getCharacterFailure } from './actions';
import { getSeriesRequest } from '../series/actions';

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

    console.tron.log(formatted);

    yield put(getSeriesRequest(characterId, 1));
    yield put(getCharacterSuccess(formatted));

    history.push('/detail');
  } catch (err) {
    console.tron.lot('ERRO');
    toast.error('Falha ao carregar personagem da API da Marvel.');
    yield put(getCharacterFailure());
  }
}

export default all([takeLatest('@character/REQUEST', getCharacter)]);
