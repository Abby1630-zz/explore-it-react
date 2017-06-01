import React from 'react';
import ReactDOM from 'react-dom';
import CustomizeRobot from './../CustomizeRobot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var changeRobotFunction = function () {};
  var robotArray = [
    [
      {
        "fileName": "arms1.jpg",
        "value": "1"
      }
    ],
    [
      {
        "fileName": "arms1.jpg",
        "value": "1"
      }
    ],
    [
      {
        "fileName": "arms1.jpg",
        "value": "1"
      }
    ],
    [
      {
        "fileName": "arms1.jpg",
        "value": "1"
      }
    ]
  ];
  var robotArmsImages = [
    {
      "fileName": "arms1.jpg",
      "value": "1"
    }
  ];
  var robotBodyImages = [
    {
      "fileName": "arms1.jpg",
      "value": "1"
    }
  ];
  var robotHeadImages = [
    {
      "fileName": "arms1.jpg",
      "value": "1"
    }
  ];
  var robotLegsImages = [
    {
      "fileName": "arms1.jpg",
      "value": "1"
    }
  ];

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
