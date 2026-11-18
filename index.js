const board = document.getElementById('chessboard');

// Each string is one row, top (black's side) to bottom (white's side).
// Uppercase = white, lowercase = black, '.' = empty square.
const startPosition = [
  'rnbqkbnr',
  'pppppppp',
  '........',
  '........',
  '........',
  '........',
  'PPPPPPPP',
  'RNBQKBNR'
];

const pieceSymbols = {
  K: '♔', Q: '♕', R: '♖', B: '♗', N: '♘', P: '♙',
  k: '♚', q: '♛', r: '♜', b: '♝', n: '♞', p: '♟'
};

for (let row = 0; row < 8; row++) {
  for (let col = 0; col < 8; col++) {
    const square = document.createElement('div');
    square.classList.add('square');

    // Alternate colors based on row + column parity
    const isLight = (row + col) % 2 === 0;
    square.classList.add(isLight ? 'light' : 'dark');

    // Save coordinates on the element for game logic later
    square.dataset.row = row;
    square.dataset.col = col;

    // Look up which piece (if any) starts on this square
    const piece = startPosition[row][col];
    if (piece !== '.') {
      square.textContent = pieceSymbols[piece];
    }

    board.appendChild(square);
  }
}

// Click a piece to select it, then click another square to move it there.
// (No rule checking yet — any piece can go anywhere.)
let selected = null;

board.addEventListener('click', (event) => {
  const square = event.target.closest('.square');
  if (!square) return;

  if (selected === null) {
    if (square.textContent !== '') {
      selected = square;
      square.classList.add('selected');
    }
    return;
  }

  if (square !== selected) {
    square.textContent = selected.textContent;
    selected.textContent = '';
  }
  selected.classList.remove('selected');
  selected = null;
});
