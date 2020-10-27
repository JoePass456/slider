import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Board from './Board.js';
import Controls from './Controls.js'



function App() {
  const [blankIndex, setBlank] = useState(5)
  const [board, setBoard] = useState([]);
  let turnCount = 0;
  

  //determine potential moves
  let possibleMoves = {};
  possibleMoves.up = ((blankIndex - 4) > 0) ? blankIndex - 4 : null;
  possibleMoves.down = ((blankIndex + 4) < 16) ? blankIndex + 4 : null;
  possibleMoves.left = ((blankIndex % 4) !== 0) ? blankIndex - 1 : null;
  possibleMoves.right = ((blankIndex + 1) % 4 !== 0) ? blankIndex + 1 : null;
  //console.log(blankIndex, possibleMoves);

  const addPic = () => {
    //console.log('in addPic')
    let newBoard = [];
    for (let i = 0; i < 16; i++) {
      let newObj = {}
      newObj.home = i;
      newObj.img = `${i}.jpg`;
      newObj.isBlank = false;
      newBoard.push(newObj);
    }
    //set blank position
    newBoard[blankIndex].isBlank = true;
    setBoard(newBoard);
  }

  const handleMove = (id) => {
    //swap the tiles in the board array
    let temp = board[blankIndex];
    board[blankIndex] = board[id];
    board[id] = temp;
    //add to count
    turnCount++;
    //set new blankIndex
    setBlank(id);
    console.log('current:', blankIndex, 'target:');
  }


  return (
    <div className="app container border rounded">
      <Header />
      <Board possibleMoves={possibleMoves} blankIndex={blankIndex} handleMove={handleMove} board={board} />
      <Controls turnCount={turnCount} addPic={addPic} />
    </div>
  );
}

export default App;
