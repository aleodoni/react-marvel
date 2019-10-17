import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { getSeriesSuccess, getSeriesFailure } from './actions';

const limit = 12;

export function* getSeries({ payload }) {
  const { characterId, page } = payload;

  console.tron.log(payload);

  const extraParams = {
    limit,
    offset: (page - 1) * limit,
  };

  try {
    const response = yield call(api.get, `characters/${characterId}/series`, {
      params: {
        ...api.defaults.params,
        ...extraParams,
      },
    });

    const { total } = response.data.data;

    const formatted = response.data.data.results.map(serie => {
      return {
        id: serie.id,
        title: serie.title,
        startYear: serie.startYear,
        endYear: serie.endYear,
        url: `${serie.thumbnail.path}.${serie.thumbnail.extension}`,
      };
    });

    yield put(getSeriesSuccess(formatted, total, page));
  } catch (err) {
    toast.error('Falha ao carregar séries da API da Marvel.');
    yield put(getSeriesFailure());
  }
}

export default all([takeLatest('@series/REQUEST', getSeries)]);
