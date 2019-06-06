import React, { Component } from "react";
import Card from './CityCard';




class ZipCodeFetch extends Component{
  constructor(props){
    super(props);
    this.state = {
      zipAddress: "10012",
      json: NaN
    };


  }

  componentDidMount(){
    this.loadAPI();
  }

  render(){
    let objArray = this.state.json || [];
    return(
      <div className = "CardContainer">
  <h2>Zip-Code Search</h2>
      <input type='text' value={this.state.zipAddress} onChange={this.ChangeZip} onKeyPress={this.handleKeyPress}/>
        {
          objArray.map(item => {
            return(
              <Card location={item["LocationText"]} coordinates={item["Long"] + " " + item["Lat"]}
              population={item["EstimatedPopulation"]} wages={item["TotalWages"]} />
            );
          })
        }

      </div>
    );
  }

  loadAPI(){
    //Get The address
    let address = 'http://ctp-zip-api.herokuapp.com/zip/'+this.state.zipAddress;
    console.log(address);
    fetch(address)
    .then(response => response.json())
    .then(myJson => this.setState({json: JSON.parse((JSON.stringify(myJson)))}));

  }

  ChangeZip = event => {
    this.setState({
      zipAddress: event.target.value
    });
  } //End ChangeZip

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
        console.log('enter press here! ');
      this.loadAPI();
    }
  } //End handleKeyPress
};

export default ZipCodeFetch;

