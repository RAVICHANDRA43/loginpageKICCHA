import React, { useState } from 'react';

const EventExample = () => {
  // State to track changes
  const [buttonText, setButtonText] = useState('Click me');}

  // Event handler function
  const handleClick = () => {
    setButtonText('Button clicked!');
    console.log('Button clicked!');
  };

  // JSX with event handler
  return (
    <div>
      <button onClick={handleClick}>{buttonText}</button>
    </div>
  );
;


export default App;
