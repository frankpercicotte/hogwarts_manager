import { handleChosenHouse } from '../handleScores/action'

export const HandleThunks = (house) => (dispatch) => {
  // console.log('handleHouse at thunks:', house);
  dispatch(handleChosenHouse(house));

};

