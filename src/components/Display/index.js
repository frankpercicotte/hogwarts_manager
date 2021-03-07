import { useSelector } from 'react-redux';
import './styleDisplay.css';

const Display = () => {

  const houses = useSelector((state) => state.houses);

  return (
    <div className='displayView'>
      {houses.sort((a, b) => b.points - a.points).map((elm, idx) =>
        <div className='cardsView' key={idx}>
          <div>{elm.house}</div>
          <img src={elm.logo} alt={'logo'} />
          <div>{elm.points}</div>
        </div>)}
    </div>
  );
}

export default Display;
