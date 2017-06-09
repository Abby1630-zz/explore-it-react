import React, { Component } from 'react';
// react-bootstrap imports
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Scroll from 'react-scroll';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
// css imports
import './css/CustomizeRobot.css';

var lastPart = "bow tie"
class CustomizeRobot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentCustomization: "none",
      robotHead: "0",
      robotBody: "0",
      robotArms: "0",
      robotLegs: "0",
      robotBowTie: "0"
    };
    var scroll = Scroll.animateScroll;
    scroll.scrollToTop();
    this.nextPage= this.nextPage.bind(this);
    this.getWhatBodyPart= this.getWhatBodyPart.bind(this);
    this.getBodyPartCustomizations= this.getBodyPartCustomizations.bind(this);
    this.setSelected= this.setSelected.bind(this);
  }

  nextPage () {
    var part = this.getWhatBodyPart(this.props);
    var value = "";
    switch(part) {
      case "head":
        value = this.state.robotHead;
        break;
      case "body":
        value = this.state.robotBody;
        break;
      case "arms":
        value = this.state.robotArms;
        break;
      case "legs":
        value = this.state.robotLegs;
        break;
      case 'bow tie':
        value = this.state.robotBowTie;
        break;
      default:
        break;
    }
    this.props.changeRobot(part, value);
    this.props.changePage('ViewRobot');
    if (lastPart === "bow tie") {
      lastPart = "head";
    } else if (lastPart === "head") {
      lastPart = "body";
    } else if (lastPart === "body") {
      lastPart = "arms";
    } else if (lastPart === "arms") {
      lastPart = "legs";
    } else{
      lastPart = "bow tie";
    }
  }

  setSelected (e) {
    var part = this.getWhatBodyPart(this.props);
    switch(part) {
      case "head":
        this.setState({robotHead:e.currentTarget.name});
        break;
      case "body":
        this.setState({robotBody:e.currentTarget.name});
        break;
      case "arms":
        this.setState({robotArms:e.currentTarget.name});
        break;
      case "legs":
        this.setState({robotLegs:e.currentTarget.name});
        break;
      case "bow tie":
        this.setState({robotBowTie:e.currentTarget.name});
        break;
      default:
        break;
    }

  }

  getWhatBodyPart(props){
    if (lastPart === "legs") {
      return "bow tie";
    } else if (lastPart === "bow tie") {
      return "head";
    } else if (lastPart === "head") {
      return "body";
    } else if (lastPart === "body") {
      return "arms";
    }else{
      return "legs";
    }
  }

  getBodyPartCustomizations(props){
    var part = this.getWhatBodyPart(props);

    switch(part) {
      case "head":
        return <Customize availableCustomization={this.props.robotHeadImages} onSelection={this.setSelected} currentlySelected={this.state.robotHead} bodyPart="head" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
      case "body":
        return <Customize availableCustomization={this.props.robotBodyImages} onSelection={this.setSelected} currentlySelected={this.state.robotBody} bodyPart="body" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
      case "arms":
        return <Customize availableCustomization={this.props.robotArmsImages} onSelection={this.setSelected} currentlySelected={this.state.robotArms} bodyPart="arms" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
      case "legs":
        return <Customize availableCustomization={this.props.robotLegsImages} onSelection={this.setSelected} currentlySelected={this.state.robotLegs} bodyPart="legs" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
      case "bow tie":
        return <Customize availableCustomization={this.props.robotBowTieImages} onSelection={this.setSelected} currentlySelected={this.state.robotBowTie} bodyPart="bow tie" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
      default:
        return null;
    }
  }

  render(){
    return(
      <div>
        {this.getBodyPartCustomizations(this.props)}
      </div>
    );
  }
}


class Customize extends Component{
  render(){
    return(
      <div>
        <div>
          <h2 className="explore-heading-no-top-margin">
          </h2>
          <h3 className="explore-heading-no-top-margin">Which {this.props.bodyPart} would you like?</h3>
        </div>

        <Grid>
          <Squares color="danger" elements={this.props.availableCustomization} bodyPart={this.props.bodyPart} currentlySelected={this.props.currentlySelected} onSelection={this.props.onSelection} />
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Button bsStyle="info" className="explore-light-blue-button" bsSize="large" block onClick={this.props.onButtonClick}>Select this Item!</Button>
            </Col>
            <Col xs={3}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class Squares extends Component {
  constructor(props) {
    super(props);
    this.passSelection= this.passSelection.bind(this);
  }

  passSelection (e) {
    this.props.onSelection(e);
  }

  render() {
    var me = this;
    var elements = this.props.elements.map(function(element) {
      var classes = "explore-square-thumbnail custom-robot-part ";
      if (element.value === me.props.currentlySelected) {
        classes += 'explore-selected-step1';
      }
      var filepath = process.env.PUBLIC_URL + '/images/robot/' + me.props.bodyPart + '/'+ element.fileName;
      return (
        <Thumbnail className={classes} onClick={me.passSelection} href="#" src={filepath} key={element.value} name={element.value} />
      );
    });
    return (
      <Alert bsStyle={this.props.color} className="explore-flexbox-container exhibit-step1-container" key="explore-flexbox-container">{elements} </Alert>
    );
  }
}

export default CustomizeRobot;
