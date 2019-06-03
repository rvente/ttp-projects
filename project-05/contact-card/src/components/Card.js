import React, { Component, PropTypes} from 'react';
// import PropTypes from 'prop-types';

class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let element =
            <div className='wrapper'>
              <div className='profile-img'>
              <img
                className="media-object img-circle profile-img"
                alt="profile pic"
                src="http://s3.amazonaws.com/37assets/svn/765-default-avatar.png"
              />
              </div>
        <div className = 'inner-card-div'>
              <h2>{this.props.name}</h2>
              <h4>{this.props.business}</h4>
              <h4>{this.props.number}</h4>
            </div>
            </div>;
        return element;
    }
}

export default Card;
