'use strict'

var name = prompt('what is your name?');
alert('hello, ' + name + ' whats up.');
console.log(name);
var userScore = 0

// old question
// var state = prompt('Am I from Washington?');
// // console.log(state)
// state = state.toUpperCase()
// // console.log(state)
//     if (state == 'YES'){
//         alert('you are correct!');
//         userscore++;
//     } else if (state == 'NO')
//     {
//         alert('you are incorrect');
//     }

//griffins new question in function
// var question1 = ('Am i form Washinton?');
// var correct = ('yes')
// question1 = question1.toLocaleUpperCase;

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

alert('thanks for playing ' + name + 'your total score is ' + userScore + 'good job!');

// //ryan code
// var age = prompt('Am I a minor?');
// // console.log(age)
// age = age.toUpperCase()
// // console.log(age)
//     if (age == 'YES'){
//         alert('you are correct!');
//         userscore++;
//     } else if (age == 'NO')
//     {
//         alert('you are incorrect');
//     }

// var sports = prompt('Am I an athlete?');
// // console.log(sports)
// sports = sports.toUpperCase()
// // console.log(sports)
//     if (sports == 'YES'){
//         alert('you are correct!');
//         userscore++;
//     } else if (sports == 'NO')
//     {
//         alert('you are incorrect');
//     }

// var school = prompt('Am I in school?');
// // console.log(school)
// school = school.toUpperCase()
// // console.log(school)
//     if (school == 'YES'){
//         alert('you are correct!');
//         userscore++;
//     } else if (school == 'NO')
//     {
//         alert('you are incorrect');
//     } else {
//     }

// var game = prompt('Am I a gamer?');
// // console.log(game)
// game = game.toUpperCase()    
// // console.log(game)
//     if (game == 'YES'){
//         alert('you are correct!');
//         userscore++;
//     } else if (game == 'NO')
//     {
//         alert('you are incorrect');
//     }

// var  birthday = prompt('What day was i born?');
// var numberBirthday = Number(birthday);
// // console.log(numberBirthday)
// var correctDay = 6;
// var guess = 1;


// for (guess; guess < 4; guess++) {
//     console.log(guess);
//     numberBirthday = Number(birthday)
//     if (numberBirthday === correctDay){ 
//     alert('You are correct');
//     userscore++;
//     break;
//     } else if (numberBirthday < 6) {
//         birthday = prompt('too low guess again');
//     } else if (numberBirthday > 6) {
//         prompt('too high guess again');
//     }

// }
    
// var cars = prompt('can you guess the top 5 german car brands?');
// var rightAnswer = ['Volkswagen', 'Audi', 'Porsche', 'Mercedes', 'Bugatti'];
// var attempts = 6; 

// loop1:for (attempts = 0; attempts < 6; attempts++) {

//     var cars = prompt('can you guess the top 5 german car brands?');

//     loop2:for (var answerIndex = 0; answerIndex < rightAnswer.length; answerIndex++){
//         cars = cars.toLowerCase();
//         if (cars === rightAnswer[answerIndex]) {
//             console.log(cars)
//             alert('Thats right!');
//             userscore++;
//             break;
//         } 
//         if (attempts < 6) alert("Wrong, that is not a top german car")
// }
// }
