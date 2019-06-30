import React from "react"
import Square from "./Square"
import functions from "./functions"
import Game from "./Game";

//TO IMPROVE: unbeatable AI ; now when you play 0, 6, 4 then you win 
//Add option one player or two players
//My game will reset as soon as it's over so I can play again
// I can choose whether I want to play as X or O.

class Board extends React.Component {
    constructor (props) {
      super(props)
      this.state={
        squares: Array(9).fill(null),
        isXnext:'false'
      }
    }
    
    handleClick(i) {
      console.log(this.props);      
      /*if (this.props.NbPLayers){
        const squares = this.state.squares.slice()
        if(!squares[i]){ 
          squares[i]='X';
          computerPlays(squares);
      }
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
      
      const winner = functions.calculateWinner(this.state.squares);
      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      }
      else {
        status = 'Next player: ' + (this.state.alt==="X" ? "O" : "X");
      }
      return (
        <div className='board'>
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