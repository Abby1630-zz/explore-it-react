import React, { Component } from 'react';
// react-bootstrap imports
import Alert from 'react-bootstrap/lib/Alert';
import Button from 'react-bootstrap/lib/Button';
import Col from 'react-bootstrap/lib/Col';
import Collapse from 'react-bootstrap/lib/Collapse';
import FontAwesome from 'react-fontawesome';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import Grid from 'react-bootstrap/lib/Grid';
import Image from 'react-bootstrap/lib/Image';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Radio from 'react-bootstrap/lib/Radio';
import Row from 'react-bootstrap/lib/Row';
// explore-it component imports
import Instructions from './Instructions';
// css imports
import './css/Activity.css';

function getActivity (activityName, activitiesInDetail) {
  var activity = activitiesInDetail.filter(
      function(activitiesInDetail){
        return activitiesInDetail.activityName === activityName;
      }
  );
  return activity[0];
}

class Activity extends Component{
  constructor(props) {
    super(props);
    this.state = {
      rating: "notRated"
    }
    this.nextPage = this.nextPage.bind(this);
    this.setRating = this.setRating.bind(this);
    this.getImage = this.getImage.bind(this);
  }

  nextPage () {
    var tableData;
    if (this.state.rating !== "notRated"){
      this.props.ReactGA.event({
        category: 'ActivityRating',
        action: this.props.activity,
        label: this.state.rating,
        value: parseInt(this.state.rating, 10)
      });

      tableData = {
        user_id: this.props.userID,
        activity: this.props.activity,
        rating: parseInt(this.state.rating, 10)
      };
      this.props.addtoFirebase('ActivityRating', tableData);

      if(this.props.countUntilNextQuiz === 0){
        this.props.changePage('Quiz');
      }else if (this.props.countUntilNextReward === 0) {
        this.props.changePage('CustomizeRobot');
      }else{
        this.props.changePage('SelectActivity');
      }
    } else{
      this.props.ReactGA.event({
        category: 'MissingActivityRating',
        action: this.props.activity,
      });

      tableData = {
        user_id: this.props.userID,
        category: 'Missing Activity Rating',
        action: this.props.activity
      };
      this.props.addtoFirebase('event', tableData);

      alert("Please rate this activity.")
    }
  }

  setRating(e) {
    this.setState({rating:e.currentTarget.value});
  }

  getImage(activity) {
    if (activity.activityImage !== undefined && activity.activityImage !== '') {
      return (
        <div className="explore-image-container">
          <Image responsive src={process.env.PUBLIC_URL + '/images/activity/' + activity.activityImage}/>
        </div>
      );
    }
    return null;

  }

  render(){
    var activity = getActivity(this.props.activity, this.props.activitiesInDetail);
    var image = this.getImage(activity);

    return(
      <div>
        <Instructions page="Activity"/>
        <Grid>
          <Row>
            {image}
            <Collapsible header="The Activity" bsStyle="success" buttonClass="explore-blue-collapse-button" alertClass="explore-blue-collapse-body" open={true} body={activity.theActivity} ReactGA={this.props.ReactGA} addtoFirebase={this.props.addtoFirebase} userID={this.props.userID}/>
            <hr className="explore-small-hr"/>
            <Collapsible header="What Children Learn" bsStyle="success" buttonClass="explore-purple-collapse-button" alertClass="explore-purple-collapse-body" open={true} body={activity.whatChildrenLearn} ReactGA={this.props.ReactGA} addtoFirebase={this.props.addtoFirebase} userID={this.props.userID}/>
            <hr className="explore-small-hr"/>
            <Collapsible header="Extending The Activity" bsStyle="success" buttonClass="explore-orange-collapse-button" alertClass="explore-orange-collapse-body" open={false} body={activity.extendingTheActivity} ReactGA={this.props.ReactGA} addtoFirebase={this.props.addtoFirebase} userID={this.props.userID}/>
            <hr className="explore-small-hr"/>
            <ExploringLanguage heading="Exploring Language" bsStyle="success" buttonClass="explore-green-collapse-button" alertClass="explore-green-collapse-body" open={false} languageContent={activity.exploringLanguage} ReactGA={this.props.ReactGA} addtoFirebase={this.props.addtoFirebase} userID={this.props.userID}/>
            <hr className="explore-small-hr"/>
            <h3>How would you rate this activity?</h3>
            <Col>
            </Col>
            <Col>
              <FormGroup>
                <Radio name="rating" className="explore-activity-rating" value="5" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                </Radio>
                <Radio name="rating" className="explore-activity-rating" value="4" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                </Radio>
                <Radio name="rating" className="explore-activity-rating" value="3" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                </Radio>
                <Radio name="rating" className="explore-activity-rating" value="2" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                </Radio>
                <Radio name="rating" className="explore-activity-rating" value="1" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                </Radio>
              </FormGroup>
            </Col>
            <Col>

            </Col>
            <hr className="explore-small-hr"/>
          </Row>
        </Grid>
        <Button bsStyle="success" className="explore-light-blue-button" bsSize="large" onClick={this.nextPage}>What's Next?</Button>
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
    this.handleLineBreaks= this.handleLineBreaks.bind(this);
  }

  componentDidMount(){
    if(this.props.open){
      this.setState({open:true})
    }
  }

  getIcon (){
    if (this.state.open !== this.props.open){
      var stateOfCollapse = this.state.open === true ? "opened" : "closed"

      this.props.ReactGA.event({
        category: 'ActivityCollapseClick',
        action: this.props.header + '-' + stateOfCollapse,
        value:1
      });

      var tableData = {
        user_id: this.props.userID,
        category: this.props.header + ' - Activity Collapse Click',
        action: stateOfCollapse
      };
      this.props.addtoFirebase('event', tableData);
    }

    if (this.state.open) {
      return (<Glyphicon className="pull-right" glyph="chevron-up" />);
    }
    return (<Glyphicon className="pull-right" glyph="chevron-down" />);
  }

  handleLineBreaks() {
    if (this.props.header !== 'Exploring Language') {
      var lines = this.props.body.split("\n").map(function(line, n){
        return (n === 0) ? [line] : [<br />, <br />, line];
      });
      return <div>{lines}</div>;
    } else {
      return this.props.body;
    }
  }

  render() {
    var alertClasses = this.props.alertClass + " lang-container";
    var body = this.handleLineBreaks();
    return (
      <div>
        <Button bsStyle={this.props.bsStyle} className={this.props.buttonClass} block onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.header}
          {this.getIcon()}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Alert bsStyle={this.props.bsStyle} className={alertClasses}>
              {body}
            </Alert>
          </div>
        </Collapse>
      </div>
    );
  }
}

class ExploringLanguage extends Component {
  render () {
    var langList = this.props.languageContent.map(function(word) {
      return (
        <ListGroup className="lang-list" key={word.english}>
          <ListGroupItem><strong>English:</strong> {word.english}</ListGroupItem>
          <ListGroupItem><strong>Spanish:</strong> {word.spanish}</ListGroupItem>
          <ListGroupItem><strong>French:</strong> {word.french}</ListGroupItem>
        </ListGroup>
      );
    });

    return (
      <Collapsible header={this.props.heading} bsStyle={this.props.bsStyle} buttonClass={this.props.buttonClass} alertClass={this.props.alertClass} open={this.props.open} body={langList} ReactGA={this.props.ReactGA} addtoFirebase={this.props.addtoFirebase} userID={this.props.userID}/>
    );
  }
}

export default Activity;
