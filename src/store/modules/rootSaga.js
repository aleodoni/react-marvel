import { all } from 'redux-saga/effects';

import character from './character/sagas';

export default function* rootSaga() {
  return yield all([character]);
}
