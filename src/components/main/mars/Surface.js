import React from 'react';
import './surface.css'

const NUMBER_OF_SURFACE_ELEMENTS = 64;

export class Surface extends React.Component {
    constructor(props) {
        super(props);
        this.roverId = this.getRandomIntOutOf(NUMBER_OF_SURFACE_ELEMENTS);
        this.targetId = this.getRandomIntOutOf(NUMBER_OF_SURFACE_ELEMENTS);
        this.rover = props.rover;
    }

    getRandomIntOutOf(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    renderElements() {
        let elements = [];
        let i;
        for (i = 0; i < NUMBER_OF_SURFACE_ELEMENTS; i++) {
            elements.push(this.elementForId(i));
        }
        return elements;
    }

    rockOrNotByRandom() {
        if (Math.random() < 0.15) {
            return require('./mars-rock.jpg')
        }
        return require('./mars-surface.jpeg');
    }

    imageForId(id){
        if(id === this.roverId){
            return require('./rover.png');
        }
        if(id === this.targetId){
            return require('./target.jpg');
        }
        return this.rockOrNotByRandom();
    }

    elementForId(id) {
        return (
            <div className="surface-elem">
                <img src={this.imageForId(id)}
                     alt="img-surface"
                     className="img-surface"/>
            </div>
        );
    }

    render() {
        return (
            <div className="surface-grid">{this.renderElements()}</div>
        );
    }
}