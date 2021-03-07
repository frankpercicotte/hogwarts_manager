import { loadStudentsThunks } from './store/modules/students/thunks';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Display from './components/Display';
import StudentsView from './components/StudentsView';
import Modal from './components/Modal';
import './App.css';


function App() {


  const dispatch = useDispatch();
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
        <Display />
        <hr style={{ width: '80%' }}></hr>
        <StudentsView />

      </header>
    </div>
  );
}

export default App;
