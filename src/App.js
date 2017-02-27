import React, { Component } from 'react';
import './css/App.css';
import './../public/Hero.jpg';
import NavBar from './NavBar';
import QuizCountdown from './QuizCountdown';
import Instructions from './Instructions';
import SelectActivity from './SelectActivity';
import Quiz from './Quiz';
import PersonalizeRobot from './PersonalizeRobot';
import Button from 'react-bootstrap/lib/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedPage: 'SelectActivity',
      countUntilNextQuiz: 4
    };
    this.changePage = this.changePage.bind(this)
  }

  changePage(pageName){
    //console.log(pageName);
    this.setState({renderedPage: pageName});

  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          {getTitle (this.state.renderedPage)}
        </div>
        <div className="App-Body">
          <QuizCountdown count={this.state.countUntilNextQuiz}/>
          <Instructions page={this.state.renderedPage}/>
          {getPage (this.state.renderedPage, this.state.countUntilNextQuiz, this.changePage)}

        </div>
      </div>
    );
  }
}



function getTitle (currentPage) {
  if (currentPage === 'SelectActivity') {
    return (<h1>Welcome</h1>);
  } else if (currentPage === 'Quiz'){
    return (<h1>Quiz</h1>);
  } else if (currentPage === 'PersonalizeRobot'){
    return (<h1>Change Your Robot</h1>);
  }
}

function getPage (renderPage, countUntilNextQuiz, changePageFunction) {
  if (renderPage === 'SignUp') {
    return (
      <SelectActivity changePage={changePageFunction}/>
    );
  } else if ((renderPage === 'SelectActivity')) {
    return (
      <SelectActivity changePage={changePageFunction}/>
    );
  } else if ((renderPage === 'Quiz')) {
    return (
      <Quiz changePage={changePageFunction}/>
    );
  } else if ((renderPage === 'PersonalizeRobot')) {
    return (
      <PersonalizeRobot changePage={changePageFunction}/>
    );
  }
  return null;
}

export default App;
