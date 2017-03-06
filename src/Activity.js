import React, { Component } from 'react';
import Grid from 'react-bootstrap/lib/Grid';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import Alert from 'react-bootstrap/lib/Alert';
import Collapse from 'react-bootstrap/lib/Collapse';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';
import FontAwesome from 'react-fontawesome';

import './css/Activity.css';


var activity = [
  {
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
  },
  {
    activityName: 'Nutrition',
    theActivity: 'Malcolm the Robot looks in amazement at all the food. “I do not eat food, so I want to learn more about the different types of food in the five major food groups: fruits, vegetables, grains, dairy, and proteins.” Help the Robot by finding two foods from each of the major food groups and explain to him why the foods in each group belong together.',
    extendingTheActivity: 'As your child selects different foods, discuss the various characteristics of the food, and encourage them to find another one like it. You may want to ask questions about where the food comes from, or what that food does for your growing body.',
    whatChildrenLearn: "Putting objects into categories is an important developmental milestone. Categories allow people to make guesses about unfamiliar objects. For example, someone may not know what a mango is, but once they know it belongs in the fruit category, they can understand that it would share many of the attributes that other fruits have. Learning to build categories (such as food groups) engages children's innate ability to organize knowledge they learn from their world.",
    exploringLanguage:[
      {
        english: 'Category',
        spanish: 'Categoria',
        french: 'Catégorie'
      },
      {
        english:'Fruit',
        spanish:'Fruta',
        french: 'Fruit'
      },
      {
        english:'Organize',
        spanish:'Organizar',
        french: 'Organiser'
      }
    ]
  }
];

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
      this.props.changePage('Quiz');
    } else{
      alert("Please rate this activity.")
    }
  }
  setRating (e) {
    this.setState({rating:e.currentTarget.value});
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
          <h3>Did you like this activity?</h3>
          <ButtonGroup>
            <Button className="activity-rating-button" value="like" onClick={this.setRating}><FontAwesome className="activity-rating" name='smile-o' /><br/>I Liked it</Button>
            <Button className="activity-rating-button" value="ok" onClick={this.setRating}><FontAwesome className="activity-rating" name='meh-o' /><br/>It was OK</Button>
            <Button className="activity-rating-button" value="dislike" onClick={this.setRating}><FontAwesome className="activity-rating" name='frown-o' /><br/>I Disliked it</Button>
          </ButtonGroup>
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
