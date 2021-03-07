
import { DataHouses } from '../../../data/DataHouses'

const HouseReducer = (state = DataHouses, action) => {

  switch (action.type) {

    case '@POINTS/HOUSE':
      return state;

    default:
      return state;
  }

}

export default HouseReducer;