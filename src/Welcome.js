import React, {Component} from 'react';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Button from 'react-bootstrap/lib/Button';
import Image from 'react-bootstrap/lib/Image';
import logo from 'GlazerLogo.png';
import './css/common.css';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage () {
    this.props.changePage('Intro');
  }
  render() {
    console.log(logo);
    return (
      <div>
        <Grid>
          <Image responsive src={logo}/>
          <p>
            Use this ExploreIT website as you tour the museum. At most of the exhibit areas, you will find activity suggestions for you and your child to do.
          </p>
          <p>
            Simply tap the button below to begin ExploreIT! The next screen asks for some additional information to get started, and then you indicate where in the museum you would like to start!
          </p>

          <Button className="explore-light-blue-button" bsStyle="info" bsSize="large" onClick={this.nextPage}>Get Started!</Button>
        </Grid>
      </div>
    );
  }
}


export default Welcome;
