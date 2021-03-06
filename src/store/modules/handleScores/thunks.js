import { handleChosen } from '../handleScores/action'

export const HandleThunks = (student) => (dispatch) => {
  // console.log('handleHouse at thunks:', student);
  dispatch(handleChosen(student));

};

