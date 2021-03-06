const HandleReducer = (state = '', action) => {

  switch (action.type) {

    case '@CHOSEN/STUDENT':
      const { getStudent } = action;
      // console.log('chosen at reducer:', getHouse)
      return getStudent;

    default:
      return state;
  }

}

export default HandleReducer;