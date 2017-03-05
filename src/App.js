import React, { Component } from 'react';
import './css/App.css';
import './../public/Hero.jpg';
import NavBar from './NavBar';
import QuizCountdown from './QuizCountdown';
import Instructions from './Instructions';
import SelectActivity from './SelectActivity';
import Quiz from './Quiz';
import PersonalizeRobot from './PersonalizeRobot';
import Activity from './Activity';
import MyProfile from './MyProfile';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedPage: 'Intro',
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
        <NavBar changePage={this.changePage} currentPage={this.state.renderedPage}/>
        <div className="container">
          {getTitle (this.state.renderedPage)}
        </div>
        <div className="App-Body">
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
  } else if (currentPage === 'Intro') {
    return (<h1>Welcome</h1>);
  } else if (currentPage === 'MyProfile') {
    return (<h1>My Profile</h1>);
  }
}

function getPage (renderPage, countUntilNextQuiz, changePageFunction) {
  if (renderPage === 'SelectActivity') {
    return (
      <div>
        <QuizCountdown count={countUntilNextQuiz}/>
        <Instructions page={renderPage}/>
        <SelectActivity changePage={changePageFunction}/>
      </div>
    );
  } else if (renderPage === 'Quiz') {
    return (
      <div>
        <Instructions page={renderPage}/>
        <Quiz changePage={changePageFunction}/>
      </div>
    );
  } else if (renderPage === 'PersonalizeRobot') {
    return (
      <div>
        <QuizCountdown count={countUntilNextQuiz}/>
        <Instructions page={renderPage}/>
        <PersonalizeRobot changePage={changePageFunction}/>
      </div>
    );
  } else if (renderPage === 'Activity') {
    return (
      <div>
        <QuizCountdown count={countUntilNextQuiz}/>
        <Instructions page={renderPage}/>
        <Activity changePage={changePageFunction}/>
      </div>
    );
  } else if (renderPage === 'MyProfile' ) {

    return (
      <div>
        <MyProfile changePage={changePageFunction} page={renderPage}/>
      </div>
    );
  }
  return <MyProfile changePage={changePageFunction} page={renderPage}/>;
}

export default App;
