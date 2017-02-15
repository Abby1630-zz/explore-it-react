import React, {Component} from 'react';
//import ReactDOM from 'react-dom';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';

var line1 = "Choosing your activity is easy and takes 3 simple steps.";
var line2 = "First choose your exhibit, next choose the activity you would like to complete, and finally, click the ";
var line2Bold= "Let's Go";
var afterLine2Bold = " button!";

class Instructions extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Row className="show-grid">
            <h2 className="pull-left">Instructions</h2>
          </Row>
          <Row>
            <Alert bsStyle="warning">
              {line1}
              <br/>
              {line2}
              <strong>{line2Bold}</strong>
              {afterLine2Bold}
            </Alert>
            <hr/>
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Instructions;
