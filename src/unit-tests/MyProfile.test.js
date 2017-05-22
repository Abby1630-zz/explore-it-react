import React from 'react';
import ReactDOM from 'react-dom';
import MyProfile from './../MyProfile';

it('renders without crashing', () => {
  const div = document.createElement('div');

  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var renderPage = 'page1';
  var disclaimer = 'This is a disclaimer';

  ReactDOM.render(
    <MyProfile
      addtoFirebase={addtoFirebaseFunction}
      userID={userID}
      ReactGA={ReactGA}
      changePage={changePageFunction}
      page={renderPage}
      disclaimer={disclaimer}
    />, div);
});
