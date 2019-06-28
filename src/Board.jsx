import React from "react"
import Square from "./Square"


class Board extends React.Component {
    constructor (props) {
      super(props)
      this.state={
        squares: Array(9).fill(null)
        //alt: "O"
      }
    }
    
    handleClick(i) {
      const squares = this.state.squares.slice()
      if(!squares[i]){ 
        squares[i]='X';
        let j = randomEmptySquare(this.state.squares);
        squares[j]='O';
        //this.state.alt="X";
      }
      /*else if(!squares[i] && this.state.alt==="X"){

        squares[i]='O';
        this.state.alt="O";
      }*/

      this.setState({
        squares: squares
      })
    }
    
    renderSquare(i) {
      return <Square 
               value={this.state.squares[i]} 
               onClick={() => this.handleClick(i)}
               />;
    }
  
    render() {
      
      const winner = calculateWinner(this.state.squares);
      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      }
      else {
        status = 'Next player: ' + (this.state.alt==="X" ? "O" : "X");
      }
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }


//function to check if there's a winner
  function calculateWinner(squares) {
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
  }

  //function to find emptySquare when computer plays
  function randomEmptySquare(squares) {
    //chooses random number between 0 and 8
    let j = Math.floor(Math.random() * 9);
    //if square empty returns j
    if (squares[j]===null) return j;
    //if square not empty call function again until empty j is found - recursion
    else return randomEmptySquare(squares);
}

  export default Board