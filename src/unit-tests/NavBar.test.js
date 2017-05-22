import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../NavBar';

it('renders without crashing', () => {
  const div = document.createElement('div');

  var changePage = function() {};
  var renderedPage = '123';
  var showRobot = true;
  var disclaimer = 'This is a disclaimer';
  var robotImage = 'test.jpg'

  ReactDOM.render(
    <NavBar
      changePage={changePage}
      currentPage={renderedPage}
      showRobot={showRobot}
      robotImage={robotImage}
    />, div);
});
