import React, {Component} from 'react';
// react-bootstrap imports
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import Row from 'react-bootstrap/lib/Row';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage () {
    this.props.changePage('Intro');
  }
  render() {
    var robotInfo = "The museum has a new robot! His name is Malcolm. The museum needs to have Malcolm learn all about the exhibits, so he will tag along with you. Help Malcolm out at each exhibit area.";
    return (
      <div>
        <Grid>
          <Row>
            <div className="explore-image-container">
              <Image responsive src={process.env.PUBLIC_URL + '/images/GlazerLogo.png'}/>
            </div>
          </Row>
          <hr className="explore-small-hr"/>
          <h1  className="explore-heading-no-top-margin">Welcome!</h1>
          <p>
            Use this ExploreIT website as you tour the museum. At most of the exhibit areas, you will find activity suggestions for you and your child to do.
          </p>
          <hr className="explore-small-hr"/>
          <p>
            When you see a paragraph bordered in blue, like the one below, read it to your child:
          </p>
          <Collapsible header="The Activity" bsStyle="success" buttonClass="explore-blue-collapse-button" alertClass="explore-blue-collapse-body" open={true} body={robotInfo}/>
          <hr className="explore-small-hr"/>
          <p>
            Simply tap the button below to begin ExploreIT! The next screen asks for some additional information to get started, and then you indicate where in the museum you would like to start!
          </p>
          <Button className="explore-light-blue-button" bsStyle="info" bsSize="large" onClick={this.nextPage}>Get Started!</Button>
          <hr className="explore-small-hr"/>
          <p>
            Developed in partnership with
          </p>
          <div className="explore-image-container">
            <Image responsive src={process.env.PUBLIC_URL + '/images/UofTampaLogo.png'} />
          </div>
        </Grid>
      </div>
    );
  }
}

class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }

    this.getIcon= this.getIcon.bind(this);
  }

  componentDidMount(){
    if(this.props.open){
      this.setState({open:true})
    }
  }

  getIcon (){
    if (this.state.open) {
      return (<Glyphicon className="pull-right" glyph="chevron-up" />);
    }
    return (<Glyphicon className="pull-right" glyph="chevron-down" />);
  }

  render() {
    var alertClasses = this.props.alertClass + " lang-container";
    return (
      <div>
        <Button bsStyle={this.props.bsStyle} className={this.props.buttonClass} block onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.header}
          {this.getIcon()}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Alert bsStyle={this.props.bsStyle} className={alertClasses}>
              {this.props.body}
            </Alert>
          </div>
        </Collapse>
      </div>
    );
  }
}

export default Welcome;
