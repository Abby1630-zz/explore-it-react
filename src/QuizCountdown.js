import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Badge from 'react-bootstrap/lib/Badge';
import './css/QuizCountdown.css'

class QuizCountdown extends Component {
  render() {
    return(
      <p>Complete <Badge bsClass="badge" className="explore-blue">{this.props.countUntilNextQuiz}</Badge> more activities for your next reward!</p>
    );
  }
}


export default QuizCountdown;
