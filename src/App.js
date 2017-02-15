import React, { Component } from 'react';
import './App.css';
import './../public/Hero.jpg';
import Button from 'react-bootstrap/lib/Button';
import NavBar from './NavBar';
import QuizCountdown from './QuizCountdown';
import Instructions from './Instructions';
import SelectActivity from './SelectActivity';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="App-Body">
          <QuizCountdown />
          <Instructions/>
          <SelectActivity/>
        </div>
        <Button bsStyle="success">Test</Button>
      </div>
    );
  }
}

export default App;
