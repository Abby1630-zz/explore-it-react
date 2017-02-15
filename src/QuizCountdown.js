import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Badge from 'react-bootstrap/lib/Badge';

var quizCountdown = 3;

class QuizCountdown extends Component {
  render() {
    return(
      <p>Complete <Badge bsClass="badge">{quizCountdown}</Badge> more activities for your next reward!</p>
    );
  }
}


export default QuizCountdown;
