import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Image from 'react-bootstrap/lib/Image';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Row from 'react-bootstrap/lib/Row';
import Grid from 'react-bootstrap/lib/Grid';
import './css/common.css';
import './css/ViewRobot.css';

class ViewRobot extends Component{
  constructor(props) {
    super(props);

    var scroll = Scroll.animateScroll;
    scroll.scrollToTop();
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage () {
    this.props.changePage('SelectActivity');
  }

  render(){
    var filepath = process.env.PUBLIC_URL + '/images/robot/robot' + this.props.head + this.props.body + this.props.arms + this.props.legs + ".jpg";
    filepath = filepath.replace(new RegExp('#', 'g'), '0');
    return(
      <div>
          <Grid>
            <Row>
              <div className="container">
                <Col xs={1}></Col>
                <Col xs={10}>
                  <Image responsive className="custom-robot-image" src={filepath}/>
                </Col>
                <Col xs={1}></Col>

              </div>
            </Row>

            <Row>
              <Col xs={3}></Col>
              <Col xs={6}>
                <Button bsStyle="info" className="explore-light-blue-button" bsSize="large" block onClick={this.nextPage}>Continue</Button>
              </Col>
              <Col xs={3}></Col>
            </Row>
          </Grid>
      </div>
    );
  }
}

export default ViewRobot;
