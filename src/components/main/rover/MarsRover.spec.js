import {MarsRover} from "./MarsRover";
import {Position} from "../position";

describe('The Mars Rover', () => {
    it(' has the correct default position and direction', () => {
        const rover = new MarsRover();
        expect(rover.direction).toEqual('N');
        expect(rover.position).toEqual(new Position(0,0))
    });
});

