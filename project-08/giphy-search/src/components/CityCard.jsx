import React, { Component } from 'react';

class Card extends Component {

    render() {
      let cardContents;
      if(this.props.location == null){
        cardContents = (
          <div className='wrapper'>
          <div className='inner-card-div'>
        <ul>
        <li>{this.props.zip}</li>
        </ul>
          </div>
        </div>
        );
      } else{
        cardContents = (
          <div className='wrapper'>
            <div className='inner-header-div'>
              <h2> {this.props.location} </h2>
            </div>
            <div className='inner-card-div'>
          <ul>
            <li>
              Location: ({this.props.coordinates})
            </li>
            <li> Population: {this.props.population} </li>
            <li> Wages: ${this.props.wages}</li>
          </ul>
            </div>
          </div>
      );
      }

        return cardContents;
    }
}

export default Card;
