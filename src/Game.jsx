import React from "react"
import Board from "./Board"

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          <button>2 players</button>
          <button>1 player</button>
        </div>
      );
    }
  }

  export default Game