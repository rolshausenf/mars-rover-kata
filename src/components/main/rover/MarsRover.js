import {Position} from "../position";

export class MarsRover {
    constructor() {
        this.direction = 'N';
        this.position = new Position(0,0);
        this.showRoverCallback = () => alert("Show rover callback not defined");
    }

        execute(commands) {
        this.position.x = 3;
        this.position.y = 3;
        this.showRoverCallback(this);
        this.position.x = 5;
        this.showRoverCallback(this);
    }
}