import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './marble.png'
import logo from './marble.png';
import line from './line.png';

class Square extends React.Component
{
  render()
  {
    if(this.props.value=='O')
    {
      return(
        
      <button className="circle" onClick={this.props.onClick}>
      <img src={logo} width="30" height="30" />
      </button>
      );
    }
    else
    {
    return(
    <button className="circle" onClick={this.props.onClick}>
    </button>
    );
  }
  }
}

  function calculateWinner(squares) {
    let val=false;
    let count=0;
    for(let i=0;i<squares.length;i++)
    {
      if(squares[i]=='O')
      {
        count++;
        if(i-1>=0)
        {
          if(squares[i-1]=='O')
          {
          return true;
          }
        }
        if(i+1<46)
        {
          if(squares[i+1]=='O')
          {
          return true;
          }
          
        }
        if(i-7>=0)
        {
          if(squares[i-7]=='O')
          {
          return true;
          }
        }
        if(i+7<46)
        {
          if(squares[i+7]=='O')
          {
          return true;
          }
        }
      }
    }
    if(count==1)
    {
      return -1;
    }
    return count;
  }

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          squares: Array(47).fill('O'),
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
        this.state.squares[i]='O';
        }
      }
      
      handleClick(i) {
        const squares = this.state.squares;
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
      if(winner==-1)
      {
        return(
          <div>
          <div className="status">{"You Won!!!"}</div>
          </div>
          );

      }
      else{
      return(
      <div>
      <div className="status">{status +" "+stat}</div>
      <div className="status">{"Marble left on boards: "+winner}</div>
      </div>
      );
    }
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
      <div>
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
          <div>
          <div><img src={line} width="1000" height="50" /></div>
          <div>{"About Game"}</div>
          <div>
            <ol>"Brainvita, also called Peg Solitaire, is a single person board game. It involves moving marbles from one position to another position on the board according to rules. The objective is to have as few marbles as possible at the end of the game."</ol>
          </div>
          <div>Rules</div>
          <div><ol>The board consists of holes(positions) which can hold marbles. All positions, except one, have marbles placed in them at the start of the game. A valid move for a marble is moving it from its position to an empty position(which is two positions away, horizontally or vertically) by jumping over a non-empty position. The marble in the 'jumped' position is removed from the board. The game ends when there is no valid move possible.
                  The objective is to move marbles such that at the end of the game, there are as few marbles as possible. A single marble is a perfect result.
                  Play Brainvita online, now!</ol></div>
          </div>
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
