
module.exports = {

     calculateWinner(squares) {    ////function to check if there's a winner
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
        let j = Math.floor(Math.random() * emptySpots.length);     //chooses random number between 0 and 8
         return j; 
    },
    AISquare(squares) {
        //chooses best strategic number between 0 and 8
        // Strategy:if 2 "X" are part of a winning combination take the 3rd square
        // if not take random number instead
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
    
                if (squares[a]){
                    if (squares[a]===squares[b] && !squares[c]) return c;
                    else if (squares[a]===squares[c] && !squares[b]) return b;
            }
                else if(squares[b]) {
                    if (squares[b]===squares[c] && !squares[a]) return a;
                    else if (squares[b]===squares[a] && !squares[c]) return c;
                }
          }
          return this.randomEmptySquare(squares);
        }
    };