const HandleReducer = (state = [], action) => {

  switch (action.type) {

    case '@CHOSEN/HOUSE':
      const getHouse = action.getHouse;
      console.log('chosen at reducer:', getHouse)
      return getHouse;

    // case '@CLICK/HOUSE':
    //   const { getBool } = action || false;
    //   return getBool;

    default:
      return state;
  }

}

export default HandleReducer;