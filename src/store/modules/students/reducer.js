

const ListStudents = (state = [], action) => {


  switch (action.type) {

    case '@LIST/STUDENTS':
      const { students } = action;
      return students;

    default:
      return state;
  }

}

export default ListStudents;