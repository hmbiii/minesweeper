// Print the board
const printBoard = (board) => {
    console.log('Current board:');
    console.log(board[0].join(' | '));
    console.log(board[1].join(' | '));
    console.log(board[2].join(' | '));    
}

//define a blank board array
let board = [];
board.push([],[],[]);
board[0].push(' ', ' ', ' ');
board[1].push(' ', ' ', ' ');
board[2].push(' ', ' ', ' ');
printBoard(board);

//test array changes
board[1][1] = '1';
board[2][2] = 'B';
printBoard(board);