import React from 'react';
import ReactDOM from 'react-dom';
import CustomizeRobot from './../CustomizeRobot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var changeRobotFunction = fucntion () {};
  var robotArray = {
    [],
    [],
    [],
    []
  };
  var robotArmsImages = {};
  var robotBodyImages = {};
  var robotHeadImages = {};
  var robotLegsImages = {};

  ReactDOM.render(
    <CustomizeRobot
      addtoFirebase={addtoFirebaseFunction}
      userID={userID}
      ReactGA={ReactGA}
      changePage={changePageFunction}
      changeRobot={changeRobotFunction}
      head={robotArray[0]}
      body={robotArray[1]}
      arms={robotArray[2]}
      legs={robotArray[3]}
      robotArmsImages={robotArmsImages}
      robotBodyImages={robotBodyImages}
      robotHeadImages={robotHeadImages}
      robotLegsImages={robotLegsImages}
    />, div);
});
