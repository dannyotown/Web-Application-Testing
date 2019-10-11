import React,{useState} from 'react';
import './App.css';
import DashBoard from './components/Dashboard';
import CommandDash from './components/CommandDash';

function App() {
  const [strike, setStrikes]= useState(0);
  const [ball, setBalls] = useState(0);
  const [out, setOuts] = useState(0);

  const strikeAdd = ()=>{
    const newValue = strike + 1;
    setStrikes(newValue);
    outCondition();
  }
  const ballAdd = ()=>{
    const newBall = ball + 1;
    setBalls(newBall);
    outCondition();
  }

  const outCondition = () =>{
    const newOut = out + 1;
    if(strike == 3){
      setOuts(newOut)
      setStrikes(0)
      setBalls(0);
    }else if(ball == 4){
      setStrikes(0)
      setBalls(0)
    }
  }
  const Hit = () =>{
    setStrikes(0);
    setBalls(0);
  }

  const Foul = () =>{
    if(strike == 0 || strike == 1){
      const newValue = strike + 1;
      setStrikes(newValue);
    }
  }


  return (
    <div className="App">
      <DashBoard strike={strike} ball={ball} out={out} />
      <CommandDash strikeAdd={strikeAdd} ballAdd={ballAdd} Hit={Hit} Foul={Foul}/>
    </div>
  );
}

export default App;
