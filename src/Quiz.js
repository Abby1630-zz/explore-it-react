import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';
import Alert from 'react-bootstrap/lib/Alert';
import ProgressBar from 'react-bootstrap/lib/ProgressBar';
import Button from 'react-bootstrap/lib/Button';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import './css/Quiz.css';

var rand = Math.random();

var questions =[
  {
    exhibitName: 'Publix',
    activityName: 'Cultural Foods',
    easy: {
      question: "How many ingredients did you need to make the Hispanic meal?",
      questionType: "multiple choice",
      possibleAnswers: [
        "3", "5", "1", "7"
      ],
      correctAnswer : "3"
    },
    medium: {
      question: "Which one of these did we not use in the Hispanic recipe?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Rice", "Soup", "Tomato", "Carrots"
      ],
      correctAnswer : "Tomato"
    },
    hard: {
      question: "Name one of the ingredients from the Hispanic meal in Spanish",
      questionType: "fill in",
      correctAnswers: ["arroz", "zanahoria", "sopa"]
    }
  },
  {
    exhibitName: 'Publix',
    activityName: 'Nutrition',
    easy: {
      question: "Which of these is not one of the five main food groups?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Vegetables", "Fruits", "Candy", "Dairy"
      ],
      correctAnswer : "Candy"
    },
    medium: {
      question: "Which of these food types should you eat most of during a typical day?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Dairy", "Vegetables", "Protein", "Fruits"
      ],
      correctAnswer : "Vegetables"
    },
    hard: {
      question: "Name one of the five main food group.",
      questionType: "fill in",
      correctAnswers: ["Fruits", "Vegetables", "Protein", "Dairy"]
    }
  },
  {
    exhibitName: 'Publix',
    activityName: 'Money',
    easy: {
      question: "How much money did you start with to buy supplies?",
      questionType: "multiple choice",
      possibleAnswers: [
        "$30", "$20", "$5", "$10"
      ],
      correctAnswer : "$10"
    },
    medium: {
      question: "You started with $10 to buy supplies. You bought an item for $3. How much do you have left?",
      questionType: "multiple choice",
      possibleAnswers: [
        "$7", "$3", "$5", "$1"
      ],
      correctAnswer : "$7"
    },
    hard: {
      question: "You started with $10 to buy supplies. You bought an item for $3. How much do you have left?",
      questionType: "fill in",
      correctAnswers: ["$3", "3"]
    }
  },
  {
    exhibitName: 'Publix',
    activityName: 'Sorting',
    easy: {
      question: "Which of these items is shortest?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Carton of milk", "Muffin", "Cereal", "Can of tomatoes"
      ],
      correctAnswer : "Muffin"
    },
    medium: {
      question: "Which list is sorted correctly, from shortest to tallest?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Cereal box, can of tomatoes, muffin", "Muffin, can of tomatoes, cereal box", "Can of tomatoes, cereal box, muffin", "Muffin, cereal box, can of tomatoes"
      ],
      correctAnswer : "Muffin, can of tomatoes, cereal box"
    },
    hard: {
      question: "What is the opposite of tall?",
      questionType: "fill in",
      correctAnswers: ["short"]
    }
  },
  {
    exhibitName: 'Publix',
    activityName: 'Letters',
    easy: {
      question: "Which of these foods starts with the same letter as Robot?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Pear", "Banana", "Orange ", "Rice"
      ],
      correctAnswer : "Rice"
    },
    medium: {
      question: "Which food starts with the first letter of the alphabet?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Pears", "Bread", "Spaghetti", "Apples"
      ],
      correctAnswer : "Apples"
    },
    hard: {
      question: "What letter does Eggplant start with?",
      questionType: "fill in",
      correctAnswers: ["e"]
    }
  },
  {
    exhibitName: 'Medical and Vet',
    activityName: 'Bones',
    easy: {
      question: "What animal needed to get an X-Ray at the vet?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Cat", "Snake", "Dog", "Bat"
      ],
      correctAnswer : "Dog"
    },
    medium: {
      question: "Which of these animals is the largest?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Cat", "Snake", "Dog", "Bat"
      ],
      correctAnswer : "Dog"
    },
    hard: {
      question: "What did the dog have to get when he went to the vet?",
      questionType: "fill in",
      correctAnswers: ["x-ray", "xray"]
    }
  },
  {
    exhibitName: 'Medical and Vet',
    activityName: 'Eating the Rainbow',
    easy: {
      question: "What can a person with Celiac disease not eat?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Bread or grains", "Dairy", "Fruit", "Protein"
      ],
      correctAnswer : "Bread or grains"
    },
    medium: {
      question: "This disease occurs when the person has an allergic reaction to bread or grains.",
      questionType: "multiple choice",
      possibleAnswers: [
        "Celiac disease", "Lactose intolerance", "Peanut allergy", "Tree nut allergies"
      ],
      correctAnswer : "Celiac disease"
    },
    hard: {
      question: "What can a person with Celiac disease not eat?",
      questionType: "fill in",
      correctAnswers: ["Bread", "grain "]
    }
  },
  {
    exhibitName: 'Medical and Vet',
    activityName: 'Going to the Doctor',
    easy: {
      question: "What body part is affected when it hurts to swallow?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Stomach", "Head", "Throat", "Nose"
      ],
      correctAnswer : "Throat"
    },
    medium: {
      question: "The human body has a system that is composed of all of our bones that is called the ___",
      questionType: "multiple choice",
      possibleAnswers: [
        "Skeletal system", "Nervous System", "Muscular System", "Digestive System"
      ],
      correctAnswer : "Skeletal system"
    },
    hard: {
      question: "What body part is affected when it hurts to swallow?",
      questionType: "fill in",
      correctAnswers: ["Throat"]
    }
  },
  {
    exhibitName: "Outback/Carraba's",
    activityName: 'Make Me a Pizza',
    easy: {
      question: "What’s the first ingredient that you put on the pizza?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Cheese", "Pepperoni", "Sauce", "Peppers"
      ],
      correctAnswer : "Sauce"
    },
    medium: {
      question: "If you put 2 pieces of pepperoni and 1 green pepper, how many ingredients are on the pizza?",
      questionType: "multiple choice",
      possibleAnswers: [
        "3", "1", "4", "2"
      ],
      correctAnswer : "3"
    },
    hard: {
      question: "If you put 2 pieces of pepperoni and 1 green pepper, how many ingredients are on the pizza?",
      questionType: "fill in",
      correctAnswers: ["3", "three"]
    }
  },
  {
    exhibitName: "Outback/Carraba's",
    activityName: 'Advanced Pizza Making (8-11 year olds)',
    easy: {
      question: "You and three friends each want two pizzas. How many pizzas will you have total?",
      questionType: "multiple choice",
      possibleAnswers: [
        "4", "8", "6", "10"
      ],
      correctAnswer : "8"
    },
    medium: {
      question: "If you cut a pizza into four slices and take one piece, how much of the pizza did you take?",
      questionType: "multiple choice",
      possibleAnswers: [
        "1/3", "1/2", "1/4", "1/8"
      ],
      correctAnswer : "1/4"
    },
    hard: {
      question: "If you cut a pizza into four slices and take one piece, how much of the pizza did you take?",
      questionType: "fill in",
      correctAnswers: ["1/4"]
    }
  },
  {
    exhibitName: "Outback/Carraba's",
    activityName: 'Order up!',
    easy: {
      question: "What does a server at a restaurant not do?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Cook the food", "Take the orders", "Deliver the food", "Remember the orders"
      ],
      correctAnswer : "Cook the food"
    },
    medium: {
      question: "What did the family order from Outback?",
      questionType: "multiple choice",
      possibleAnswers: [
        "One ham sandwich", "One turkey sandwich", "One cheese sandwich and one turkey sandwich", "One cheese sandwich and two ham sandwiches"
      ],
      correctAnswer : "One cheese sandwich and two ham sandwiches"
    },
    hard: {
      question: "How many sandwiches did the family at Outback order?",
      questionType: "fill in",
      correctAnswers: ["3", "three"]
    }
  },
  {
    exhibitName: "Outback/Carraba's",
    activityName: "I’m Here to Help",
    easy: {
      question: "How much was the bill for the family who couldn’t afford their meals?",
      questionType: "multiple choice",
      possibleAnswers: [
        "$10", "$20", "$30", "$40"
      ],
      correctAnswer : "$20"
    },
    medium: {
      question: "How much money did the family who couldn’t pay their bill need to completely pay their bill?",
      questionType: "multiple choice",
      possibleAnswers: [
        "$1", "$5", "$10", "$15"
      ],
      correctAnswer : "$5"
    },
    hard: {
      question: "How much money did the family who couldn’t pay their bill need to completely pay the bill?",
      questionType: "fill in",
      correctAnswers: ["$5", "5"]
    }
  },
  {
    exhibitName: "Outback/Carraba's",
    activityName: 'Planning a Party',
    easy: {
      question: "How many steps are there when planning a party?",
      questionType: "multiple choice",
      possibleAnswers: [
        "6", "8", "4", "5"
      ],
      correctAnswer : "6"
    },
    medium: {
      question: "What is the first step in planning a party?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Set-up decorations", "Order food", "Make the guest list", "Buy a present"
      ],
      correctAnswer : "Make the guest list"
    },
    hard: {
      question: "How many steps are there when planning a party?",
      questionType: "fill in",
      correctAnswers: ["6", "six"]
    }
  },
  {
    exhibitName: 'Fire Station',
    activityName: 'Fire Fighter!',
    easy: {
      question: "How many steps are there in a fire drill?",
      questionType: "multiple choice",
      possibleAnswers: [
        "5", "7", "12", "3"
      ],
      correctAnswer : "7"
    },
    medium: {
      question: "What is the first step for a fire fighter in a fire drill?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Go down the pole", "Arrive at the scene", "Put out the fire", "Look for anyone in danger"
      ],
      correctAnswer : "Go down the pole"
    },
    hard: {
      question: "How many steps are in a fire drill?",
      questionType: "fill in",
      correctAnswers: ["7", "seven"]
    }
  },
  {
    exhibitName: 'Art',
    activityName: 'Shall We Dance?',
    easy: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    medium: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    hard: {
      question: "",
      questionType: "fill in",
      correctAnswers: ["", "", "", ""]
    }
  },
  {
    exhibitName: 'Art',
    activityName: 'Kaleidoscope',
    easy: {
      question: "If you have a pink circle and Malcolm, who can’t see your circle, has a purple circle, does Malcolm think your circle is purple?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Yes", "No"
      ],
      correctAnswer : "Yes"
    },
    medium: {
      question: "If you have a pink circle and Malcolm, who can’t see your circle, has a purple circle, what color does Malcolm think your circle is?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Pink", "Blue", "Purple", "Orange"
      ],
      correctAnswer : "Purple"
    },
    hard: {
      question: "If you have a pink circle and Malcolm, who can’t see your circle, has a purple circle, does Malcolm think your circle is purple?",
      questionType: "fill in",
      correctAnswers: ["Yes"]
    }
  },
  {
    exhibitName: 'Art',
    activityName: 'The Case of the Missing Letter',
    easy: {
      question: "Which letter completes this word: C_W",
      questionType: "multiple choice",
      possibleAnswers: [
        "O", "U", "E", "A"
      ],
      correctAnswer : "O"
    },
    medium: {
      question: "Which letter completes this word: RO_OT",
      questionType: "multiple choice",
      possibleAnswers: [
        "C", "B", "P", "N"
      ],
      correctAnswer : "B"
    },
    hard: {
      question: "What letter completes this word: WA_ER?",
      questionType: "fill in",
      correctAnswers: ["T"]
    }
  },
  {
    exhibitName: 'Art',
    activityName: 'How the Mind Wanders',
    easy: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    medium: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    hard: {
      question: "",
      questionType: "fill in",
      correctAnswers: ["", "", "", ""]
    }
  },
  {
    exhibitName: 'Art',
    activityName: 'Time to Draw!',
    easy: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    medium: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    hard: {
      question: "",
      questionType: "fill in",
      correctAnswers: ["", "", "", ""]
    }
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'Surely You’re Joking',
    easy: {
      question: "Complete the sentence: The _____ is a plane.",
      questionType: "multiple choice",
      possibleAnswers: [
        "Turtle", "Parrot", "Dog", "Mouse"
      ],
      correctAnswer : "Parrot"
    },
    medium: {
      question: "Complete the sentence: The _____ is a tree.",
      questionType: "multiple choice",
      possibleAnswers: [
        "Giraffe", "Fish", "Mouse", "Snail"
      ],
      correctAnswer : "Giraffe"
    },
    hard: {
      question: "Complete the sentence: The ____ is a plane.",
      questionType: "fill in",
      correctAnswers: ["Parrot"]
    }
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'Who is faster?',
    easy: {
      question: "What animal below was the slowest at the races?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Dog", "Rabbit", "Turtle", "Parrot"
      ],
      correctAnswer : "Turtle"
    },
    medium: {
      question: "What animal below was faster than a turtle but slower than a rabbit at the races?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Parrot", "Dog", "Cat", "Hamster"
      ],
      correctAnswer : "Dog"
    },
    hard: {
      question: "What animal was fastest at the races?",
      questionType: "fill in",
      correctAnswers: ["Parrot"]
    }
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'At the Races',
    easy: {
      question: "Which animal did Malcolm the Robot run as fast as?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Dog", "Rabbit", "Parrot", "Turtle"
      ],
      correctAnswer : "Dog"
    },
    medium: {
      question: "Which animal beat Malcolm the Robot in the race?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Frog", "Turtle", "Parrot", "Dog"
      ],
      correctAnswer : "Parrot"
    },
    hard: {
      question: "Which animal did Malcolm the Robot run as fast as?",
      questionType: "fill in",
      correctAnswers: ["Dog"]
    }
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'How High?',
    easy: {
      question: "How many inches are in one foot?",
      questionType: "multiple choice",
      possibleAnswers: [
        "10", "12", "6", "1"
      ],
      correctAnswer : "12"
    },
    medium: {
      question: "How tall is the average 4 to 6 year old child?",
      questionType: "multiple choice",
      possibleAnswers: [
        "1 to 2 feet", "10 to 20 inches", "37 to 42 inches", "75 to 100 inches"
      ],
      correctAnswer : "37 to 42 inches"
    },
    hard: {
      question: "How many inches are in one foot?",
      questionType: "fill in",
      correctAnswers: ["12", "twelve"]
    }
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'How Strong?',
    easy: {
      question: "What color were the balls on the How High machine?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Yellow", "Green", "Blue", "Red"
      ],
      correctAnswer : "Red"
    },
    medium: {
      question: "How many bars could a frog turn on with a really good jump?",
      questionType: "multiple choice",
      possibleAnswers: [
        "5", "3", "1", "7"
      ],
      correctAnswer : "5"
    },
    hard: {
      question: "How many red bars could a frog turn on with a really good jump?",
      questionType: "fill in",
      correctAnswers: ["5", "five"]
    }
  },
  {
    exhibitName: 'Get Moving',
    activityName: 'Stop that Ball!',
    easy: {
      question: "What type of item were you trying to keep out of the net?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Hockey Puck", "Soccer Ball", "Baseball", "Volleyball"
      ],
      correctAnswer : "Soccer Ball"
    },
    medium: {
      question: "The two sides of your body are sometimes referred to as these two directions.",
      questionType: "multiple choice",
      possibleAnswers: [
        "Right and wrong", "Right and left", "East and west", "Up and down"
      ],
      correctAnswer : "Right and left"
    },
    hard: {
      question: "What type of items were you trying to keep out of the net?",
      questionType: "fill in",
      correctAnswers: ["Soccer ball", "hockey puck"]
    }
  },
  {
    exhibitName: 'Invention Zone',
    activityName: 'Lego Activity-egocentrism and motor skills',
    easy: {
      question: "If you show Malcolm the Robot that there are three balls in a green bag and then make him close his eyes while you take the balls out, will he know that you took the balls out of the bag?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Yes", "No"
      ],
      correctAnswer : "Yes"
    },
    medium: {
      question: "If you show Malcolm the Robot that there are three balls in a green bag and then make him close his eyes while you take the balls out, where will he thinks the balls are when he opens his eyes?",
      questionType: "multiple choice",
      possibleAnswers: [
        "In the bag", "Outside of the bag"
      ],
      correctAnswer : "In the bag"
    },
    hard: {
      question: "If you show Malcolm the Robot that there are three balls in a bag and then make him close his eyes while you add a ball, how many balls will he think there are when he opens his eyes?",
      questionType: "fill in",
      correctAnswers: ["3", "three"]
    }
  },
  {
    exhibitName: 'Invention Zone',
    activityName: 'Where will it go?',
    easy: {
      question: "What happens when the vacuum sucks up the ball?",
      questionType: "multiple choice",
      possibleAnswers: [
        "It flies out the top", "It doesn’t move", "It goes down the pipe"
      ],
      correctAnswer : "It flies out the top"
    },
    medium: {
      question: "Where does the ball land after it flies out of the vacuum?",
      questionType: "multiple choice",
      possibleAnswers: [
        "In the cylinder", "On the ground", "On the other side of the room"
      ],
      correctAnswer : ""
    },
    hard: {
      question: "What is the machine called that sucks up the ball?",
      questionType: "fill in",
      correctAnswers: ["Vacuum"]
    }
  },
  {
    exhibitName: 'Invention Zone',
    activityName: 'Twinkle Star Theater',
    easy: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    medium: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    hard: {
      question: "",
      questionType: "fill in",
      correctAnswers: ["", "", "", ""]
    }
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Piloting a Boat',
    easy: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    medium: {
      question: "",
      questionType: "multiple choice",
      possibleAnswers: [
        "", "", "", ""
      ],
      correctAnswer : ""
    },
    hard: {
      question: "",
      questionType: "fill in",
      correctAnswers: ["", "", "", ""]
    }
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Hidden Treasure',
    easy: {
      question: "Gasparilla Island is named after which famous pirate?",
      questionType: "multiple choice",
      possibleAnswers: [
        "John Gasp", "Rafael Pari", "Jose Gaspar", "Roberto Gaso"
      ],
      correctAnswer : "Jose Gaspar"
    },
    medium: {
      question: "What was Jose Gaspar’s nickname?",
      questionType: "multiple choice",
      possibleAnswers: [
        "The Buccaneering Pirate", "The last of the Buccaneers", "The last of the pirates of Tampa Bay", "The Great Gasparilla"
      ],
      correctAnswer : "The last of the Buccaneers"
    },
    hard: {
      question: "Gasparilla Island was named after which famous pirate?",
      questionType: "fill in",
      correctAnswers: ["Jose Gaspar", "Gaspar"]
    }
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Sailing, Sailing',
    easy: {
      question: "In what sea is Cozumel located?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Caribbean Sea", "Dead Sea", "Aegean Sea", "Mediterranean Sea"
      ],
      correctAnswer : "Caribbean Sea"
    },
    medium: {
      question: "What does radar stand for?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Really Awesome DARting", "RAdio Detecting and Ranging", "Readily ADding Arches", "RAdio Direction AnywheRe"
      ],
      correctAnswer : "RAdio Detecting and Ranging "
    },
    hard: {
      question: "Cozumel is located in which sea?",
      questionType: "fill in",
      correctAnswers: ["Caribbean"]
    }
  },
  {
    exhibitName: 'Water Area',
    activityName: 'Ahoy, There!',
    easy: {
      question: "What part of the telescope do you look through to see objects far away?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Control Handle", "Focuser", "Mount", "Eyepiece "
      ],
      correctAnswer : "Eyepiece "
    },
    medium: {
      question: "Where are the lenses of the telescope located?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Optical tubes", "Mount", "Stand", "Control Handle"
      ],
      correctAnswer : "Optical tubes"
    },
    hard: {
      question: "What part of the telescope do you look through to see objects far away?",
      questionType: "fill in",
      correctAnswers: ["Eyepiece"]
    }
  },
  {
    exhibitName: 'Water Area',
    activityName: 'What’s Down There?',
    easy: {
      question: "What object might be best to take pictures underwater?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Underwater binoculars", "Underwater phone", "Underwater camera", "Underwater xBox"
      ],
      correctAnswer : "Underwater camera"
    },
    medium: {
      question: "What object might be best to take pictures underwater?",
      questionType: "multiple choice",
      possibleAnswers: [
        "Underwater binoculars", "Underwater camera", "Underwater phone", "Underwater xBox "
      ],
      correctAnswer : "Underwater camera"
    },
    hard: {
      question: "An underwater version of one of these is best for taking pictures underwater.",
      questionType: "fill in",
      correctAnswers: ["Camera"]
    }
  }
];

function getQuestions (activityName) {
  var questionsForActivity = questions.filter(
      function(questions){
        return questions.activityName === activityName;
      }
  );
  return questionsForActivity[0];
}

class Quiz extends Component{
  constructor(props) {
    super(props);
    this.state = {
      isCorrect: 'not answered',
      actualValue: 'not answered',
      expectedValue: '',
      percentComplete: 0
    };
    this.nextStep= this.nextStep.bind(this);
    this.validateAnswer= this.validateAnswer.bind(this);
    this.setValues= this.setValues.bind(this);
    this.randomizeQuestion= this.randomizeQuestion.bind(this);
  }

  setValues(actualVal, expectedVal){
    this.setState({actualValue: actualVal.toLowerCase()});
    this.setState({expectedValue: expectedVal.toLowerCase()});
  }

  validateAnswer () {
    var expectedArray = this.state.expectedValue.split(",");
    if(expectedArray.indexOf(this.state.actualValue) > -1){
      this.setState({
        isCorrect: 'true',
        percentComplete: 100
      });
    } else {
      this.setState({
        isCorrect: 'false',
        percentComplete: 100
      });
    }
  }

  nextStep () {
    this.props.changePage('SelectActivity');
  }

  randomizeQuestion() {
    if (rand < .33) {
      return (
        <QuestionBlock questionInfo={getQuestions(this.props.activity).easy} setValue={this.setValues}/>
      );
    } else if (rand > .66) {
      return (
        <QuestionBlock questionInfo={getQuestions(this.props.activity).medium} setValue={this.setValues}/>
      );
    } else {
      return (
        <QuestionBlock questionInfo={getQuestions(this.props.activity).hard} setValue={this.setValues}/>
      );
    }
  }

  render(){
    return(
      <div>
        <AnswerFeedback isCorrect={this.state.isCorrect}  />
        {this.randomizeQuestion()}
        <ProgressBar striped bsStyle="info" now={this.state.percentComplete} />
        <SubmitButton validateAnswer={this.validateAnswer} nextStep={this.nextStep} isCorrect={this.state.isCorrect}/>
      </div>
    );
  }
}

class SubmitButton extends Component {
  render() {
    if (this.props.isCorrect ==='not answered'){
      return (
        <Button bsStyle="success" bsSize="large" onClick={this.props.validateAnswer}>Am I Correct?</Button>
      );
    } else{
      return (
        <Button bsStyle="info" bsSize="large" onClick={this.props.nextStep}>Go to next step</Button>
      );
    }
  }
}

class AnswerFeedback extends Component {
  render(){
    if (this.props.isCorrect === 'true' ) {
      return (
        <Alert bsStyle="success"><strong>Well done! </strong>You got the last question correct!</Alert>
      );
    } else if(this.props.isCorrect === 'false') {
      return (
        <Alert bsStyle="danger"><strong>Oh snap! </strong>That wasn't the correct answer. You will do great on the next one!</Alert>
      );
    };
    return <div/>;

  }
}


class QuestionBlock extends Component{
  render(){
    if (this.props.questionInfo.questionType === "multiple choice")
      return(
        <MultipleChoiceQuestion questionInfo={this.props.questionInfo} setValue={this.props.setValue}/>
      );
    else {
      return(
        <FillInQuestion questionInfo={this.props.questionInfo} setValue={this.props.setValue}/>
      );
    }
  }
}

class MultipleChoiceQuestion extends Component{
  constructor(props) {
    super(props);

    this.handleChange= this.handleChange.bind(this);
  }


  handleChange(e) {
    this.props.setValue(e.target.value, this.props.questionInfo.correctAnswer);
  }

  render(){
    var me = this;

    var questionJRX = this.props.questionInfo.possibleAnswers.map(function(answer) {
      return (
        <ListGroupItem key={answer}>
        <div className="radio">
          <label>
            <input type="radio" name="answers" key={answer} value={answer} onChange={me.handleChange} />
            {answer}
          </label>
        </div>
      </ListGroupItem>

      );
    });

    return(
      <div>
        <h3>{this.props.questionInfo.question}</h3>
        <ListGroup>
          {questionJRX}
        </ListGroup>
      </div>
    );
  }
}


class FillInQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localValue: ''
    };

    this.handleChange= this.handleChange.bind(this);
  }


  handleChange(e) {
    this.setState({ localValue: e.target.value });
    var expectedValues = this.props.questionInfo.correctAnswers;
    this.props.setValue(e.target.value,expectedValues.toString());
  }

  render() {
    // console.log(this.props.questionInfo.correctAnswers);
    return (
      <form>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>{this.props.questionInfo.question}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.localValue}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
      </form>
    );
  }
}


export default Quiz;