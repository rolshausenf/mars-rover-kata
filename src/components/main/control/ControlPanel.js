import React from "react";

export class ControlPanel extends React.Component {
    constructor(props) {
        super(props);
        this.rover = props.rover;
        this.state = {
            pendingMoves: this.rover.showNextMoves()
        }
    }

    updateNextMoves() {
        this.setState({
            pendingMoves: this.rover.showNextMoves()
        });
    }

    move = (e) => {
        this.rover.move();
        this.updateNextMoves();
    };

    turnLeft = (e) => {
        this.rover.turnLeft();
        this.updateNextMoves();
    };

    turnRight = (e) => {
        this.rover.turnRight();
        this.updateNextMoves();
    };

    render() {
        return (
            <div>
                <div className='commands'>
                    <button onClick={this.move}>Move</button>
                    <button onClick={this.turnLeft}>Left</button>
                    <button onClick={this.turnRight}>Right</button>
                </div>
                <div>
                    <input type="text" readOnly value={this.state.pendingMoves}/>
                </div>
            </div>);
    }
}