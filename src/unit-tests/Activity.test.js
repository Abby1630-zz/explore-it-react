import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './../Activity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var selectedExhibit = '';
  var selectedActivity = '';
  var activitiesInDetail = {};

  ReactDOM.render(
    <Activity
      addtoFirebase={addtoFirebaseFunction}
      userID={userID}
      ReactGA={ReactGA}
      changePage={changePageFunction}
      exhibit={selectedExhibit}
      activity={selectedActivity}
      activitiesInDetail={activitiesInDetail}
      countUntilNextQuiz='1'
      countUntilNextReward='4'
    />, div);
});
