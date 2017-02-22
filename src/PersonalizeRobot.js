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
import './css/SelectActivity.css';

var customizations =
[
  {
    src: "src",
  },
  {
    src: "Exhibit 2",
  },
  {
    src: "Exhibit 3",
  },
  {
    src: "Exhibit 4",
  }
];


class PersonalizeRobot extends Component{
  render(){
    return(
      <div>
        <Customize availableCustomization={customizations} />
        <Enter/>
      </div>
    );
  }
}


class Customize extends Component{
  render(){
    return(
      <div>
        <h2>
          <Label bsStyle="danger" className="pull-left">1</Label>
          <h3 >Choose Your Robot Customizations</h3>
        </h2>

        <Grid>
          <Squares elements={this.props.availableCustomization} color="danger"/>
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
          <Label bsStyle="info" className="pull-left">2</Label>
          <h3 >Ready?</h3>
        </h2>
        <Grid>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Button bsStyle="info" bsSize="large" block>Select This Item!</Button>
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
          <Glyphicon glyph="star" />
        </Thumbnail>
      );
    });
    return (
      <Alert bsStyle={this.props.color} className="activity-select-container">{exhibits} </Alert>
    );
  }
}

export default PersonalizeRobot;
