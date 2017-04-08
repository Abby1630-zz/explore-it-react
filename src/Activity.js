import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Radio from 'react-bootstrap/lib/Radio';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FontAwesome from 'react-fontawesome';
import './css/Activity.css';
import './css/common.css';
import Instructions from './Instructions';


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
    this.nextPage= this.nextPage.bind(this);
    this.setRating= this.setRating.bind(this);
  }

  nextPage () {
    if (this.state.rating !== "notRated"){
      this.props.ReactGA.event({
        category: 'ActivityRating',
        action: this.props.activity,
        label: this.state.rating
      });
      this.props.changePage('Quiz');
    } else{
      this.props.ReactGA.event({
        category: 'MissingActivityRating',
        action: this.props.activity,
      });
      alert("Please rate this activity.")
    }
  }

  setRating (e) {
    this.setState({rating:e.currentTarget.value});
  }

  render(){
    var activity = getActivity(this.props.activity, this.props.activitiesInDetail);
    return(
      <div>
        <Grid>
          <Row>
            <SectionTitle text={activity.activityName}/>
          </Row>
        </Grid>
        <Instructions page="Activity"/>
        <Grid>
          <Row>
            <Collapsible header="The Activity" bsStyle="success" buttonClass="explore-blue-collapse-button" alertClass="explore-blue-collapse-body" open={true} body={activity.theActivity} ReactGA={this.props.ReactGA}/>
            <hr className="explore-small-hr"/>
            <Collapsible header="What Children Learn" bsStyle="success" buttonClass="explore-purple-collapse-button" alertClass="explore-purple-collapse-body" open={true} body={activity.whatChildrenLearn} ReactGA={this.props.ReactGA}/>
            <hr className="explore-small-hr"/>
            <Collapsible header="Extending The Activity" bsStyle="success" buttonClass="explore-orange-collapse-button" alertClass="explore-orange-collapse-body" open={false} body={activity.extendingTheActivity} ReactGA={this.props.ReactGA}/>
            <hr className="explore-small-hr"/>
            <ExploringLanguage heading="Exploring Language" bsStyle="success" buttonClass="explore-green-collapse-button" alertClass="explore-green-collapse-body" open={false} languageContent={activity.exploringLanguage} ReactGA={this.props.ReactGA}/>
            <hr className="explore-small-hr"/>
            <h3>How would you rate this activity?</h3>
            <Col>

            </Col>
            <Col>
              <FormGroup>
                <Radio name="rating" className="explore-activity-rating" value="1" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
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
                <Radio name="rating" className="explore-activity-rating" value="3" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                  <FontAwesome className="activity-rating" name='star-o' />
                </Radio>
                <Radio name="rating" className="explore-activity-rating" value="4" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star-o' />
                </Radio>
                <Radio name="rating" className="explore-activity-rating" value="5" onChange={this.setRating}>
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
                  <FontAwesome className="activity-rating" name='star' />
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
  }

  componentDidMount(){
    if(this.props.open){
      this.setState({open:true})
    }
  }

  getIcon (){
    if (this.state.open !== this.props.open){
      this.props.ReactGA.event({
        category: 'ActivityCollapseClick',
        action: this.props.header + '-' + this.state.open
      });
    }

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

class SectionTitle extends Component {
  render () {
    return <h2 className="explore-no-margin">{this.props.text}</h2>;
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
      <Collapsible header={this.props.heading} bsStyle={this.props.bsStyle} buttonClass={this.props.buttonClass} alertClass={this.props.alertClass} open={this.props.open} body={langList} ReactGA={this.props.ReactGA}/>
    );
  }
}

export default Activity;
