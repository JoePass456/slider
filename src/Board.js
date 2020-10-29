import React from 'react';

import './App.css';

function Board(props) {
    let grid = [];

    if (props.board.length === 0) {
        grid.push(<div key={1} className="col-12 center-text" >
            <h5 className="">Click import to set up new puzzle</h5>
        </div>)
    } else {
        //if data loaded, render board with image
        for (let i = 0; i < 16; i++) {
            //if tile is blank
            if (props.board[i].isBlank) {
                grid.push(<div key={i} className="tile col-3 blank"></div>);
                //else if tile is clickible
            } else if (
                i === props.possibleMoves.up ||
                i === props.possibleMoves.down ||
                i === props.possibleMoves.left ||
                i === props.possibleMoves.right) {
                grid.push(<div
                    onClick={() => props.handleMove(i)}
                    key={i} className="tile border-danger col-3 p-0">
                    <img
                        className="img img-fluid"
                        alt="Lizard Pic"
                        src={props.board[i].img}
                    ></img>
                </div>);
                //console.log('rendered onclick');
                //else any other tile
            } else {
                grid.push(<div key={i} className="tile col-3 p-0"><img className="img img-fluid" alt="Lizard Pic" src={props.board[i].img}></img></div>);
            }
        }
    }

    return (
        <div className="container border rounded">
            <div className="row text-center">
                {grid}
            </div>
        </div>
    );
}

export default Board;