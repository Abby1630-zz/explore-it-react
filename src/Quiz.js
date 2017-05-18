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


var difficulty = '';

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
      showAlert: false,
      expectedValue: '',
      currentQuestionNumber: 0,
      correctCount: 0,
      quizQuestionsCorrectInARow: 0,
      quizQuestionsWrongInARow: 0,
      difficulty: 'unknown'
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
      showAlert: false,
      difficulty: this.props.quizDifficulty,
      quizQuestionsCorrectInARow: this.props.quizQuestionsCorrectInARow,
      quizQuestionsWrongInARow: this.props.quizQuestionsWrongInARow
    });
  }

  validateAnswer () {
    if (this.state.expectedValue !== ''){
      var expectedArray = this.state.expectedValue.split(";");
      var setStateTo = {};
      var numCorrectInARow = this.state.quizQuestionsCorrectInARow;
      var numWrongInARow = this.state.quizQuestionsWrongInARow;

      if(expectedArray.indexOf(this.state.actualValue) > -1){
        this.props.ReactGA.event({
          category: 'QuizAnswer',
          action: this.props.activity[this.state.currentQuestionNumber],
          label: 'Correct - ' + this.state.difficulty
        });

        this.props.ReactGA.event({
          category: 'QuizLevel',
          action: this.state.difficulty,
          label: 'Correct'
        });

        var tableData = {
          user_id: this.props.userID,
          activity: this.props.activity[this.state.currentQuestionNumber],
          difficulty: this.state.difficulty,
          answered_correctly: 'Yes'
        };
        this.props.addtoFirebase('Quiz', tableData);


        setStateTo.isCorrect = 'true';
        setStateTo.currentQuestionNumber = this.state.currentQuestionNumber + 1;
        setStateTo.correctCount = this.state.correctCount + 1;
        setStateTo.showAlert = true;
        setStateTo.quizQuestionsCorrectInARow = this.state.quizQuestionsCorrectInARow + 1;
        setStateTo.quizQuestionsWrongInARow = 0;

        numCorrectInARow += 1;
        numWrongInARow = 0;

      } else {
        this.props.ReactGA.event({
          category: 'QuizAnswer - Incorrect',
          action: this.props.activity[this.state.currentQuestionNumber],
          label:'Difficulty: ' + this.state.difficulty + ' Answered Value: '+ this.state.actualValue
        });
        this.props.ReactGA.event({
          category: 'QuizLevel',
          action: this.state.difficulty,
          label: 'Incorrect'
        });

        var tableData = {
          user_id: this.props.userID,
          activity: this.props.activity[this.state.currentQuestionNumber],
          difficulty: this.state.difficulty,
          answered_correctly: 'No',
          actual_answer: this.state.actualValue,
          correct_answer: this.state.expectedValue
        };
        this.props.addtoFirebase('Quiz', tableData);

        setStateTo.isCorrect = 'false';
        setStateTo.currentQuestionNumber = this.state.currentQuestionNumber + 1;
        setStateTo.showAlert = true;
        setStateTo.quizQuestionsCorrectInARow = 0;
        setStateTo.quizQuestionsWrongInARow = this.state.quizQuestionsWrongInARow + 1;

        numCorrectInARow = 0;
        numWrongInARow += 1;
      }

      if (numCorrectInARow % 2 === 0 && numCorrectInARow > 0){
        setStateTo.difficulty = this.moveUpQuizDifficulty();
      } else if (numWrongInARow % 2 === 0 && numWrongInARow > 0){
        setStateTo.difficulty = this.moveDownQuizDifficulty();
      }

      this.setState(setStateTo);

    } else{
      alert("Oops, you didn't answer the question!");
    }
  }

  moveUpQuizDifficulty(){
    if (this.state.difficulty === "easy"){
      return "medium";
    } else {
      return "hard";
    }
  }

  moveDownQuizDifficulty(){
    if (this.state.difficulty === "hard"){
      return "medium";
    } else {
      return "easy";
    }
  }

  nextStep () {
    this.props.changeQuizValues(this.state.difficulty, this.state.quizQuestionsCorrectInARow, this.state.quizQuestionsWrongInARow);

    if(this.props.showRobot === true && this.props.countUntilNextReward === 0){
      this.props.changePage('CustomizeRobot');
    } else {
      this.props.changePage('SelectActivity');
    }
  }

  getQuestion(numOfQuestions) {
    var activity = this.props.activity[this.state.currentQuestionNumber];
    var questions = this.props.questions;

    if (numOfQuestions === this.state.currentQuestionNumber){
      activity = this.props.activity[this.state.currentQuestionNumber-1];;
    } else{
      if (this.state.difficulty === 'unknown'){
        difficulty = this.props.quizDifficulty;
      } else {
        difficulty = this.state.difficulty;
      }
    }

    if (difficulty === 'easy') {
      return (
        <QuestionBlock questionInfo={getQuestions(activity, questions).easy} setValue={this.setValues}/>
      );
    } else if (difficulty === 'hard') {
      return (
        <QuestionBlock questionInfo={getQuestions(activity, questions).hard} setValue={this.setValues}/>
      );
    } else {
      return (
        <QuestionBlock questionInfo={getQuestions(activity, questions).medium} setValue={this.setValues}/>
      );
    }
  }

  render(){
    var numOfQuestions = this.props.activity.length;
    return(
      <div>
        <Grid>
          <AnswerFeedback isCorrect={this.state.isCorrect} showAlert={this.state.showAlert} expectedValue={this.state.expectedValue.split(";")} />
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
    if (this.props.isCorrect === 'true'  && this.props.showAlert === true) {
      return (
        <Alert bsStyle="success" className="explore-green-text explore-green-panel background-image-white"><strong>Well done! </strong>You got the last question correct!</Alert>
      );
    } else if(this.props.isCorrect === 'false' && this.props.showAlert === true) {
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
        <FormGroup controlId="formBasicText" >
          <ControlLabel>{this.props.questionInfo.question}</ControlLabel>
          <FormControl
            name={this.props.questionInfo.question}
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
