import { combineReducers } from 'redux';
import houses from './houses/reducer';
import students from './students/reducer';

export default combineReducers({
  houses,
  students,
});