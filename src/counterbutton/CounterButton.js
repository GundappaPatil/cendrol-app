import React, { useState } from 'react';
import './CounterButton.css';

const CounterButton = () => {
  const [counter, setCounter] = useState(0);
  const[counterColor,setCounterColor] = useState('orange');
  let buttonColor = 'lightgreen';

  const handleClick = () => {
        setCounter(counter + 1);
        setCounterColor(buttonColor);
  };
  return (
    <div className='counterbutton'>
    <div className='container'>
      <div className="counter-circle" style={{ background: counterColor }}>
        <p>{counter}</p>
        <p>click to increase counter</p>
      </div>
    </div>
    <button className="changeColorBtn" onClick={handleClick} style={{ background: buttonColor }}>Change Color</button>
    </div>
  );
};

export default CounterButton;