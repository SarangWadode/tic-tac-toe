import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            squares: Array(9).fill(null),
            xIsNext: true,
         }
         this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = (this.state.xIsNext) ? 'X': 'O';
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
    }
    renderSquare(i) {
        return (<Square 
                    value={this.state.squares[i]} 
                    onClick={() => this.handleClick(i)}    
                />)
    }
    render() { 
        const status = `Next player: ${(this.state.xIsNext) ? 'X':'O'}`;

        return ( 
            <div>
                <div className="status">{status}</div>
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