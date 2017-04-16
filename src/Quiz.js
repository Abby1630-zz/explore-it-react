import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import './css/Quiz.css';

function getQuestions (activityName, questions) {
  var questionsForActivity = questions.filter(
      function(questions){
        return questions.activityName === activityName;
      }
  );

  return questionsForActivity[0];
}

class Quiz extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: 'not answered',
      actualValue: 'not answered',
      expectedValue: '',
      currentQuestionNumber: 0,
      correctCount: 0,
    };
    this.nextStep= this.nextStep.bind(this);
    this.validateAnswer= this.validateAnswer.bind(this);
    this.setValues= this.setValues.bind(this);
    this.getQuestion= this.getQuestion.bind(this);
    this.moveUpQuizDifficulty= this.moveUpQuizDifficulty.bind(this);
    this.moveDownQuizDifficulty= this.moveDownQuizDifficulty.bind(this);
  }

  setValues(actualVal, expectedVal){
    this.setState({
      actualValue: actualVal.toLowerCase(),
      expectedValue: expectedVal.toLowerCase(),
    });
  }

  validateAnswer () {
    if (this.state.expectedValue !== ''){
      var expectedArray = this.state.expectedValue.split(";");

      if(expectedArray.indexOf(this.state.actualValue) > -1){
        this.props.ReactGA.event({
          category: 'QuizAnswer',
          action: this.props.activity[this.state.currentQuestionNumber],
          label: 'Correct - ' + this.props.quizDifficulty
        });
        this.props.ReactGA.event({
          category: 'QuizLevel',
          action: this.props.quizDifficulty,
          label: 'Correct'
        });

        this.setState({
          isCorrect: 'true',
          currentQuestionNumber: this.state.currentQuestionNumber + 1,
          correctCount: this.state.correctCount + 1
        });
      } else {
        this.props.ReactGA.event({
          category: 'QuizAnswer - Incorrect',
          action: this.props.activity[this.state.currentQuestionNumber],
          label:'Difficulty: ' + this.props.quizDifficulty + ' Answered Value: '+ this.state.actualValue
        });
        this.props.ReactGA.event({
          category: 'QuizLevel',
          action: this.props.quizDifficulty,
          label: 'Incorrect'
        });

        this.setState({
          isCorrect: 'false',
          currentQuestionNumber: this.state.currentQuestionNumber + 1,
        });
        console.log("actual: " + this.state.actualValue + "  expected: " + this.state.actualValue);
      }
    } else{
      alert("Oops, you didn't answer the question!");
    }
  }

  moveUpQuizDifficulty(){
    if (this.props.quizDifficulty === "easy"){
      return "medium";
    } else {
      return "hard";
    }
  }

  moveDownQuizDifficulty(){
    if (this.props.quizDifficulty === "hard"){
      return "medium";
    } else {
      return "easy";
    }
  }

  nextStep () {
    if (this.state.correctCount/this.props.activity.length > .75){
      this.props.changeQuizDifficulty(this.moveUpQuizDifficulty());
    } else if (this.state.correctCount/this.props.activity.length <= .50){
      this.props.changeQuizDifficulty(this.moveDownQuizDifficulty());
    }
    console.log(this.state.correctCount/this.props.activity.length);

    if(this.props.showRobot === true){
      this.props.changePage('CustomizeRobot');
    } else {
      this.props.changePage('SelectActivity');
    }
  }

  getQuestion(numOfQuestions) {
    var activity = this.props.activity[this.state.currentQuestionNumber];
    var difficulty = this.props.questions;

    if (numOfQuestions === this.state.currentQuestionNumber){
      activity = this.props.activity[this.state.currentQuestionNumber-1];;
    }
    console.log(activity);

    if (this.props.quizDifficulty === 'easy') {
      return (
        <QuestionBlock questionInfo={getQuestions(activity, difficulty).easy} setValue={this.setValues}/>
      );
    } else if (this.props.quizDifficulty === 'hard') {
      return (
        <QuestionBlock questionInfo={getQuestions(activity, difficulty).hard} setValue={this.setValues}/>
      );
    } else {
      return (
        <QuestionBlock questionInfo={getQuestions(activity, difficulty).medium} setValue={this.setValues}/>
      );
    }
  }

  render(){
    var numOfQuestions = this.props.activity.length;
    return(
      <div>
        <Grid>
          <AnswerFeedback isCorrect={this.state.isCorrect} expectedValue={this.state.expectedValue.split(";")} />
          {this.getQuestion(numOfQuestions)}
          <ProgressBar striped bsStyle="info" now={this.state.currentQuestionNumber/numOfQuestions * 100}/>
          <SubmitButton validateAnswer={this.validateAnswer} nextStep={this.nextStep} isCorrect={this.state.isCorrect} currentQuestionNumber={this.state.currentQuestionNumber} totalQuestionNumber={numOfQuestions}/>
        </Grid>
      </div>
    );
  }
}

class SubmitButton extends Component {
  render() {
    if (this.props.currentQuestionNumber < this.props.totalQuestionNumber){
      return (
        <Button bsStyle="success" className="explore-light-blue-button" bsSize="large" onClick={this.props.validateAnswer}>Am I Correct?</Button>
      );
    } else{
      return (
        <Button bsStyle="info" className="explore-purple-collapse-button"bsSize="large" onClick={this.props.nextStep}>Go to next step</Button>
      );
    }
  }
}

class AnswerFeedback extends Component {
  render(){
    if (this.props.isCorrect === 'true' ) {
      return (
        <Alert bsStyle="success" className="explore-green-text explore-green-panel background-image-white"><strong>Well done! </strong>You got the last question correct!</Alert>
      );
    } else if(this.props.isCorrect === 'false') {
      return (
        <Alert bsStyle="danger" className="explore-red-text explore-red-panel background-image-white"><strong>Oh snap! </strong>The correct answer was {this.props.expectedValue[0]}. You will do great next time!</Alert>
      );
    };
    return <div/>;

  }
}


class QuestionBlock extends Component{
  render(){
    if (this.props.questionInfo.questionType === "multiple choice")
      return(
        <MultipleChoiceQuestion questionInfo={this.props.questionInfo} setValue={this.props.setValue}/>
      );
    else {
      return(
        <FillInQuestion questionInfo={this.props.questionInfo} setValue={this.props.setValue}/>
      );
    }
  }
}

class MultipleChoiceQuestion extends Component{
  constructor(props) {
    super(props);

    this.handleChange= this.handleChange.bind(this);
  }


  handleChange(e) {
    this.props.setValue(e.target.value, this.props.questionInfo.correctAnswer);
  }

  render(){
    var me = this;

    var questionJRX = this.props.questionInfo.possibleAnswers.map(function(answer) {
      return (
        <ListGroupItem key={answer}>
        <div className="radio">
          <label>
            <input type="radio" name="answers" key={answer} value={answer} onChange={me.handleChange} />
            {answer}
          </label>
        </div>
      </ListGroupItem>

      );
    });

    return(
      <div>
        <h3 className="explore-heading-no-top-margin">{this.props.questionInfo.question}</h3>
        <ListGroup>
          {questionJRX}
        </ListGroup>
      </div>
    );
  }
}


class FillInQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localValue: ''
    };

    this.handleChange= this.handleChange.bind(this);
  }


  handleChange(e) {
    this.setState({ localValue: e.target.value });
    var expectedValues = this.props.questionInfo.correctAnswers;
    expectedValues=expectedValues.toString();
    expectedValues=expectedValues.replace(new RegExp(',', 'g'), ';');
    this.props.setValue(e.target.value,expectedValues);
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>{this.props.questionInfo.question}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.localValue}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}


export default Quiz;
