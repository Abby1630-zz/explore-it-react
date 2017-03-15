import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';


class Welcome extends Component {
  constructor(props) {
    super(props);
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage () {
    this.props.changePage('Intro');
  }
  render() {
    return (
      <div>
        <p>
          Welcome to the Glazer Children's Museum interactive web page.
        </p>
        <p>
          The purpose of this tool is to aid you an your child in learning and encouraging more engagement with the exhibits during you time here.
        </p>
        <Button bsStyle="info" bsSize="large" onClick={this.nextPage}>Get Started!</Button>
      </div>
    );
  }
}


export default Welcome;
