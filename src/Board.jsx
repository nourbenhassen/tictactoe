import React from "react"
import Square from "./Square"
import functions from "./functions"

//TO IMPROVE: unbeatable AI ; now when you play 0, 6, 4 then you win 

class Board extends React.Component {
    constructor (props) {
      super(props)
      this.state={
        squares: Array(9).fill(null),
        alt: "O",
        started: false
      }
    }
    
    handleClick(i) {
      const squares = this.state.squares.slice()
      this.state.started = true;
      if(!squares[i]){ 
        squares[i]='X';
        computerPlays (squares);
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
      
      const winner = functions.calculateWinner(this.state.squares);
      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      }
      else {
        //status = 'Next player: ' + (this.state.alt==="X" ? "O" : "X");
      }
      return (
        <div className="board">
                 <p> {this.state.started ? "": "You can start the game now"} </p>
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

  function computerPlays(squares){
    let j = functions.AISquare(squares); 
    
    return squares[j]='O';
    }

  export default Board