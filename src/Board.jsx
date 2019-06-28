import React from "react"
import Square from "./Square"
import functions from "./functions"
//var functions = require('./functions.js');
// functions import not working - problem coming from this keyword ?



// to correct: when X plays O doesn't see immediately new Board, but needs to wait a round after to be able to see it ==> state is not updated before computer plays

class Board extends React.Component {
    constructor (props) {
      super(props)
      this.state={
        squares: Array(9).fill(null)
      }
    }
    
    handleClick(i) {
      const squares = this.state.squares.slice()
      if(!squares[i]){ 
        squares[i]='X';
        let j = functions.AISquare(this.state.squares);  //MODIFICATION HERE
        squares[j]='O';
      }
      
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
      
      const winner = functions.calculateWinner(this.state.squares);   //MODIFICATION HERE
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

  export default Board