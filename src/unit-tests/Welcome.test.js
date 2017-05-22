import React from 'react';
import ReactDOM from 'react-dom';
import ViewRobot from './../ViewRobot';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var page = '';

  ReactDOM.render(
    <Welcome
      addtoFirebase={addtoFirebaseFunction}
      userID={userID}
      ReactGA={ReactGA}
      changePage={changePageFunction}
      page={renderPage}
    />, div);
});
