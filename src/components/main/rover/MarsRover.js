import {Position} from "../position";

export class MarsRover {
    constructor() {
        this.direction = 'N';
        this.position = new Position(0,0);
        this.nextCommands = '';
        this.showRoverCallback = () => alert("Show rover callback not defined");
    }
        execute(commands) {
        this.nextCommands = commands;
        this.executeAll();
    }

    executeAll(){

    }
}