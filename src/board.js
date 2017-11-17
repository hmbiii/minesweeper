export class Board {
    constructor(numberOfRows, numberOfColumns, numberBombs){
        this._numberOfRows = numberOfRows;
        this._numberOfColumns = numberOfColumns;
        this._numberBombs = numberBombs;
        this._numberOfTiles = this._numberOfColumns * this._numberOfRows;
        this._playerBoard = Board.generatePlayerBoard(this._numberOfRows, this._numberOfColumns);
        this._bombBoard = Board.generateBombBoard(this._numberOfRows, this._numberOfColumns, this._numberBombs);
    }

    get playerBoard() {
        return this._playerBoard;
    }

    flipTile (rowIndex, columnIndex) {
            if (this._playerBoard[columnIndex][rowIndex] !== ' '){
                console.log('This has already been flipped.')
                return;
            } else if (this._bombBoard[columnIndex][rowIndex] === 'B'){
                this._playerBoard[columnIndex][rowIndex] = 'B';
            } else {
                this._playerBoard[columnIndex][rowIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex)
            }
            this._numberOfTiles--
        }
    
    getNumberOfNeighborBombs (rowIndex, columnIndex) {
            let neighborOffsets = [];
            let rowEnd;
            let rowStart;
            let columnEnd;
            let columnStart;
            // Check for where the offset is in the table and set search parms
            const numberOfRows = this._bombBoard[0].length
            const numberOfColumns = this._bombBoard.length
            if (rowIndex + 1 <  numberOfRows) {
                    rowEnd = rowIndex + 1;
                }else {
                    rowEnd = rowIndex;
                }
            if (rowIndex > 0) {
                rowStart = rowIndex - 1;
            } else {
                rowStart = rowIndex;
            }
            if (columnIndex + 1 < numberOfColumns ) {
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
                        neighborOffsets.push([columns, rows])
                    } 
            }
            }
            let numberOfBombs = 0;
            neighborOffsets.forEach(offset => {
                if (this._bombBoard[offset[0]][offset[1]] === 'B') {
                    numberOfBombs++;
                }
            } )
            return numberOfBombs;
        }

    hasSafeTiles() {
            return (this._numberBombs === this._numberOfTiles);
        }
    
    printBoard() {
            this._playerBoard.map(row =>{
                console.log(row.join(' | '));
            })
    }
    static generatePlayerBoard(numberOfRows, numberOfColumns) {
        var newBoard = [];
        var newRow = [];
        for (let rows = 0; rows < numberOfRows; rows++) {
            for (let columns = 0; columns < numberOfColumns; columns++) {
                newRow.push(' ');          
            }
            newBoard.push(newRow);
        newRow = [];
        }
        return newBoard;
    }
    
    static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
}