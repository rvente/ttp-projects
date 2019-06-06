import React, { Component } from "react";
import Card from './CityCard';




class CityFetch extends Component{
  constructor(props){
    super(props);
    this.state = {
      city: "SPRINGFIELD",
      json: ""
    };

  }

  componentDidMount(){
    this.loadAPI();
  }

  render(){
    let objArray = this.state.json || [];
    return(
        <div className = "CardContainer">
          <h2>City Search</h2>
          <input type='text' value={this.state.city} onChange={this.ChangeCity} onKeyPress={this.handleKeyPress}/>
          {
              objArray.map(item => {
                  return(
                      <Card zip={item} />
                  );
              })
          }

        </div>
    );
  }

  loadAPI(){
    //Get The address
    let address = 'http://ctp-zip-api.herokuapp.com/city/'+this.state.city;
    console.log(address);
    fetch(address)
    .then(response => response.json())
    .then(myJson => this.setState({json: JSON.parse((JSON.stringify(myJson)))}));

  }

  ChangeCity = (event) => {
    this.setState({
      city: event.target.value.toUpperCase()
    });
  } //End ChangeCity

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        console.log('enter press here! ');
      this.loadAPI();
    }
  } //End handleKeyPress
};

export default CityFetch;

