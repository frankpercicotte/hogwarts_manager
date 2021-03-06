import { pointHouseThunks } from './store/modules/houses/thunks';
import { loadStudentsThunks } from './store/modules/students/thunks';
import { HandleThunks } from './store/modules/handleScores/thunks'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import StudentsView from './components/studentsView'
import './App.css';


function App() {


  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);

  const [ListStudent, setListStudent] = useState(false);
  const [poinstHouses] = useState(houses);
  const [input, setInput] = useState('');

  const loadListStudents = () => {
    if (!ListStudent) {
      setListStudent(true);
      dispatch(loadStudentsThunks());
    }
  }

  loadListStudents();

  useEffect(() => {
  }, [poinstHouses]);


  const getStudent = useSelector((state) => state.getStudent);
  const students = useSelector((state) => state.students) || [];

  const loadPoints = (chosenStudent) => {

    const student = students.find((elm) => elm.name === getStudent)
    console.log(student.house);

    if (input && getStudent) {
      dispatch(pointHouseThunks(student.house, Number(input)));
      setInput('');
      dispatch(HandleThunks(''));
    }
  }

  getStudent && loadPoints(getStudent);


  const handChange = (e) => {
    setInput(e.target.value);
  }

  return (

    <div className="App">
      <header className="App-header">
        <div>
          <div>Pontuação</div>
          <input type='text' onChange={handChange} value={input} />
        </div>
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
