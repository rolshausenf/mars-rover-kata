export class MarsRover {
    constructor() {
        this.commands = [];
    }

    move(){
        this.commands.push('M')
    }

    turnLeft() {
        this.commands.push('L')
    }

    turnRight(){
        this.commands.push('R')
    }

    showNextMoves() {
        return this.commands.join('|')
    }
}