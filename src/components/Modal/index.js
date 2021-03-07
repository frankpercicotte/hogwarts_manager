import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { HandleThunks } from '../../store/modules/handleScores/thunks';
import { pointHouseThunks } from '../../store/modules/houses/thunks';
import './styleModal.css';


const Modal = () => {

  const dispatch = useDispatch();

  const getStudent = useSelector((state) => state.getStudent);
  const listStudents = useSelector((state) => state.students) || [];
  const houses = useSelector((state) => state.houses);

  const [input, setInput] = useState('');
  const [btnOn, setBtnOn] = useState('');

  const student = listStudents.find((elm) => elm.name === getStudent) || '';
  const house = houses.find((elm) => elm.house === student.house) || '';

  const handValue = (e) => {
    setInput(e.target.value);
  }

  const handleBtn = (value) => {
    setBtnOn(value);
  }

  const handleDone = () => {

    let noteValue = Number(input);
    if (btnOn === '-') {
      noteValue *= -1;
    }
    dispatch(pointHouseThunks(student.house, noteValue));
    setInput('');
    setBtnOn('');
    dispatch(HandleThunks(''));
  }

  return (
    <div className='modal'>
      <div>
        <img className='imgLogo' src={house.logo} alt={'logo'}></img>
        <h2>{student.house}</h2>
        <h1>{student.name}</h1>
      </div>
      <div>
        {!btnOn ?
          <>
            <input type='text' onChange={handValue} value={input} />
            <button className='btnGain' onClick={() => handleBtn('+')} >Gain</button>
            <button className='btnLose' onClick={() => handleBtn('-')}>Lose</button>
          </>
          :
          <>
            <h3 data-text={btnOn}> {`${btnOn}${input}`}</h3>
            <button className='btnDone' onClick={handleDone}>Done</button>
          </>
        }
      </div>

      <div>
        <img className='imgStudent' src={student.image} alt={'student'} />
      </div>
    </div>
  );
}

export default Modal;