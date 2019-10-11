import React, { useState } from 'react';
import './App.css';
import DashBoard from './components/Dashboard';
import CommandDash from './components/CommandDash';

function App() {
  const [strike, setStrikes] = useState(0);
  const [ball, setBalls] = useState(0);
  const [out, setOuts] = useState(0);

  const outCondition = (out) => {
    const newOut = out + 1;
    if (strike > 2) {
      setOuts(newOut)
      setStrikes(0)
      setBalls(0);
    } else if (ball === 4) {
      setStrikes(0)
      setBalls(0)
    }
  }
  const strikeAdd = (strike) => {
    const newValue = strike + 1;
    setStrikes(newValue);
    outCondition(strike);
  }
  const ballAdd = (ball) => {
    const newBall = ball + 1;
    setBalls(newBall);
    outCondition(ball);
  }
  const Hit = () => {
    setStrikes(0);
    setBalls(0);
  }
  const Foul = (strike) => {
    if (strike === 0 || strike === 1) {
      const newValue = strike + 1;
      setStrikes(newValue);
      outCondition(strike);
    }
    outCondition(strike);
  }
  return (
    <div className="App">
      <DashBoard strike={strike} ball={ball} out={out} />
      <CommandDash strikeAdd={strikeAdd} ballAdd={ballAdd} Hit={Hit} Foul={Foul} />
    </div>
  );
}

export default App;
