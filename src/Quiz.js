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
      percentComplete: 0
    };
    this.nextStep= this.nextStep.bind(this);
    this.validateAnswer= this.validateAnswer.bind(this);
    this.setValues= this.setValues.bind(this);
    this.getQuestion= this.getQuestion.bind(this);
    this.moveUpQuizDifficulty= this.moveUpQuizDifficulty.bind(this);
    this.moveDownQuizDifficulty= this.moveDownQuizDifficulty.bind(this);
  }

  setValues(actualVal, expectedVal){
    console.log("set");

    this.setState({actualValue: actualVal.toLowerCase()});
    this.setState({expectedValue: expectedVal.toLowerCase()});
  }

  validateAnswer () {
    if (this.state.expectedValue !== ''){
      var expectedArray = this.state.expectedValue.split(",");

      if(expectedArray.indexOf(this.state.actualValue) > -1){
        this.props.ReactGA.event({
          category: 'QuizAnswer',
          action: this.props.activity,
          label: 'Correct - ' + this.props.quizDifficulty
        });
        this.props.ReactGA.event({
          category: 'QuizLevel',
          action: this.props.quizDifficulty,
          label: 'Correct'
        });

        this.setState({
          isCorrect: 'true',
          percentComplete: 100
        });
      } else {
        this.props.ReactGA.event({
          category: 'QuizAnswer - Incorrect',
          action: this.props.activity,
          label:'Difficulty: ' + this.props.quizDifficulty + ' Answered Value: '+ this.state.actualValue
        });
        this.props.ReactGA.event({
          category: 'QuizLevel',
          action: this.props.quizDifficulty,
          label: 'Incorrect'
        });

        this.setState({
          isCorrect: 'false',
          percentComplete: 100
        });
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
    if (this.state.isCorrect === 'true'){
      this.props.changeQuizDifficulty(this.moveUpQuizDifficulty());
    } else if (this.state.isCorrect === 'false'){
      this.props.changeQuizDifficulty(this.moveDownQuizDifficulty());
    }

    if(this.props.showRobot === true){
      this.props.changePage('CustomizeRobot');
    } else {
      this.props.changePage('SelectActivity');
    }
  }

  getQuestion() {
    if (this.props.quizDifficulty === 'easy') {
      return (
        <QuestionBlock questionInfo={getQuestions(this.props.activity, this.props.questions).easy} setValue={this.setValues}/>
      );
    } else if (this.props.quizDifficulty === 'hard') {
      return (
        <QuestionBlock questionInfo={getQuestions(this.props.activity, this.props.questions).hard} setValue={this.setValues}/>
      );
    } else {
      return (
        <QuestionBlock questionInfo={getQuestions(this.props.activity, this.props.questions).medium} setValue={this.setValues}/>
      );
    }
  }

  render(){
    console.log(this.state.expectedValue);
    return(
      <div>
        <Grid>
          <AnswerFeedback isCorrect={this.state.isCorrect} expectedValue={this.state.expectedValue.split(",")} />
          {this.getQuestion()}
          <ProgressBar striped bsStyle="info" now={this.state.percentComplete} />
          <SubmitButton validateAnswer={this.validateAnswer} nextStep={this.nextStep} isCorrect={this.state.isCorrect}/>
        </Grid>
      </div>
    );
  }
}

class SubmitButton extends Component {
  render() {
    if (this.props.isCorrect ==='not answered'){
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
        <Alert bsStyle="danger" className="explore-red-text explore-red-panel background-image-white"><strong>Oh snap! </strong>The correct answer was {this.props.expectedValue[0]}. You will do great on the next one!</Alert>
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
    this.props.setValue(e.target.value,expectedValues.toString());
  }

  render() {
    // console.log(this.props.questionInfo.correctAnswers);
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
