import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
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

const customizeRobotInstructions = (
  <Alert className="explore-instructions">
    <strong>Way to go! </strong> You earned new robot accessories. Select what you would like your robot to wear.
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
    } else if (page ==="CustomizeRobot") {
      return customizeRobotInstructions;
    } else {
      return null;
    }
  };

  render() {

    return(
      <div>
        {this.instructionsToDisplay(this.props.page)}
        <hr className="explore-small-hr"/>
      </div>
    );
  }
}


export default Instructions;
