import React, { Component } from 'react';
import './css/App.css';
import './../public/Hero.jpg';
import NavBar from './NavBar';
import QuizCountdown from './QuizCountdown';
import Instructions from './Instructions';
import SelectActivity from './SelectActivity';


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <h1 className="">Welcome</h1>
        </div>
        <div className="App-Body">
          <QuizCountdown />
          <Instructions/>
          <SelectActivity/>
        </div>
      </div>
    );
  }
}

export default App;
