import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './css/index.css';
import './css/common.css';

var boolShouldShowRobot = true;

ReactDOM.render(<App showRobot={boolShouldShowRobot}/>,document.getElementById('body'));
