import {Position} from "../position";

export class MarsRover {
    constructor() {
        this.direction = 'N';
        this.position = new Position(0, 0);
        this.showRoverCallback = () => alert("Show rover callback not defined");
    }

    execute(commands) {
        this.executeAll(commands.split(""));
    }

    executeAll(commandsArray) {
        const next = commandsArray.pop();
        this.executeNext(next);
        this.showRoverCallback(this);
        if (commandsArray.length > 0) {
            setTimeout(() => this.executeAll(commandsArray), 500);
        }
    }

    executeNext(nextCommand){

    };
}