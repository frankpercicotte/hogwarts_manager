import { pointsHouse } from '../houses/action'

export const pointHouseThunks = (house, points) => (dispatch, getStore) => {
  const { houses } = getStore();

  houses.map((elm) => {
    return (elm.house === house) ? elm.points += points : elm.points;
  });

  // console.log(houses);

  dispatch(pointsHouse(houses));

};