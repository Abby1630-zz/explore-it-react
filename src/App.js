import React, { Component } from 'react';
import Scroll from 'react-scroll';
import ReactGA from 'react-ga';

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
import ViewRobot from './ViewRobot';

var scroll = Scroll.animateScroll;
ReactGA.initialize('UA-96822574-1'); //Unique Google Analytics tracking number

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exhibitsAndActivities: [],
      activitiesInDetail: [],
      questions: [],
      renderedPage: 'Welcome',
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

  changeRobot(bodyPart, selected){
    switch(bodyPart) {
      case "head":
        this.setState({robotHead:selected});
        break;
      case "body":
        this.setState({robotBody:selected});
        break;
      case "arms":
        this.setState({robotArms:selected});
        break;
      case "legs":
        this.setState({robotLegs:selected});
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    var me = this;
    fetch(process.env.PUBLIC_URL +'content/exhibitsAndActivities.json').then(function (rawResponse) {
      return rawResponse.json();
    }).then(function (responseData) {
      me.setState({
        exhibitsAndActivities: responseData
      });
    })

    fetch(process.env.PUBLIC_URL +'content/activitiesInDetail.json').then(function (rawResponse) {
      return rawResponse.json();
    }).then(function (responseData) {
      me.setState({
        activitiesInDetail: responseData
      });
    })

    fetch(process.env.PUBLIC_URL +'content/questions.json').then(function (rawResponse) {
      return rawResponse.json();
    }).then(function (responseData) {
      me.setState({
        questions: responseData
      });
    })
  }

  render() {
    var robotArray = [this.state.robotHead, this.state.robotBody, this.state.robotArms, this.state.robotLegs];

    return (
      <div className="App">
        <NavBar changePage={this.changePage} currentPage={this.state.renderedPage} showRobot={this.props.showRobot} robotImage={robotArray[0]+robotArray[1]+robotArray[2]+robotArray[3]}/>
        {getTitle (this.state.renderedPage)}
        <div className="App-Body">
          {getPage (this.state, this.props.showRobot, this.changePage, this.changeActivity, this.changeRobot, ReactGA)}
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
  } else if (currentPage === 'CustomizeRobot') {
    return (<h1 id="explore-page-title">Congratulations!</h1>);
  } else if (currentPage === 'Intro') {
    return (<h1 id="explore-page-title">Welcome</h1>);
  } else if (currentPage === 'MyProfile') {
    return (<h1 id="explore-page-title">My Profile</h1>);
  } else if (currentPage === 'ViewRobot') {
    return (<h1 id="explore-page-title">Check Out Your Robot</h1>);
  } else {
    return null;
  }
}

function getPage (state, showRobot, changePageFunction, changeActivityFunction, changeRobotFunction, ReactGA) {
  //this.state.selectedActivity
  var renderPage = state.renderedPage;
  var countUntilNextQuiz = state.countUntilNextQuiz;
  var selectedExhibit = state.selectedExhibit;
  var selectedActivity = state.selectedActivity;
  var robotArray = [state.robotHead, state.robotBody, state.robotArms, state.robotLegs];
  var exhibitsAndActivities = state.exhibitsAndActivities;
  var activitiesInDetail = state.activitiesInDetail;
  var questions = state.questions;

  ReactGA.pageview(renderPage);

  if (renderPage === 'SelectActivity') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Instructions page={renderPage}/>
        <SelectActivity ReactGA={ReactGA} changePage={changePageFunction} changeActivity={changeActivityFunction} exhibitsAndActivities={exhibitsAndActivities}/>
      </div>
    );
  } else if (renderPage === 'Quiz') {
    return (
      <div>
        <Instructions page={renderPage}/>
        <Quiz ReactGA={ReactGA} changePage={changePageFunction} exhibit={selectedExhibit} activity={selectedActivity} showRobot={showRobot} questions={questions}/>
      </div>
    );
  } else if (renderPage === 'CustomizeRobot') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Instructions page={renderPage}/>
        <CustomizeRobot ReactGA={ReactGA} changePage={changePageFunction} changeRobot={changeRobotFunction} head={robotArray[0]} body={robotArray[1]} arms={robotArray[2]} legs={robotArray[3]} />
      </div>
    );
  } else if (renderPage === 'ViewRobot') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <ViewRobot ReactGA={ReactGA} changePage={changePageFunction} head={robotArray[0]} body={robotArray[1]} arms={robotArray[2]} legs={robotArray[3]} />
      </div>
    );
  } else if (renderPage === 'Activity') {
    return (
      <div>
        {/* <QuizCountdown count={countUntilNextQuiz}/> */}
        <Activity ReactGA={ReactGA} changePage={changePageFunction} exhibit={selectedExhibit} activity={selectedActivity} activitiesInDetail={activitiesInDetail}/>
      </div>
    );
  } else if (renderPage === 'MyProfile' || renderPage === 'Intro') {
    return (
      <div>
        <MyProfile ReactGA={ReactGA} changePage={changePageFunction} page={renderPage}/>
      </div>
    );
  } else if (renderPage === 'Welcome' ) {
    return (
      <div>
        <Welcome ReactGA={ReactGA} changePage={changePageFunction} page={renderPage}/>
      </div>
    );
  }

}

export default App;
