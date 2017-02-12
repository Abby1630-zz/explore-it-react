import React, { Component } from 'react';
import './App.css';
import './../public/Hero.jpg';
import Button from 'react-bootstrap/lib/Button';
import NavBar from './NavBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <p className="App-Body">
          <img src="Hero.jpg"/>
        </p>
        <Button bsStyle="success">Test</Button>
      </div>
    );
  }
}

export default App;
