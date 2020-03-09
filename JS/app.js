'use strict'

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

//yes no
askQuestion('am i from washington?', 'yes');
askQuestion('am i a Minor?', 'yes');
askQuestion('am i an athlete?', 'yes');
askQuestion('am i in school?','yes');
askQuestion('am i a gamer?', 'yes');
//number
// askQuestion6('what day was i born?', 6);


//multiple for question 7
// var rightAnwer = ['volkswagen', 'audi', 'porche', 'mercedes', 'bugatti']
var attempt = 6;
function askMultipleQuestion(question, correctArray, attempt){
    var answeredCorrectly = false;
    attemptsLoop: while(attempt > 0 && answeredCorrectly === false){
        var answer = prompt(question);
        attempt--;

        for (var i = 0; i < correctArray.length; i++) {
            if (answer === correctArray[i]){
                alert('correct!');
                answeredCorrectly = true;
                userScore++
                break attemptsLoop;
            }
        }

        if (answeredCorrectly == false) alert('sorry try again');
    }
}

askMultipleQuestion(
    'can you guess the top 5 german car brands?', 
    ['volkswagen', 'audi', 'porche','mercedes','bugatti'],
    6
);


//function for number question 6
var attempt = 4;
function askNumberQuestion(question, correctNumber, attempt){
    var answeredCorrectly = false;
    loopattempt: while(attempt > 0 && answeredCorrectly === false){
        var answer = prompt(question);
        attempt--;
        for (var i = 0; i != 6, i++;) {
            if (Number(answer) === correctNumber){
                alert('correct');
                answeredCorrectly = true;
                userScore++;
                break loopattempt;
            }
        }
        
        if (answeredCorrectly === false) alert('sorry try again.');
    }
}

askNumberQuestion('what day was i born?', 6, 4);

alert('thanks for playing ' + name + 'your total score is ' + userScore + ' good job!');

