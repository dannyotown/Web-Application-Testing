import React from 'react';
import './scoreboard.css';

function DashBoard(props) {
  return (
    <>
    <h1>Scoreboard</h1>
    <div className="displayScore">
        <div className="flexColumn">
          <h3>Strikes</h3>
          <p>{props.strike}</p>
        </div>
        <div className="flexColumn">
        <h3>Balls</h3>
        <p>{props.ball}</p>
        </div>
        <div className="flexColumn">
        <h3>Outs</h3>
        <p>{props.out}</p>
        </div>
    </div>
    </>
  );
}

export default DashBoard;