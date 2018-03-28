import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component
{
  render()
  {
    return(
    <button className="square" onClick={this.props.onClick}>
    {this.props.value}
    </button>
    );
  }
}

  function calculateWinner(squares) {
    let val=false;
    let count=0;
    for(let i=0;i<squares.length;i++)
    {
      if(squares[i]=='X')
      {
        count++;
        if(i-1>=0)
        {
          if(squares[i-1]=='X')
          {
          return true;
          }
        }
        if(i+1<46)
        {
          if(squares[i+1]=='X')
          {
          return true;
          }
          
        }
        if(i-7>=0)
        {
          if(squares[i-7]=='X')
          {
          return true;
          }
        }
        if(i+7<46)
        {
          if(squares[i+7]=='X')
          {
          return true;
          }
        }
      }
    }
    return count;
  }

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(47).fill('X'),
          xIsNext:true,
          track:-1
        };
        this.state.squares[0]=null;
        this.state.squares[1]=null;
        this.state.squares[5]=null;
        this.state.squares[6]=null;
        this.state.squares[7]=null;
        this.state.squares[8]=null;
        this.state.squares[12]=null;
        this.state.squares[13]=null;
        this.state.squares[24]=null;
        this.state.squares[35]=null;
        this.state.squares[36]=null;
        this.state.squares[40]=null;
        this.state.squares[41]=null;
        this.state.squares[42]=null;
        this.state.squares[43]=null;
        this.state.squares[47]=null;
        this.state.squares[48]=null;
      }

      compute(i)
      {
        const squares = this.state.squares;
        if(Math.abs(this.state.track-i)==14 || Math.abs(this.state.track-i)==2)
        {
        this.state.squares[(this.state.track+i)/2]=null;
        this.state.squares[this.state.track]=null;
        this.state.squares[i]='X';
        }
      }
      
      handleClick(i) {
        const squares = this.state.squares;
        // if (calculateWinner(squares) || squares[i]) {
        //     return;
        //   }
        if(this.state.xIsNext==false)
        {
          if(this.state.squares[i]==null && (this.state.track!=i))
          {
            this.compute(i);
            this.setState({squares: squares,xIsNext:!this.state.xIsNext});
          }
        }
        else{
          this.state.track=i;
          if(this.state.squares[this.state.track]!=null)
          {
            this.setState({squares: squares,xIsNext:!this.state.xIsNext});
          }
          else{
            this.state.xIsNext=true;
          }
        }
      }
    
      renderSquare(i) {
        return (
          <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            />
        );
    }



  render() {
    const status='Brainvita'
    let stat;
    const winner = calculateWinner(this.state.squares);
    if(winner!=true)
    {
      stat='GameOver'
      return(
      <div>
      <div className="status">{status +" "+stat+" "+"Marble left on boards "+winner}</div>
      </div>
      );
    }
    
    if (!winner) {
      
    }
    else{
      stat='Play'
    return (
      
      <div>
        <div className="status">{status +" "+stat}</div>
        <div className="board-smallrow">
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="board-smallrow">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
        </div>
        <div className="board-row">
          {this.renderSquare(14)}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
          {this.renderSquare(17)}
          {this.renderSquare(18)}
          {this.renderSquare(19)}
          {this.renderSquare(20)}
        </div>
        <div className="board-row">
          {this.renderSquare(21)}
          {this.renderSquare(22)}
          {this.renderSquare(23)}
          {this.renderSquare(24)}
          {this.renderSquare(25)}
          {this.renderSquare(26)}
          {this.renderSquare(27)}
        </div>
        <div className="board-row">
        {this.renderSquare(28)}
        {this.renderSquare(29)}
        {this.renderSquare(30)}
        {this.renderSquare(31)}
        {this.renderSquare(32)}
        {this.renderSquare(33)}
        {this.renderSquare(34)}
        </div>
        <div className="board-smallrow">
          {this.renderSquare(37)}
          {this.renderSquare(38)}
          {this.renderSquare(39)}
        </div>
        <div className="board-smallrow">
          {this.renderSquare(44)}
          {this.renderSquare(45)}
          {this.renderSquare(46)}
        </div>
      </div>
    );
  }
  }
}

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
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game/>,
  document.getElementById('root')
);
