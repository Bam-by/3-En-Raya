const squares = document.querySelectorAll(".square");
let turn = "X";
let gameOver = false;

function handleClick() {
  if (gameOver) return;
  if (this.textContent !== "") return;
  this.textContent = turn;
  checkWin();
  turn = turn === "X" ? "O" : "X";
}

function checkWin() {
  const board = [...squares].map(square => square.textContent);
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];
  for (let combo of winningCombos) {
    const [a, b, c] = combo;
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== "") {
      gameOver = true;
      alert(`${turn} wins!`);
      return;
    }
  }
}

squares.forEach(square => square.addEventListener("click", handleClick));
