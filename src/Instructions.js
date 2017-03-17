import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import './css/Instructions.css';


const selectActivityInstructions = (
  <Alert className="explore-instructions">
    First choose your exhibit, next choose the activity you would like to complete, and finally, click the
    <strong> Let's Go </strong>
     button!
  </Alert>
);

const quizInstructions = (
  <Alert className="explore-instructions">
    Answer the following question based on what you have just done.
  </Alert>
);

const activityInstructions = (
  <Alert className="explore-instructions">
    Read the text in the blue section to your child to start the activity.
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
