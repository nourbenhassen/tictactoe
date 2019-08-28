
module.exports = {

     calculateWinner(squares) {    //function to check if there's a winner
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      },
      randomEmptySquare(squares) {
          let emptySpots = squares.filter(item => item===null)
        let j = Math.floor(Math.random() * emptySpots.length);     //chooses random number between empty squares
         return j; 
    },
    AISquare(squares) { // minimax algorithm
        let emptySpots = squares.filter(item => item===null);

      
          return null;
        }
    };