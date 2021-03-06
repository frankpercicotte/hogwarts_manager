const HandleReducer = (state = '', action) => {

  switch (action.type) {

    case 'CHOSEN@STUDENT':
      const { getStudent } = action;
      // console.log('chosen at reducer:', getStudent)
      return getStudent;

    default:
      return state;
  }

}

export default HandleReducer;