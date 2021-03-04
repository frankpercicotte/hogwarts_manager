import { pointHouseThunks } from './store/modules/houses/thunks';
import { loadStudentsThunks } from './store/modules/students/thunks';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import { useEffect, useState } from 'react';


function App() {


  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);
  const students = useSelector((state) => state.students) || [];

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


  const loadPoints = (chosenHouse) => {
    const house = chosenHouse || '';


    if (input && house) {
      dispatch(pointHouseThunks(house, Number(input)));
      setInput('');
    }
  }

  const handChange = (e) => {
    setInput(e.target.value);
  }

  return (

    <div className="App">
      <header className="App-header">
        <div>
          <div>Pontuação</div>
          <input type='text' onChange={handChange} value={input} />
          {/* <button type='submit' onClick={loadHouses}>Load students</button> */}
        </div>
        <div>
          {houses.map((elm, idx) => <div key={idx}> {elm.house} : {elm.points}</div>)}
        </div>
        <hr style={{ width: '60%' }}></hr>

        <div>
          {ListStudent &&
            students.map((elm, idx) =>
              <div key={idx} onClick={(e) => loadPoints(elm.house)}>
                {elm.name} - {elm.house}
              </div>)}
        </div>

      </header>
    </div>
  );
}

export default App;
