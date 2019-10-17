import { combineReducers } from 'redux';

import characterList from './characterList/reducer';
import character from './character/reducer';
import series from './series/reducer';

export default combineReducers({
  character,
  characterList,
  series,
});
