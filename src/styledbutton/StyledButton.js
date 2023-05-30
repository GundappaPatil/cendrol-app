import React, { useState } from 'react';
import "./StyledButton.css"

const StyledButton = () => {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div className='styledbutton'>
      <button id='Btn' className={isTrue ? 'red-button' : 'blue-button'} onClick={() => setIsTrue(!isTrue)}>
        Styled Button
      </button>
    </div>
  );
};

export default StyledButton;