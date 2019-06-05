import React , {Component, PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            text: "View"
        };
    }

    bindMethods(methods) {
        methods.forEach((item) => {
            this[item] = this[item].bind(this);
        });
    }

    show = () => {
        if (this.state.show)
            this.setState({show: false,
                           text: "View"
                          });
        else {
            this.setState({show: true,
                           text: "Hide"
                          });
        }
    }

    render() {
        let listElements = (
            <ul>
              <li>Folder 1</li>
              <li>Folder 2</li>
              <li>Folder 3</li>
            </ul>
        );
        return (
            <div>
              <h3 className="component-heading">Part 2: Hide Folder Assignment</h3>
              <div className="component-div">
                <button onClick={this.show}>{this.state.text}</button>
                {this.state.show ? listElements : null}
              </div>
            </div>
        );
    }
}

class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: props.firstname,
            lastname: props.lastname,
            savefirstname: props.firstname,
            savelastname: props.lastname,
            isForm: false
        };

    }
    bindMethods(methods) {
        methods.forEach((item) => {
            this[item] = this[item].bind(this);
        });
    }
    show = () => {
        this.setState({isForm: true});
    }
    saveText = () => {
        this.setState({
            savefirstname: this.state.firstname,
            savelastname: this.state.lastname,
            isForm: false
        });
    }
    discard = () => {
        this.setState({
            firstname: this.state.savefirstname,
            lastname: this.state.savelastname,
            isForm: false
        });
    }
    onInputChange = () => {
        this.setState({firstname: document.getElementById("firstname").value});
        this.setState({lastname: document.getElementById("lastname").value});
    }
    render() {
        let form =
            <form>
              <input
                value={this.state.firstname}
                type="text"
                id="firstname"
                onChange={this.onInputChange}
              />
              <input
                value={this.state.lastname}
                type="text"
                id="lastname"
                onChange={this.onInputChange}
              />
            </form>;
        let textElement= <div>{this.state.firstname+ " " + this.state.lastname}</div>;
        let editButton = <button onClick={this.show}>Edit</button>;
        let saveButtons =
            <span>
              <button className="save"onClick={this.saveText}>Save</button>
              <button className="cancel"onClick={this.discard}>Cancel</button>
            </span> ;
        let element =
            <div>
              <h3 className="component-heading">Part 1: Form Edit Assignment</h3>
            <div className="component-div">
              {this.state.isForm ? form : textElement}<br/>
              {this.state.isForm ? saveButtons : editButton}
            </div>
            </div>;
        return element;
    }
}

function App() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" /> 
            <h2>Ralph Vente Assignment 6</h2>
            <FormEdit firstname='First Name' lastname='Last Name'/>
            <Folder/>
          </header>
        </div>
    );
}

export default App;
