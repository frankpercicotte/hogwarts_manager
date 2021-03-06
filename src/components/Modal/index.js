import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { HandleThunks } from '../../store/modules/handleScores/thunks';
import { pointHouseThunks } from '../../store/modules/houses/thunks';


const Modal = () => {

  const getStudent = useSelector((state) => state.getStudent);
  const students = useSelector((state) => state.students) || [];
  const dispatch = useDispatch();

  const [input, setInput] = useState('');


  const loadPoints = (chosenStudent) => {
    const student = students.find((elm) => elm.name === getStudent)

    if (input) {
      dispatch(pointHouseThunks(student.house, Number(input)));
      setInput('');
      dispatch(HandleThunks(''));

    }
  }

  getStudent && loadPoints(getStudent);


  const handValue = (e) => {
    setInput(e.target.value);
  }


  return (
    <div className='Modal'>
      <div>
        <div>Pontuação</div>
        <input type='text' onChange={handValue} value={input} />
      </div>
    </div>
  );
}

export default Modal;