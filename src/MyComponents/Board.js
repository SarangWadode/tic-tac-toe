import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    renderSquare(i) {
        return (
            <Square
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)}
            />
          );
    }

    render() { 
        return ( 
            <div>
                <div className="board-row">
                    <div>{this.renderSquare(0)}</div>
                    <div>{this.renderSquare(1)}</div>
                    <div>{this.renderSquare(2)}</div>
                </div>
                <div className="board-row">
                    <div>{this.renderSquare(3)}</div>
                    <div>{this.renderSquare(4)}</div>
                    <div>{this.renderSquare(5)}</div>
                </div>
                <div className="board-row">
                    <div>{this.renderSquare(6)}</div>
                    <div>{this.renderSquare(7)}</div>
                    <div>{this.renderSquare(8)}</div>
                </div>
            </div>
         );
    }
}
 
export default Board;