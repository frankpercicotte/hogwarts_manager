// import { pointHouseThunks } from './store/modules/houses/thunks';
import { loadStudentsThunks } from './store/modules/students/thunks';
// import { HandleHouseThunks } from './store/modules/handleScores/thunks'

import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import StudentsView from './components/studentsView'
import './App.css';


function App() {


  const dispatch = useDispatch();
  const houses = useSelector((state) => state.houses);


  // const _click = useSelector((state) => state.getBool);
  const _house = useSelector((state) => state.getHouse);


  // console.log('handleClick:', _click);
  console.log('handleHouse:---', _house);

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


  // const loadPoints = (chosenHouse) => {
  //   const house = chosenHouse || '';
  // if (input && house) {
  // dispatch(pointHouseThunks(house, Number(input)));
  // setInput('');
  // }
  // }

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
