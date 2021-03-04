import api from '../../../services/api'
import { ListStudents } from '../students/action'

export const loadStudentsThunks = () => (dispatch, getStore) => {
  api
    .get()
    .then((res) => {
      // console.log('students at thunks.js', res.data);
      dispatch(ListStudents(res.data));
    })
    .catch((err) => console.log(err));
};



