import React from 'react';
// import './ComponentB.css';
import '../counterbutton/CounterButton.css';

const ComponentB = ({ cendol, setCendol }) => {

  const handleIncrement = () => {
    setCendol(cendol + 10);
  };
  return (
    <div className='cendolincrement' style={{marginTop:"20px"}}>
    <div className='container'>
      <div className="counter-circle" style={{ background: "orange" }}>
        <p>{cendol}</p>
        <p>click to increase counter</p>
      </div>
    </div>
    <button className="changeColorBtn" onClick={handleIncrement} style={{ background:"lightgreen" }}>Increase Cendol</button>
    </div>
  );
};

export default ComponentB;