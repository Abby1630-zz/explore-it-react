import React from 'react';
import ReactDOM from 'react-dom';
import Instructions from './../Instructions';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var renderPage = '123';

  ReactDOM.render(<Instructions page={renderPage}/>, div);
});
