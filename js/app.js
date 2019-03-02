// Guessing Game about me
// Questions based on information available in my web page 

"use-strict";

var userName = prompt('Thank you for visiting my Blog. \n\n Please enter your name to start the game');
console.log('Username: ', userName);

alert('Hello ' + userName + '! \n\n Let\'s see how well you know me now!');
var correctAnswersCounter = 0;
var incorrectAnswersCounter = 0;

function askYesOrNoQuestion(questionText, answersToCompare) {
  var responseAns = prompt(questionText);
  console.log(questionText,' :: ' , responseAns);
  var gotCorrectAns = false;
  for(var j = 0; j < answersToCompare.length ; j++) {
    if(answersToCompare[j].toUpperCase() === responseAns.toUpperCase()){
      correctAnswersCounter ++;
      alert("Awesome! You got it right");
      console.log('Correct Ans:: ', responseAns);
      gotCorrectAns = true;
      break;
    }
  }
  if(!gotCorrectAns){
    incorrectAnswersCounter++;
    console.log('Wrong Ans:: ', responseAns);
    alert("NNNaaahhh...Incorrect Answer");
  }
}

askYesOrNoQuestion('I work in Amazon. Yes or No? ', ['Y', 'YES']);
askYesOrNoQuestion('I live in Redmond. Yes or No? ', ['N', 'NO']);
askYesOrNoQuestion('I love snow. Yes or No? ', ['Y', 'YES']);
askYesOrNoQuestion('I know DynamoDB. Yes or No? ', ['Y', 'YES']);
askYesOrNoQuestion('I\'m proficient in HTML. Yes or No? ', ['Y', 'YES']);

function askFavNumber(myFavNumber){
  var favNumber =0;
  var attempts = 0;
  var favNumberCorrectFlag = false; 
  while (favNumber !== myFavNumber && attempts < 4) {
    favNumber = parseInt(prompt('Do you remember my favorite number ?'));
    console.log('favNumber:', favNumber);

    if (favNumber < myFavNumber) {
      alert('sorry you guessed too low');
      attempts++;
    } else if (favNumber > myFavNumber) {
      alert('you guessed too high');
      attempts++;
    } else if (isNaN(favNumber) || favNumber === null) {
      alert('please enter an actual number');
      attempts++;
    } else if (favNumber === myFavNumber) {
      alert('You guessed ir right ! ');
      correctAnswersCounter++;
      favNumberCorrectFlag = true;
    }
    console.log('attempts:', attempts);
  }
  if (!favNumberCorrectFlag) { 
    incorrectAnswersCounter++;
  }
}
askFavNumber(10);


function askStatesWorked(){

  var correctStatesAnswerFlag = false;
  var attempts = 0;

  while (!correctStatesAnswerFlag && attempts < 3) {

    console.log('attempts:', attempts);
    console.log('correctStatesAnswerFlag:', correctStatesAnswerFlag);

    var statesAnswer = prompt('Do you remember one of the states that I worked ?');
    console.log('statesAnswer:', statesAnswer);
    for (var i = 0; i < statesWorked.length; i++) {
      console.log('current iteration:', statesWorked[i]);
      if (statesAnswer === statesWorked[i]) {
        alert('you got it right!');
        correctStatesAnswerFlag = true;
        correctAnswersCounter++;
        break;
      }
    }
    if (!correctStatesAnswerFlag) {
      alert('incorrect guess ');
    }
    attempts++;
    console.log('attempts:', attempts);
    console.log('correctStatesAnswerFlag:', correctStatesAnswerFlag);
  }
  if (!correctStatesAnswerFlag) {
    incorrectAnswersCounter++;
  }
}
var statesWorked = ['washington', 'oregon', 'arkansas', 'california', 'tennessee' ];
askStatesWorked(statesWorked);


console.log('correctAnswersCounter:', correctAnswersCounter);
console.log('incorrectAnswersCounter:', incorrectAnswersCounter);

alert('You have answered  ' + correctAnswersCounter + ' questions correctly and ' + incorrectAnswersCounter +' questions incorrectly.');
alert('Once again Thank you for visiting my page!!! Have a great day!');
