const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
    var newBoard = [];
    var newRow = [];
    for (let rows = 0; rows < numberOfRows; rows++) {
        for (let columns = 0; columns < numberOfColumns; columns++) {
            newRow.push(' ');          
        }
        newBoard.push(newRow);
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
        for (let columns = 0; columns < numberOfColumns; columns++) {
            row.push(null);          
        }
        board.push(row);
    row = [];
    }
    if (numberOfBombs > numberOfColumns * numberOfRows) {
        console.log('More bombs than spaces on this board. There are ' + 
        numberOfBombs + ' bombs and ' + numberOfColumns * numberOfRows + 'spaces on the board.');
        return;
    } else {
        console.log(`Populating ${numberOfBombs} bombs.`);
        var numberOfBombsPlaced = 0;
        var randomRowIndex;
        var randomColumnIndex;
        while (numberOfBombsPlaced < numberOfBombs) {
            randomRowIndex = Math.floor((Math.random() * numberOfRows));
            randomColumnIndex = Math.floor((Math.random() * numberOfColumns));
            if (board[randomRowIndex][randomColumnIndex] !== 'B') {
                board[randomRowIndex][randomColumnIndex] = "B";
                numberOfBombsPlaced++;
            }
        }
        return board;
    }
}

const getNumberOfNeighborBombs = (bombBoard, rowIndex, columnIndex) => {
    let neighborOffsets = [];
    // Check for where the offset is in the table and set search parms
    const numberOfRows = bombBoard[0].length
    const numberOfColumns = bombBoard.length
    if (rowIndex + 1 <=  numberOfRows) {
            rowEnd = rowIndex + 1;
        }else {
            rowEnd = rowIndex;
        }
    if (rowIndex > 0) {
        rowStart = rowIndex - 1;
    } else {
        rowStart = rowIndex;
    }
    if (columnIndex + 1 <= numberOfColumns ) {
        columnEnd = columnIndex + 1
    } else {
        columnEnd = columnIndex
        }
    if (columnIndex > 0) {
        columnStart = columnIndex - 1;
    } else {
        columnStart = columnIndex;
    }
    for (let rows = rowStart; rows <= rowEnd; rows ++) {
        for (let columns = columnStart; columns <= columnEnd; columns++){
            if (!(rowIndex === rows && columnIndex === columns )) {
                neighborOffsets.push([rows, columns])
            } 
    }
    }
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
        if (bombBoard[offset[0]][offset[1]] === 'B') {
            numberOfBombs++;
        }
    } )
    return numberOfBombs;
}

const flipTile = (playerBoard, bombBoard, rowIndex, columnIndex) =>{
    if (playerBoard[columnIndex][rowIndex] !== ' '){
        console.log('This has already been flipped.')
        return;
    } else if (bombBoard[columnIndex][rowIndex] === 'B'){
        playerBoard[columnIndex][rowIndex] = 'B';
    } else {
        playerBoard[columnIndex][rowIndex] = getNumberOfNeighborBombs(bombBoard, rowIndex, columnIndex)
    }
}

// Print the board
 let printBoard = (board) => {
     board.map(row =>{
         console.log(row.join(' | '));
     })

 }

let numberRows = 4;
let numberColumns = 4;
let numberBombs = 8;

let playerBoard = generatePlayerBoard(numberRows, numberColumns);
let bombBoard = generateBombBoard(numberRows, numberColumns, numberBombs);
console.log('Player Board: ');
printBoard(playerBoard);
console.log('guessing..')
flipTile(playerBoard, bombBoard, 0, 0)
printBoard(playerBoard);
