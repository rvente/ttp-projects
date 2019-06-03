import React, { Component, PropTypes} from 'react';

class Decrement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start: props.start
        };
        this.decrement = this.decrement.bind(this);
    }
    decrement = () => {
        this.setState({start: this.state.start - 1});
        if (this.state.start < 0)
            this.state.start = 0;
    }
    render() {
        let element =
            <div>
              {this.state.start}
              <button onClick={this.decrement}>-</button>
            </div>;
        return element;
    }
}

export default Decrement;
