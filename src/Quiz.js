import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
//import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import './css/SelectActivity.css';

// <svg width="400" height="180">
//   <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//   Style="fill:white;stroke-width:5;opacity:0.5" />
// </svg>

var exhibits =
[
  {
    name: "Exhibit 1",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Exhibit 2",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Exhibit 3",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Exhibit 4",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Exhibit 5",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Exhibit 6",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  }
];

var activities =
[
  {
    name: "Activity 1",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Activity 2",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  },
  {
    name: "Activity 3",
    description: "cras vestibulum neque dolor pharetra donec amet elit cras nunc libero malesuada in odio"
  }
];

class Quiz extends Component{
  render(){
    return(
      <div>
        {
          /*
            <AnswerFeedback isCorrect="true" />
            <Question difficulty="easy" />
            <ProgressBar percentComplete="33" />
            <SubmitAnswer/>
          */
        }
        <AnswerFeedback isCorrect="true" />

      </div>
    );
  }
}


class AnswerFeedback extends Component {
  render(){
    if (this.props.isCorrect ==="true") {
      return (
        <Alert bsStyle="success"><strong>Well done! </strong>You got the last question correct. Only 3 more to go!</Alert>
      );
    }
    return (
      <Alert bsStyle="danger"><strong>Oh snap! </strong>That wasn't the correct answer. Try again. You will do great on the 3 questions you have left!</Alert>
    );
  }
}


class Activity extends Component{
  render(){
    return(
      <div>
        <h2>
          <Label bsStyle="danger" className="pull-left">2</Label>
          <h3 >Choose Your Activity</h3>
        </h2>

        <Grid>
          <Squares elements={activities} color="danger"/>
          <hr/>
        </Grid>
      </div>
    );
  }
}

class Enter extends Component{
  render(){
    return(
      <div>
        <h2>
          <Label bsStyle="info" className="pull-left">3</Label>
          <h3 >Ready?</h3>
        </h2>
        <Grid>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Button bsStyle="info" bsSize="large" block>Lets Go!</Button>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <hr/>
        </Grid>
      </div>
    );
  }
}

class Squares extends Component {
  render() {
    var exhibits = this.props.elements.map(function(element) {
      return (
        <Thumbnail className="explore-square-thumbnail" href="#" key={element.name} >
          <h4>{element.name}</h4>
            <p>{element.description}</p>
        </Thumbnail>
      );
    });
    return (
      <Alert bsStyle={this.props.color} className="activity-select-container">{exhibits} </Alert>
    );
  }
}

export default Quiz;
