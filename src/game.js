// To play Minesweeper, we will create instances of MineSweeperGame in command line.
// For example:
// In the command line, navigate to the lib directory and run `node`
// Run `.load game.js` to load the contents of this file.
// Then create a Game instance and run commands like so:
// let game = new Game(3, 3, 3);
// game.playMove(0, 1);
// game.playMove(1, 2);
// When done run `.exit`
import { Board } from './board';
class Game {
    constructor(numberOfRows, numberOfColumns, numberBombs){
        this._board = new Board(numberOfRows, numberOfColumns, numberBombs)
    }
    playMove(columnIndex, rowIndex) {
        this._board.flipTile(rowIndex, columnIndex)
        if (this._board._playerBoard[rowIndex][columnIndex] === 'B'){
            console.log('Gave over!')
            this._board.printBoard()
        } else if (this._board.hasSafeTiles()){
            console.log('You won!')
        } else {
            console.log('Current Board:');
            this._board.printBoard();
        }
    }        
}