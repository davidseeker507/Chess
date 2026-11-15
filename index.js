var board1 = Chessboard('board1', {
  position: 'start',
  pieceTheme: 'chessboardjs-1.0.0/img/chesspieces/wikipedia/{piece}.png'
});
const board = document.getElementById('chessboard');

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Alternate colors based on row + column parity
    const isLight = (row + col) % 2 === 0;
    square.classList.add(isLight ? 'light' : 'dark');
    
    // Optional: save coordinates on the element for game logic later
    square.dataset.row = row;
    square.dataset.col = col;
    
    board.appendChild(square);
  }
}