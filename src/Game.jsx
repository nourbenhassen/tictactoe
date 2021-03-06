import React from "react"
import Board from "./Board"

class Game extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            NbPlayers: null
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        const NbPlayers;
        if (event.target.value==2) NbPlayers=2;
        else NbPlayers=1;

        this.setState({
            NbPlayers: NbPlayers
        })
    }

    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board NbPlayers={this.state.NbPLayers} />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  export default Game