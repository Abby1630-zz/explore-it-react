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
  var quizDifficulty = '';
  var quizQuestionsCorrectInARow = '';
  var quizQuestionsWrongInARow = '';
  var selectedExhibit = '';
  var priorActivitiesForQuiz = {};
  var showRobot = true;
  var questions = {};
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
