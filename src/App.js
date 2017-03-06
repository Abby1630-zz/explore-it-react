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
      renderedPage: 'Activity',
      countUntilNextQuiz: 4,
      selectedExhibit: "none",
      selectedActivity: "none"
    };
    this.changePage = this.changePage.bind(this)
    this.changeActivity = this.changeActivity.bind(this)
  }

  changePage(pageName){
    //console.log(pageName);
    this.setState({renderedPage: pageName});
  }
  changeActivity(exhibit, activity){
    this.setState({
      selectedExhibit: exhibit,
      selectedActivity: activity
    });
  }

  render() {
    return (
      <div className="App">
        <NavBar changePage={this.changePage} currentPage={this.state.renderedPage}/>
        <div className="container">
          {getTitle (this.state.renderedPage)}
        </div>
        <div className="App-Body">
          {getPage (this.state.renderedPage, this.state.countUntilNextQuiz, this.state.selectedExhibit, this.state.selectedActivity, this.changePage, this.changeActivity)}
          <hr/>
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

function getPage (renderPage, countUntilNextQuiz, selectedExhibit, selectedActivity, changePageFunction, changeActivityFunction) {
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
  } else if (renderPage === 'PersonalizeRobot') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Instructions page={renderPage}/>
        <PersonalizeRobot changePage={changePageFunction}/>
      </div>
    );
  } else if (renderPage === 'Activity') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Instructions page={renderPage}/>
        <Activity changePage={changePageFunction} exhibit={selectedExhibit} activity={selectedActivity}/>
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
