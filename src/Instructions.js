import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

/*
var inst = [
  {
    line1: "Choosing your activity is easy and takes 3 simple steps.",
    line2: "First choose your exhibit, next choose the activity you would like to complete, and finally, click the ",
    line2Bold: "Let's Go",
    afterLine2Bold: " button!"
  }
]
*/

const selectActivityInstructions = (
  <Alert bsStyle="warning">
    Choosing your activity is easy and takes 3 simple steps.
    <br/>
    First choose your exhibit, next choose the activity you would like to complete, and finally, click the
    <strong> Let's Go </strong>
     button!
  </Alert>
);

const quizInstructions = (
  <Alert bsStyle="warning">
    Walk through the activity below to enhance your exhibit experience.
  </Alert>
);

const activityInstructions = (
  <Alert bsStyle="warning">
    Let's see what you remember!
    <br/>
    Before clicking the
    <strong> What's Next? </strong>
     button, you must rate the activity.
  </Alert>
);

class Instructions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.instructionsToDisplay= this.instructionsToDisplay.bind(this);
  }

  instructionsToDisplay (page) {
    if (page === "SelectActivity"){
      return selectActivityInstructions;
    }else if (page === "Activity") {
      return activityInstructions;
    } else if (page ==="Quiz") {
      return quizInstructions;
    } else {
      return null;
    }
  };

  render() {

    return(
      <div>
        <div className="container">
          <h2>Instructions</h2>
        </div>
        <Grid>
          <Row>
            {this.instructionsToDisplay(this.props.page)}
            <hr/>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Instructions;
