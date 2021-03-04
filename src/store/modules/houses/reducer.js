const houses = [
  { house: 'Gryffindor', points: 0 },
  { house: 'Slytherin', points: 0 },
  { house: 'Hufflepuff', points: 0 },
  { house: 'Ravenclaw', points: 0 }
]
const HouseReducer = (state = houses, action) => {

  switch (action.type) {

    case '@POINTS/HOUSE':
      return state;

    default:
      return state;
  }

}

export default HouseReducer;