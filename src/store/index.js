import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import students from './modules/students/reducer';
import houses from './modules/houses/reducer';
import getStudent from './modules/handleScores/reducer';



const combine = combineReducers({
  students,
  houses,
  getStudent,

})
const store = createStore(combine, applyMiddleware(thunk));

export default store;