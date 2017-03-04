import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import Alert from 'react-bootstrap/lib/Alert';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import './css/Activity.css';


var activity = {
  activityName: 'Cultural Foods',
  theActivity: 'Malcolm the Robot’s eyes light up, “I love to travel and try new cuisine from all over the world! During my travels, I’ve learned a lot about other cultures and their languages. Can you help me prepare a Hispanic meal?” Help the robot by finding three items from the store: rice, carrots, and soup. After you do so, the Robot will tell you how to say them in Spanish.',
  extendingTheActivity: 'You can incorporate other cultures into this activity. Try making an Italian dish, like spaghetti and meatballs. You should ask the child to find the ingredients to make the recipe and talk about Italian culture, perhaps how they make pasta from scratch using flour, eggs, salt, and olive oil. You can also try French cuisine, like ratatouille. Ask the child to find a variety of vegetables (zucchini, eggplant, squash, and tomato sauce) to incorporate and talk about how the French culture uses a lot of fresh ingredients.',
  whatChildrenLearn: 'In this activity the children are learning about other cultures traditions and about being bilingual. Learning a second language early on is much easier than trying to learn a language later in high school.',
  exploringLanguage:[
    {
      english: 'Rice',
      spanish: 'Arroz',
      french: 'Riz'
    },
    {
      english:'Carrots',
      spanish:'Zanahoria',
      french: 'Carottes'
    },
    {
      english:'Soup',
      spanish:'Sopa',
      french: 'Soupe'
    }
  ]
};

class Activity extends Component{
  constructor(props) {
    super(props);
    this.state = {
    }
    this.nextPage= this.nextPage.bind(this);
  }

  nextPage () {
    this.props.changePage('Quiz');
  }

  render(){
    return(
      <div>
        <Grid>
          <SectionTitle text={activity.activityName}/>
          <hr/>
          <Collapsible header="The Activity" bsStyle="success" open={true} body={activity.theActivity}/>
          <hr/>
          <Collapsible header="What Children Learn" bsStyle="danger" open={true} body={activity.whatChildrenLearn}/>
          <hr/>
          <Collapsible header="Extending The Activity" bsStyle="warning" open={false} body={activity.extendingTheActivity}/>
          <hr/>
          <ExploringLanguage heading="Exploring Language" bsStyle="info" open={false} languageContent={activity.exploringLanguage}/>
          <hr/>
        </Grid>
        <Button bsStyle="success" bsSize="large" onClick={this.nextPage}>What's Next?</Button>
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
    if (this.state.open) {
      return (<Glyphicon className="pull-right" glyph="chevron-up" />);
    }
    return (<Glyphicon className="pull-right" glyph="chevron-down" />);
  }

  render() {
    return (
      <div>
        <Button bsStyle={this.props.bsStyle} block onClick={ ()=> this.setState({ open: !this.state.open })}>
          {this.props.header}
          {this.getIcon()}
        </Button>
        <Collapse in={this.state.open}>
          <div>
            <Alert bsStyle={this.props.bsStyle} className="lang-container">
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
      <Collapsible header={this.props.heading} bsStyle={this.props.bsStyle} open={this.props.open} body={langList}/>
    );
  }
}

export default Activity;
