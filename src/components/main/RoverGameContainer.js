import React from 'react';
import {MarsRover} from "../rover/MarsRover";
import {ControlPanel} from "./control/ControlPanel";
import {Surface} from "./mars/Surface"

export class RoverGameContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rover: new MarsRover()
        }
    }

    render() {
        return (
            <div>
                <ControlPanel rover={this.state.rover}/>
                <Surface rover={this.state.rover}/>
            </div>
        );
    }
}