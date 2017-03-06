import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Alert from 'react-bootstrap/lib/Alert';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import './css/Quiz.css';


var questions =
  {
    easy: {
      question: "How many ingredients did you need to make the Hispanic meal?",
      questionType: "multiple choice",
      possibleAnswers: [
        "3", "5", "1", "7"
      ],
      correctAnswer : "3"
    },
    medium: {
      question: "Which one of these did we not use in the Hispanic recipe?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Rice", "Soup", "Tomato", "Carrots",
      ],
      correctAnswer : "Tomato"
    },
    hard: {
      question: "Name one of the ingredients from the Hispanic meal in Spanish",
      questionType: "fill in",
      correctAnswers: ["arroz", "zanahoria", "sopa"]
    }
  };

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
  }

  setValues(actualVal, expectedVal){
    this.setState({actualValue: actualVal});
    this.setState({expectedValue: expectedVal});
  }

  validateAnswer () {
    var expectedArray = this.state.expectedValue.split(",");
    if(expectedArray.indexOf(this.state.actualValue) > -1){
      this.setState({
        isCorrect: 'true',
        percentComplete: 100
      });
    } else {
      this.setState({
        isCorrect: 'false',
        percentComplete: 100
      });
    }
  }

  nextStep () {
    this.props.changePage('SelectActivity');
  }

  render(){
    return(
      <div>
        <AnswerFeedback isCorrect={this.state.isCorrect}  />
        <QuestionBlock questionInfo={questions.hard} setValue={this.setValues}/>
        <ProgressBar striped bsStyle="info" now={this.state.percentComplete} />
        <SubmitButton validateAnswer={this.validateAnswer} nextStep={this.nextStep} isCorrect={this.state.isCorrect}/>
      </div>
    );
  }
}

class SubmitButton extends Component {
  render() {
    if (this.props.isCorrect ==='not answered'){
      return (
        <Button bsStyle="success" bsSize="large" onClick={this.props.validateAnswer}>Am I Correct?</Button>
      );
    } else{
      return (
        <Button bsStyle="info" bsSize="large" onClick={this.props.nextStep}>Go to next step</Button>
      );
    }
  }
}

class AnswerFeedback extends Component {
  render(){
    if (this.props.isCorrect === 'true' ) {
      return (
        <Alert bsStyle="success"><strong>Well done! </strong>You got the last question correct!</Alert>
      );
    } else if(this.props.isCorrect === 'false') {
      return (
        <Alert bsStyle="danger"><strong>Oh snap! </strong>That wasn't the correct answer. You will do great on the next one!</Alert>
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
        <h3>{this.props.questionInfo.question}</h3>
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
