import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { getCharactersSuccess, getCharactersFailure } from './actions';

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
    yield put(getCharactersSuccess(formatted, total, searchString));
  } catch (err) {
    toast.error('Falha ao carregar personagens da API da Marvel.');
    yield put(getCharactersFailure());
  }
}

export default all([takeLatest('@characters/REQUEST', getCharacters)]);
