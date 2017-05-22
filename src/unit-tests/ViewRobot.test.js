import React from 'react';
import ReactDOM from 'react-dom';
import ViewRobot from './../ViewRobot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var robotArray = { [],[],[],[] };

  ReactDOM.render(
    <ViewRobot
      addtoFirebase={addtoFirebaseFunction}
      userID={userID}
      ReactGA={ReactGA}
      changePage={changePageFunction}
      head={robotArray[0]}
      body={robotArray[1]}
      arms={robotArray[2]}
      legs={robotArray[3]}
    />, div);
});
