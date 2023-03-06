import './App.css';
import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

function App() {
  const [patronsIn, setPatronsIn] = useState(0);
  const [patronsOut, setPatronsOut] = useState(0);
  const [patronsInPark, setPatronsInPark] = useState(0);

  useEffect(() => {
    setPatronsInPark(patronsIn - patronsOut);

  }, 
  [patronsIn, patronsOut]);

  let incrementPatronsIn = () => {
    setPatronsIn(patronsIn + 1);
  };

  let incrementPatronsOut = () => {
    setPatronsOut(patronsOut + 1);
  };



  return (
    <div className="App">
      <h3>OAPatron Counter</h3>
      <div>
        <ButtonGroup variant="contained"> 
          <Button onClick={incrementPatronsOut}>-</Button>
          <Button>{patronsInPark}</Button>
          <Button onClick={incrementPatronsIn}>+</Button> 
        </ButtonGroup>
      </div>
      <p>Total patrons in: {patronsIn}</p>
      <p>Total patrons out: {patronsOut}</p>
    </div>
  );
}

export default App;
