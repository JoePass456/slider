import React, { useState } from 'react';
import './App.css';
import Header from './Header.js';
import Board from './Board.js';
import Controls from './Controls.js'



function App() {
  const [blankIndex, setBlank] = useState(15)
  const [board, setBoard] = useState([]);
  const [turnCount, setCount] = useState(0);

  const findPossibleMoves = (index) => {
    let possibleMoves = {};
    possibleMoves.up = ((index - 4) > 0) ? index - 4 : null;
    possibleMoves.down = ((index + 4) < 16) ? index + 4 : null;
    possibleMoves.left = ((index % 4) !== 0) ? index - 1 : null;
    possibleMoves.right = ((index + 1) % 4 !== 0) ? index + 1 : null;
    return possibleMoves;
  }

  const addPic = () => {
    let newBoard = [];
    for (let i = 0; i < 16; i++) {
      let newObj = {}
      newObj.home = i;
      newObj.img = `./img/Lizards${i}.jpg`;
      newObj.isBlank = false;
      newBoard.push(newObj);
    }
    //set blank position
    newBoard[blankIndex].isBlank = true;
    setBoard(newBoard);
    //reset count
    setCount(0);
  }

  const handleMove = (id) => {
    //console.log(blankIndex, id);
    //add 1 to count
    let newCount = turnCount;
    newCount++;

    let tempObj = board[blankIndex];
    board[blankIndex] = board[id];

    board[id] = tempObj;
    //console.log(board[id]);

    setCount(newCount);
    //console.log('setCount');
    setBlank(id);
    //console.log('setBlank', id);

  }

  const shuffleTiles = () => {
    //for (let i = 0; i <= 1000; i++) {
      let possibleMoves = findPossibleMoves(blankIndex);
      let dir = Math.floor(Math.random() * 4);
      switch (dir) {
        case 0: if (possibleMoves.up) {
          handleMove(possibleMoves.up);
          console.log('up');
        };
          break;
        case 1: if (possibleMoves.down) {
          handleMove(possibleMoves.down);
          console.log('down');
        };
          break;
        case 2: if (possibleMoves.left) {
          handleMove(possibleMoves.left);
          console.log('left');
        };
          break;
        case 3: if (possibleMoves.right) {
          handleMove(possibleMoves.right);
          console.log('right')
        };
          break;
        default:
          alert('error');
      }
      //console.log(possibleMoves, dir);
    //}
    //console.log('in shuffleTiles', possibleMoves);
  }

  const resetTiles = () => {
    //console.log(board)
    //console.log('in reset Tiles');
    let tempBoard = board;
    tempBoard.sort((a, b) => (a.home < b.home) ? -1 : 1);

    //console.log(tempBoard);
    setBlank(15);
    setCount(0);
    setBoard(tempBoard);
  }

  return (
    <div className="app container border rounded">
      <Header />
      <Board possibleMoves={findPossibleMoves(blankIndex)} blankIndex={blankIndex} handleMove={handleMove} board={board} />
      <Controls resetTiles={resetTiles} shuffleTiles={shuffleTiles} turnCount={turnCount} addPic={addPic} />
    </div>
  );
}

export default App;
