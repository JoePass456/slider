import React from 'react';

import './App.css';

function Board(props) {
    let grid = [];
    

    //Blank data board render
    if (props.board.length === 0) {
        //console.log('no data');
        for (let i = 0; i < 16; i++) {
            grid.push(<div key={i} className="tile col-3">{i}</div>);
        }
    } else {
        //if data loaded, render board with image
        for (let i = 0; i < 16; i++) {
            //if tile is blank
            if (props.board[i].isBlank) {
                grid.push(<div key={i} className="tile col-3">BLANK</div>);
                //else if tile is clickible
            } else if (
                i === props.possibleMoves.up ||
                i === props.possibleMoves.down ||
                i === props.possibleMoves.left ||
                i === props.possibleMoves.right) {
                grid.push(<div onClick={() => props.handleMove(i)} key={i} className="tile border-danger col-3">{props.board[i].img}</div>);
                //console.log('rendered onclick');
                //else any other tile
            } else {
                grid.push(<div key={i} className="tile col-3">{props.board[i].img}</div>);
            }
        }
    }

    return (
        <div className="container border rounded">
            <div className="row">
                {grid}
            </div>
        </div>
    );
}

export default Board;