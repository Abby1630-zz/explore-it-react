import React, { Component } from 'react';
import Scroll from 'react-scroll';

import './css/App.css';
import './css/common.css';
import NavBar from './NavBar';
import QuizCountdown from './QuizCountdown';
import Instructions from './Instructions';
import SelectActivity from './SelectActivity';
import Quiz from './Quiz';
import CustomizeRobot from './CustomizeRobot';
import Activity from './Activity';
import MyProfile from './MyProfile';
import Welcome from './Welcome';
import Grid from 'react-bootstrap/lib/Grid';

var scroll = Scroll.animateScroll;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedPage: 'CustomizeRobot',
      countUntilNextQuiz: 4,
      selectedExhibit: "none",
      selectedActivity: "none",
      robotHead: "x",
      robotBody: "x",
      robotArms: "x",
      robotLegs: "x"
      /* On load load in all the questions, activities, and exhibits so you
        don't have to rerender since you have to use setState */
    };
    this.changePage = this.changePage.bind(this)
    this.changeActivity = this.changeActivity.bind(this)
    this.changeRobot = this.changeRobot.bind(this)
  }

  changePage(pageName){
    //console.log(pageName);
    scroll.scrollToTop();
    this.setState({renderedPage: pageName});

  }
  changeActivity(exhibit, activity){
    this.setState({
      selectedExhibit: exhibit,
      selectedActivity: activity
    });
  }

  changeRobot(selectedHead, selectedBody, selectedArms, selectedLegs){
    this.setState({
      robotHead: selectedHead,
      robotBody: selectedBody,
      robotArms: selectedArms,
      robotLegs: selectedLegs
    });
  }

  render() {
    var robotArray = [this.state.robotHead, this.state.robotBody, this.state.robotArms, this.state.robotLegs];
    console.log(robotArray);
    return (
      <div className="App">
        <NavBar changePage={this.changePage} currentPage={this.state.renderedPage}/>
        {getTitle (this.state.renderedPage)}
        <div className="App-Body">
          {getPage (this.state.renderedPage, this.state.countUntilNextQuiz, this.state.selectedExhibit, this.state.selectedActivity, robotArray, this.changePage, this.changeActivity, this.changeRobot)}
          <hr className="explore-small-hr"/>
        </div>
      </div>
    );
  }
}

function getTitle (currentPage) {
  if (currentPage === 'SelectActivity') {
    return (<h1 id="explore-page-title">Select an Activity</h1>);
  } else if (currentPage === 'Quiz'){
    return (<h1 id="explore-page-title">Quiz</h1>);
  } else if (currentPage === 'CustomizeRobot'){
    return (<h1 id="explore-page-title">Congratulations!</h1>);
  } else if (currentPage === 'Intro') {
    return (<h1 id="explore-page-title">Welcome</h1>);
  } else if (currentPage === 'MyProfile') {
    return (<h1 id="explore-page-title">My Profile</h1>);
  } else if (currentPage === 'Welcome') {
    return null;
  }
}

function getPage (renderPage, countUntilNextQuiz, selectedExhibit, selectedActivity, robotArray, changePageFunction, changeActivityFunction, changeRobotFunction) {
  if (renderPage === 'SelectActivity') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Instructions page={renderPage}/>
        <SelectActivity changePage={changePageFunction} changeActivity={changeActivityFunction}/>
      </div>
    );
  } else if (renderPage === 'Quiz') {
    return (
      <div>
        <Instructions page={renderPage}/>
        <Quiz changePage={changePageFunction} exhibit={selectedExhibit} activity={selectedActivity}/>
      </div>
    );
  } else if (renderPage === 'CustomizeRobot') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Instructions page={renderPage}/>
        <CustomizeRobot changePage={changePageFunction} changeRobot={changeRobotFunction} head={robotArray[0]} body={robotArray[1]} arms={robotArray[2]} legs={robotArray[3]} />
      </div>
    );
  } else if (renderPage === 'Activity') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Activity changePage={changePageFunction} exhibit={selectedExhibit} activity={selectedActivity}/>
      </div>
    );
  } else if (renderPage === 'MyProfile' ) {
    return (
      <div>
        <MyProfile changePage={changePageFunction} page={renderPage}/>
      </div>
    );
  } else if (renderPage === 'Welcome' ) {
    return (
      <div>
        <Welcome changePage={changePageFunction} page={renderPage}/>
      </div>
    );
  }
  return <MyProfile changePage={changePageFunction} page={renderPage}/>;
}

export default App;
