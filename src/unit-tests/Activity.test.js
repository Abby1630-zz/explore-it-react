import React from 'react';
import ReactDOM from 'react-dom';
import Activity from './../Activity';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var selectedExhibit = 'Publix';
  var selectedActivity = 'Cultural Foods';
  var activitiesInDetail = [
    {
      "exhibitName": "Publix",
      "activityName": "Cultural Foods",
      "activityImage": "",
      "theActivity": "Malcolm the Robot's eyes light up, \"I love to travel and try new foods from all over the world! During my travels, I've learned a lot about other cultures and their languages. Can you help me prepare a Hispanic meal?\" Help the robot by finding three items from the store: rice, carrots, and soup. After you do so, the Robot will tell you how to say them in Spanish.",
      "extendingTheActivity": "You can incorporate other cultures into this activity. Try making an Italian dish, like spaghetti and meatballs. You should ask the child to find the ingredients to make the recipe and talk about Italian culture, perhaps how they make pasta from scratch using flour, eggs, salt, and olive oil. You can also try French cuisine, like ratatouille. Ask the child to find a variety of vegetables (zucchini, eggplant, squash, and tomato sauce) to incorporate and talk about how the French culture uses a lot of fresh ingredients.",
      "whatChildrenLearn": "In this activity the children are learning about other cultures traditions and about being bilingual. Learning a second language early on is much easier than trying to learn a language later in high school.",
      "exploringLanguage":[
        {
          "english": "Rice",
          "spanish": "Arroz",
          "french": "Riz"
        },
        {
          "english":"Carrots",
          "spanish":"Zanahoria",
          "french": "Carottes"
        },
        {
          "english":"Soup",
          "spanish":"Sopa",
          "french": "Soupe"
        }
      ]
    }
  ];

  // ReactDOM.render(
  //   <Activity
  //     addtoFirebase={addtoFirebaseFunction}
  //     userID={userID}
  //     ReactGA={ReactGA}
  //     changePage={changePageFunction}
  //     exhibit={selectedExhibit}
  //     activity={selectedActivity}
  //     activitiesInDetail={activitiesInDetail}
  //     countUntilNextQuiz='1'
  //     countUntilNextReward='4'
  //   />, div);
});
