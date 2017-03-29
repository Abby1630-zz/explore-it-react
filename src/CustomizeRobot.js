import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import './css/CustomizeRobot.css';
import './css/common.css';

var head =
[
  {
    fileName: "head1.jpg",
  },
  {
    fileName: "head2.jpg",
  },
  {
    fileName: "head3.jpg",
  }
];
var body =
[
  {
    fileName: "body1.jpg",
  },
  {
    fileName: "body2.jpg",
  },
  {
    fileName: "body3.jpg",
  }
];
var arms =
[
  {
    fileName: "arms0.jpg",
  },
  {
    fileName: "arms1.jpg",
  },
  {
    fileName: "arms2.jpg",
  },
  {
    fileName: "arms3.jpg",
  }
];
var legs =
[
  {
    fileName: "legs0.jpg",
  },
  {
    fileName: "legs1.jpg",
  },
];


class CustomizeRobot extends Component{
  constructor(props) {
    super(props);
    this.state = {
      currentCustomization: "none",
      robotHead: "0",
      robotBody: "0",
      robotArms: "0",
      robotLegs: "0"
      /* On load load in all the questions, activities, and exhibits so you
        don't have to rerender since you have to use setState */
    };
    this.nextPage= this.nextPage.bind(this);
    this.getWhatBodyPart= this.getWhatBodyPart.bind(this);
    this.getBodyPartCustomizations= this.getBodyPartCustomizations.bind(this);
  }

  nextPage () {
    console.log("handleChange");
    this.props.changePage('SelectActivity');

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
    }

  }

  getWhatBodyPart(props){
    if (props.head === 'x') {
      return "head";
    } else if (props.body === 'x') {
      return "body";
    } else if (props.arms === 'x') {
      return "arms";
    } else {
      return "legs";
    }
  }

  getBodyPartCustomizations(props){
    var part = this.getWhatBodyPart(props);

    switch(part) {
      case "head":
        return <Customize availableCustomization={head} bodyPart="head" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
        break;
      case "body":
        return <Customize availableCustomization={body} bodyPart="body" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
        break;
      case "arms":
        return <Customize availableCustomization={arms} bodyPart="arms" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
        break;
      case "legs":
        return <Customize availableCustomization={legs} bodyPart="legs" onButtonClick={this.nextPage} changeRobot={props.changeRobot}/>;
        break;
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
        <h2 className="explore-heading-no-top-margin">
          <h3 className="explore-heading-no-top-margin">Which {this.props.bodyPart} would you like?</h3>
        </h2>

        <Grid>
          <Squares color="danger" elements={this.props.availableCustomization} bodyPart={this.props.bodyPart} onSelection={this.props.onSelection} />
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
  render() {
    var me = this;
    var exhibits = this.props.elements.map(function(element) {
      var filepath = process.env.PUBLIC_URL + '/images/robot/' + me.props.bodyPart + '/'+ element.fileName;
      console.log(filepath);
      return (
        <Thumbnail className="explore-square-thumbnail custom-robot-part " href="#" src={filepath} key={filepath} />
      );
    });
    return (
      <Alert bsStyle={this.props.color} className="explore-flexbox-container exhibit-step1-container" key="explore-flexbox-container">{exhibits} </Alert>
    );
  }
}

export default CustomizeRobot;
