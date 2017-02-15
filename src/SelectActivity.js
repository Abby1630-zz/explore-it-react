import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import Alert from 'react-bootstrap/lib/Alert';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';
import Label from 'react-bootstrap/lib/Label';


const thumbnailInstance = (
  <Grid>
    <Alert bsStyle="success">
      <Row>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
        </Col>
        <Col xs={6} md={3}>
          <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
        </Col>
      </Row>
    </Alert>
  </Grid>
);


// <svg width="400" height="180">
//   <rect x="50" y="20" rx="20" ry="20" width="150" height="150"
//   Style="fill:white;stroke-width:5;opacity:0.5" />
// </svg>

class SelectActivity extends Component{
  render(){
    return(
      <div>
        <h1><Label bsStyle="success" className="pull-left">1</Label></h1>
        <Grid>
          <Alert bsStyle="success">
            <Row>
              <Col md={6}>
                <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
              </Col>
              <Col md={6}>
                <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
              </Col>
              <Col md={6}>
                <Thumbnail href="#" alt="171x180" src="/assets/thumbnail.png" />
              </Col>
            </Row>
          </Alert>
        </Grid>
      </div>

    );
  }
}

class Exhibit extends Component{
  render(){
    return(
      <Panel header="Hi" bsStyle="success">
        Panel content
      </Panel>

    );
  }
}


export default SelectActivity;
