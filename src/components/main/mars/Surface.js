import React from 'react';
import './surface.css'

export class Surface extends React.Component {
    constructor(props) {
        super(props);
        this.rover = props.rover;
    }

    renderElements() {
        let elements = [];
        let i;
        for (i = 0; i < 64; i++) {
            elements.push(this.elementForId(i));
        }
        return elements;
    }

    rockOrNotByRandom() {
        if (Math.random() < 0.3) {
            return require('./mars-rock.jpg')
        }
        return require('./mars-surface.jpeg');
    }

    elementForId(id) {
        return (
            <div className="surface-elem">
                <img src={this.rockOrNotByRandom()}
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