import { all } from 'redux-saga/effects';

import characterList from './characterList/sagas';
import character from './character/sagas';
import series from './series/sagas';

export default function* rootSaga() {
  return yield all([characterList, character, series]);
}
