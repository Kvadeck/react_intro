import React from "react";
import ReactDOM from "react-dom";
import "./squares.css";

// class Square extends React.Component {
//   render() {
//     return (
//       <button

//       // onClick={() => this.props.onClick()}
//       // onClick={() => console.log(this.props.squares)}

//          className="square"
//          onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     xIsNext: false
  //   };
  // }

  // handleClick(i) {
  //   const squares = this.state.squares.slice();

  //   if (calculateWinner(squares) || squares[i]) {
  //     return;
  //   }

  //   squares[i] = this.state.xIsNext ? "X" : "O";
  //   this.setState({
  //     squares: squares,
  //     xIsNext: !this.state.xIsNext
  //   });
  // }

  renderSquare(i) {
    return (
      <Square
        value= {this.props.squares[i]}
        // value= {i}
        // onClick={() => console.log(this.state.squares)}

        // value={this.state.squares[i]}
        // onClick={() => this.handleClick(i)}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    // const winner = calculateWinner(this.state.squares);
    
    // if (winner) {
    //   let status = "Выиграл" + winner;
    // } else {
    //   status = "Следующий ход " + (this.state.xIsNext ? "X" : "O");
    // }
    return (
      <div>
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

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = this.state.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([{
        squares: squares,
      }]),
      xIsNext: !this.state.xIsNext
    });
  }

  render() {

    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);
    
    let status;
    if (winner) {
      status = "Выиграл" + winner;
    } else {
      status = "Следующий ход " + (this.state.xIsNext ? "X" : "O");
    }

    const moves = history.map((step, move) => {
      const desc = move ?
      'Перейти к ходу #' + move :
      'К началу игры';
      return (
        <li>
          <button onClick={()=> this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
