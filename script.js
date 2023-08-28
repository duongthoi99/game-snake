const player1 = "X";
const player2 = "O";
let currentPlayer = player1;
let gameOver = false;
let winner = null;
​
​
function handleCellClick(cell) {
  if (gameOver) {
    return;
  }
​
  const cell  