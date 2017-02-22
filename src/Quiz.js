import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Alert from 'react-bootstrap/lib/Alert';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';

var questions =
  {
    easy: {
      question: "This is the easy question 1?",
      possibleAnswers: {
        a: "correct answer a",
        b: "incorrect b",
        c: "incorrect c",
        d: "incorrect d",
      },
      correctAnswer : "a"
    },
    medium: {
      question: "This is the medium question 1?",
      possibleAnswers: {
        a: "correct answer a",
        b: "incorrect b",
        c: "incorrect c",
        d: "incorrect d",
      },
      correctAnswer : "a"
    },
    hard: {
      question: "This is the hard question 1?",
      possibleAnswers: {
        a: "correct answer a",
        b: "incorrect b",
        c: "incorrect c",
        d: "incorrect d",
      },
      correctAnswer : "a"
    }
  };

var isAnswered = false;
var isCorrect = false;

class Quiz extends Component{
  render(){
    return(
      <div>
        <AnswerFeedback isCorrect={isCorrect} isAnswered={isAnswered} />
        <QuestionBlock question={questions.easy}/>
        <ProgressBar striped bsStyle="info" now={40} />
        <Button bsStyle="success" bsSize="large" >Am I Correct?</Button>
      </div>
    );
  }
}


class AnswerFeedback extends Component {
  render(){
    console.log("Answered: "+ this.props.isAnswered );
    console.log("Correct: "+ this.props.isCorrect );

    if (this.props.isCorrect === true && this.props.isAnswered === true ) {
      return (
        <Alert bsStyle="success"><strong>Well done! </strong>You got the last question correct. Only 3 more to go!</Alert>
      );
    } else if(this.props.isCorrect === true && this.props.isAnswered === false) {
      return (
        <Alert bsStyle="danger"><strong>Oh snap! </strong>That wasn't the correct answer. Try again. You will do great on the X questions you have left!</Alert>
      );
    };
    return <div/>;

  }
}


function answeredCorrectly() {
    isAnswered = true;
    isCorrect = true;
    console.log("answeredCorrectly");
}

function answeredIncorrectly() {
    isAnswered = true;
    isCorrect = false;
    console.log("answeredIncorrectly");
}

class QuestionBlock extends Component{
  render(){
    return(
      <div>
        <h3>{this.props.question.question}</h3>
        <ListGroup>
          <ListGroupItem href="#link1" onClick={answeredCorrectly}>{this.props.question.possibleAnswers.a}</ListGroupItem>
          <ListGroupItem href="#link1" onClick={answeredIncorrectly}>{this.props.question.possibleAnswers.b}</ListGroupItem>
          <ListGroupItem href="#link1" onClick={answeredIncorrectly}>{this.props.question.possibleAnswers.c}</ListGroupItem>
          <ListGroupItem href="#link1" onClick={answeredIncorrectly}>{this.props.question.possibleAnswers.d}</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}

export default Quiz;
