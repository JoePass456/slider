import React from 'react';

import './App.css';

function Controls(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col control text-center">
                    <button onClick={props.addPic}>Import</button>
                </div>
                <div className="col control text-center">
                    <button>Shuffle</button>
                </div>
                <div className="col control text-center">
                    <button>Reset</button>
                </div>
            </div>
            <div className="row">
                <div className="col control text-center">
                    <span>Total moves so far:</span>
                    <strong>{props.turnCount}</strong>
                </div>
            </div>
        </div>
    );
}

export default Controls;