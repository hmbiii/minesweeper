const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    var newBoard = [];
    var newRow = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        for (let columns = 0; columns < numberOfColumns; columns++) {
            newRow.push(' ');          
        }
        newBoard.push(newRow);
        // console.log(${newBoard}`)
    newRow = [];
    }
    // console.log(newBoard);
    return newBoard;
}

//Create the bomb board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
    let board = [];
    let row = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        row = [];
        for (let columns = 0; columns < numberOfColumns; columns++) {
            row.push(null);          
        }
        board.push(row);
        row.length = 0;
    }
    console.log(`Populating ${numberOfBombs} bombs.`);
    var numberOfBombsPlaced = 0;
    var randomRowIndex;
    var randomColumnIndex;
    while (numberOfBombsPlaced < numberOfBombs) {
        randomRowIndex = Math.floor((Math.random() * numberOfRows));
        randomColumnIndex = Math.floor((Math.random() * numberOfColumns));
        board[randomRowIndex][randomColumnIndex] = "B"
        numberOfBombsPlaced++;
    }
    return board;
}

// Print the board
 let printBoard = (board) => {
     board.map(row =>{
         console.log(row.join(' | '));
     })

 }

let numberRows = 3;
let numberColumns = 4;
let numberBombs = 5;

let playerBoard = generatePlayerBoard(numberRows, numberColumns);
let bombBoard = generateBombBoard(numberRows, numberColumns, numberBombs);
console.log('Playyer Board: ');
printBoard(playerBoard);
console.log('Bomb board: ');
printBoard(bombBoard);