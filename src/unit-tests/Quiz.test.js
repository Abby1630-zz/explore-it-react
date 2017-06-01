import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './../Quiz';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var addtoFirebaseFunction = function() {};
  var userID = '123';
  var ReactGA = function() {};
  var changePageFunction = function() {};
  var changeQuizValuesFunction = function() {};
  var quizDifficulty = 'hard';
  var quizQuestionsCorrectInARow = '1';
  var quizQuestionsWrongInARow = '1';
  var selectedExhibit = 'Publix';
  var priorActivitiesForQuiz = ['Cultural Foods'];
  var showRobot = true;
  var questions = [
    {
      "exhibitName": "Publix",
      "activityName": "Cultural Foods",
      "easy": {
        "question": "How many ingredients did you need to make the Hispanic meal?",
        "questionType": "multiple choice",
        "possibleAnswers": [
          "3", "5", "1", "7"
        ],
        "correctAnswer" : "3"
      },
      "medium": {
        "question": "Which one of these did we not use in the Hispanic recipe?",
        "questionType": "multiple choice",
        "possibleAnswers": [
          "Rice", "Soup", "Tomato", "Carrots"
        ],
        "correctAnswer" : "Tomato"
      },
      "hard": {
        "question": "Name one of the ingredients from the Hispanic meal in Spanish",
        "questionType": "fill in",
        "correctAnswers": ["arroz", "zanahoria", "sopa"]
      }
    }
  ];
  var countUntilNextReward = ''

  ReactDOM.render(
    <Quiz
      addtoFirebase={addtoFirebaseFunction}
      userID={userID}
      ReactGA={ReactGA}
      changePage={changePageFunction}
      changeQuizValues={changeQuizValuesFunction}
      quizDifficulty={quizDifficulty}
      quizQuestionsCorrectInARow={quizQuestionsCorrectInARow}
      quizQuestionsWrongInARow={quizQuestionsWrongInARow}
      exhibit={selectedExhibit}
      activity={priorActivitiesForQuiz}
      showRobot={showRobot}
      questions={questions}
      countUntilNextReward={countUntilNextReward}
    />, div);
});
