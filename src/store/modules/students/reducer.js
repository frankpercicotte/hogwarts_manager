

const ListStudents = (state = [], action) => {


  switch (action.type) {

    case '@LIST/STUDENTS':
      const { students } = action;
      // console.log('students at reducer', students);
      return students;

    default:
      return state;
  }

}

export default ListStudents;