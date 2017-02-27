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
  },
  {
    name: "Medical and Vet",
  },
  {
    name: "Outback/ Carraba's",
  },
  {
    name: "Fire Station",
  },
  {
    name: "Art",
  },
  {
    name: "Get Moving",
  },
  {
    name: "Invention Zone",
  },
  {
    name: "Water Area",
  }
];

var activities ={
  publix:
  [
    {
      name: "Cultural Foods",
    },
    {
      name: "Nutrition",
    },
    {
      name: "Money",
    },
    {
      name: "Sorting",
    },
    {
      name: "Letters",
    }
  ]
};

class SelectActivity extends Component{
  constructor(props) {
    super(props);
    this.state = {
      exhibit: "not set",
      activity: "not set"
    }
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage () {
    {console.log("handleChange");}
    if(validateSelection()){
      this.props.changePage('Quiz');
    }
  }

  render(){
    return(
      <div>
        <Exhibit elements={exhibits} />
        <Activity elements={activities.publix}/>
        <Enter onClick={this.nextPage}/>
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
          <Squares elements={this.props.elements} color="success"/>
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
          <Squares elements={this.props.elements} color="danger"/>
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
  render() {
    console.log(this.props);
    var exhibits = this.props.elements.map(function(element) {
      return (
        <Thumbnail className="explore-square-thumbnail" href="#" key={element.name} >
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
