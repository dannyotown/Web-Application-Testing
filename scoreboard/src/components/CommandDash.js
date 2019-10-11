import React from 'react';
import './scoreboard.css';

function CommandDash(props) {
    return (
        <>
            <div className="displayScore">
                <button onClick={props.strikeAdd}>Strike!</button>
                <button onClick={props.ballAdd}>Ball!</button>
                <button onClick={props.Foul}>Foul</button>
                <button onClick={props.Hit}>Hit</button>
            </div>
        </>
    );
}

export default CommandDash;