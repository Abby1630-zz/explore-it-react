import React, { Component } from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import './css/SelectActivity.css';

var exhibits =
[
  {
    name: "Publix",
    activities:   [
      {name: "Cultural Foods"},
      {name: "Nutrition"},
      {name: "Money"},
      {name: "Sorting"},
      {name: "Letters"}
    ]
  },
  {
    name: "Medical and Vet",
    activities:   [
      {name: "Bones"},
      {name: "Eating the Rainbow"}
    ]
  },
  {
    name: "Outback/ Carraba's",
    activities:   [
      {name: "Order up!"},
      {name: "I’m Here to Help"},
    ]
  },
  {
    name: "Art",
    activities:   [
      {name: "Shall We Dance?"},
      {name: "Kaleidoscope"},
      {name: "The Case of the Missing Letter"},
      {name: "How the Mind Wanders"},
      {name: "Time to Draw!"}
    ]
  },
  {
    name: "Get Moving",
    activities:   [
      {name: "Who is faster?"},
      {name: "At the Races"},
      {name: "How High?"},
      {name: "How Strong?"},
      {name: "Stop that Ball!"}
    ]
  },
  {
    name: "Invention Zone",
    activities:   [
      {name: "Lego Activity-egocentrism and motor skills"},
      {name: "Where will it go?"},
      {name: "Twinkle Star Theater"}
    ]
  },
  {
    name: "Water Area",
    activities:   [
      {name: "Piloting a Boat"},
      {name: "Hidden Treasure"},
      {name: "Sailing, Sailing"},
      {name: "Ahoy, There!"},
      {name: "What's Down There?"}
    ]
  }
];


function getActivities (exhibitName) {
  var exhibit = exhibits.filter(
      function(exhibits){
        return exhibits.name === exhibitName;
      }
  );
  return exhibit[0].activities;
}

class SelectActivity extends Component{
  constructor(props) {
    super(props);
    this.state = {
      exhibit: "not set",
      activity: "not set"
    }
    this.nextPage= this.nextPage.bind(this);
    this.setExhibitState= this.setExhibitState.bind(this);
    this.setActivityState= this.setActivityState.bind(this);
  }

  nextPage () {
    if(validateSelection()){
      this.props.changeActivity(this.state.exhibit, this.state.activity);
      this.props.changePage('Activity');
    }
  }

  setExhibitState (e) {
    e.currentTarget.style.backgroundColor = '#eef7ea'; /* 10% lighten of the top of the alert */
    e.currentTarget.style.border = '#a9a9a9 3px solid'
    this.setState({exhibit:e.currentTarget.name})

  }

  setActivityState (e) {
    e.currentTarget.style.backgroundColor = '#f8eeee';/* 5% lighten of the alert color */
    e.currentTarget.style.border = '#a9a9a9 3px solid'
    this.setState({activity:e.currentTarget.name})
  }

  render(){

    return(
      <div>
        <Exhibit elements={exhibits} onSelection={this.setExhibitState}/>
        { this.state.exhibit !== "not set" ? <Activity elements={getActivities(this.state.exhibit)} onSelection={this.setActivityState}/> : null }
        {/* <Activity elements={activities.publix}/> */}
        { this.state.activity !== "not set" ? <Enter onClick={this.nextPage}/> : null}
        {/* <Enter onClick={this.nextPage}/> */}
      </div>
    );
  }
}


class Exhibit extends Component{
  render(){
    return(
      <div>
        <h2>
          <Label bsStyle="success" className="pull-left">1</Label>
          <h3 >Choose Your Exhibit</h3>
        </h2>

        <Grid>
          <Squares elements={this.props.elements} onSelection={this.props.onSelection} color="success"/>
          <hr/>
        </Grid>
      </div>
    );
  }
}

class Activity extends Component{
  render(){
    return(
      <div>
        <h2>
          <Label bsStyle="danger" className="pull-left">2</Label>
          <h3 >Choose Your Activity</h3>
        </h2>

        <Grid>
          <Squares elements={this.props.elements} onSelection={this.props.onSelection} color="danger"/>
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
          <Label bsStyle="info" className="pull-left">3</Label>
          <h3 >Ready?</h3>
        </h2>
        <Grid>
          <Row>
            <Col xs={3}></Col>
            <Col xs={6}>
              <Button bsStyle="info" bsSize="large" block onClick={this.props.onClick}>Lets Go!</Button>
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
  constructor(props) {
    super(props);
    this.passSelection= this.passSelection.bind(this);
  }

  passSelection (e) {
    this.props.onSelection(e);
  }

  render() {
    var me = this;
    var exhibits = this.props.elements.map(function(element) {
      return (
        <Thumbnail className="explore-square-thumbnail" href="#" onClick={me.passSelection}key={element.name} name={element.name} >
          <h4>{element.name}</h4>
            {/*<p>{element.description}</p> */}
        </Thumbnail>
      );
    });
    return (
      <Alert bsStyle={this.props.color} className="activity-select-container">{exhibits} </Alert>
    );
  }
}
function validateSelection(){
 return true;
}

export default SelectActivity;
