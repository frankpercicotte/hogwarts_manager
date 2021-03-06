import { handleChosenHouse } from '../handleScores/action'

export const HandleThunks = (house) => (dispatch) => {
  // console.log('handleHouse at thunks:', house);
  dispatch(handleChosenHouse(house));

  // if (house) {
  //   // console.log('value click: true');
  //   dispatch(handleClickHouse(true));
  // } else {
  //   // console.log('value click: false');
  //   dispatch(handleClickHouse(false));
  // }
};

