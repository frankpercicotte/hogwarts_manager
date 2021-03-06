const HandleReducer = (state = '', action) => {

  switch (action.type) {

    case '@CHOSEN/HOUSE':
      const { getHouse } = action;
      // console.log('chosen at reducer:', getHouse)
      return getHouse;

    default:
      return state;
  }

}

export default HandleReducer;