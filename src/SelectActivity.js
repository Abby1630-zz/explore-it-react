import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';
import Button from 'react-bootstrap/lib/Button';
import './SelectActivity.css';

// <svg width="400" height="180">
//   <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//   Style="fill:white;stroke-width:5;opacity:0.5" />
// </svg>

class SelectActivity extends Component{
  render(){
    return(
      <div>
        <Exhibit/>
        <Activity/>
        <Enter/>
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
          <Alert bsStyle="success" className="activity-select-container">
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
          </Alert>
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
          <Alert bsStyle="danger" className="activity-select-container">
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
              <Thumbnail className="activity-select-item" href="#" alt="171x180" src="/assets/thumbnail.png" />
          </Alert>
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
              <Button bsStyle="info" bsSize="large" block>Lets Go!</Button>
            </Col>
            <Col xs={3}></Col>
          </Row>
          <hr/>
        </Grid>
      </div>
    );
  }
}


export default SelectActivity;
