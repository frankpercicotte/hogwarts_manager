import { loadStudentsThunks } from './store/modules/students/thunks';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import StudentsView from './components/studentsView';
import Modal from './components/Modal';
import './App.css';


function App() {


  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);
  const getStudent = useSelector((state) => state.getStudent);


  const [ListStudent, setListStudent] = useState(false);
  const [student] = useState(getStudent);

  useEffect(() => { }, [student]);


  const loadListStudents = () => {
    if (!ListStudent) {
      setListStudent(true);
      dispatch(loadStudentsThunks());
    }
  }

  loadListStudents();


  return (

    <div className="App">
      <header className="App-header">
        {getStudent && <Modal />}
        <div>
          {houses.map((elm, idx) => <div key={idx}> {elm.house} : {elm.points}</div>)}
        </div>
        <hr style={{ width: '60%' }}></hr>
        <StudentsView />

      </header>
    </div>
  );
}

export default App;
