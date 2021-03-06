import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import students from './modules/students/reducer';
import houses from './modules/houses/reducer';
// import getHouse from './modules/handleScores/reducer';
// import getBool from './modules/handleScores/reducer'
import getHouse from './modules/handleScores/reducer'

// import rootReducer from './modules/rootReducer';

const combine = combineReducers({ students, houses, getHouse })
const store = createStore(combine, applyMiddleware(thunk));

export default store;