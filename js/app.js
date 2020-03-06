'use strict'
//name prompt
var name = prompt('what is your name?');
alert('hello, ' + name + ' whats up.');
console.log(name);

var userScore = 0

function askQuestion (question1, correct){
    var answer = prompt(question1);
    if (answer === correct){
        alert('correct!');
        userScore++
    } else {
        alert ('wrong!');
    }
}

//5 yes no
askQuestion('am i from washington?', 'yes');
askQuestion('am i a Minor?', 'yes');
askQuestion('am i an athlete?', 'yes');
askQuestion('am i in school?','yes');
askQuestion('am i a gamer?', 'yes');

//number question 6 with 4 attempts
// var attempt = 4;

//question to ask / correct number answer / number of attempts
function askNumberQuestion(question, correctNumber, attempt){
    var answeredCorrectly = false;

    loopattempt: while(attempt > 0 && answeredCorrectly === false){
        var answer = prompt(question);
        attempt--;
        
        checkLoop: for (var i = 0; i != 6, i++;) {
            var answer = Number(prompt(question + 'you have ' + attempts + 'attempts'));
            if (Number(answer) === correctNumber){
                alert('correct');
                answeredCorrectly = true;
                userScore++;
                break loopattempt;
            }
        }
        alert('incorrect, you have' + (attempts - 1 ) + 'attempts');
        if (answeredCorrectly === false) alert('sorry try again.');
    }
}

//question to ask / correct number answer / number of attempts
askNumberQuestion('what day was i born?', 6, 4);

//multiple coorect for question 7 with 6 attempts
// var attempt = 6;
function askMultipleQuestion(question, correctArray, attempt){
    var answeredCorrectly = false;

    attemptsLoop: while(attempt > 0 && answeredCorrectly === false){
        var answer = prompt(question);
        attempt--;

        loopCheck: for (var i = 0; i < correctArray.length; i++) {
            if (answer === correctArray[i]){
                alert('correct!');
                answeredCorrectly = true;
                userScore++
                break attemptsLoop;
            }
        }
        alert('incorrect, you have' + (attempts - 1 ) + 'attempts');
        // if (answeredCorrectly == false) alert('sorry try again');
    }
}

askMultipleQuestion(
    'can you guess the top 5 german car brands?', 
    ['volkswagen', 'audi', 'porche','mercedes','bugatti'],
    6
);

alert('thanks for playing ' + name + 'your total score is ' + userScore + 'good job!');
