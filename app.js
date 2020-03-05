'use strict'

var userscore = 0


var state = prompt('Am I from Washington?');
// console.log(state)
state = state.toUpperCase()
// console.log(state)
    if (state == 'YES'){
        alert('you are correct!');
        userscore++;
    } else if (state == 'NO')
    {
        alert('you are incorrect');
    }


var age = prompt('Am I a minor?');
// console.log(age)
age = age.toUpperCase()
// console.log(age)
    if (age == 'YES'){
        alert('you are correct!');
        userscore++;
    } else if (age == 'NO')  
    {
        alert('you are incorrect');
    }

var sports = prompt('Am I an athlete?');
// console.log(sports)
sports = sports.toUpperCase()
// console.log(sports)
    if (sports == 'YES'){
        alert('you are correct!');
        userscore++;
    } else if (sports == 'NO')
    {
        alert('you are incorrect');
    }

var school = prompt('Am I in school?');
// console.log(school)
school = school.toUpperCase()
// console.log(school)
    if (school == 'YES'){
        alert('you are correct!');
        userscore++;
    } else if (school == 'NO')
    {
        alert('you are incorrect');
    }

var game = prompt('Am I a gamer?');
// console.log(game)
game = game.toUpperCase()    
// console.log(game)
    if (game == 'YES'){
        alert('you are correct!');
        userscore++;
    } else if (game == 'NO')
    {
        alert('you are incorrect');
    }

var  birthday = prompt('What day was i born?');
var numberBirthday = Number(birthday);
// console.log(numberBirthday)
var correctDay = 6;
var guess = 1;


for (guess; guess < 4; guess++) {
    console.log(guess);
    numberBirthday = Number(birthday)
    if (numberBirthday === correctDay){ 
    alert('You are correct');
    userscore++;
    break;
    } else if (numberBirthday < 6) {
        birthday = prompt('too low guess again');
    } else if (numberBirthday > 6) {
        prompt('too high guess again');
    }

}
    
var cars = prompt('can you guess the top 5 german car brands?');
var rightAnswer = ['Volkswagen', 'Audi', 'Porsche', 'Mercedes', 'Bugatti'];
var attempts = 6; 

loop1:for (attempts = 0; attempts < 6; attempts++) {

    var cars = prompt('can you guess the top 5 german car brands?');

    loop2:for (var answerIndex = 0; answerIndex < rightAnswer.length; answerIndex++){
        cars = cars.toLowerCase();
        if (cars === rightAnswer[answerIndex]) {
            console.log(cars)
            alert('Thats right!');
            userscore++;
            break;
        } 
        if (attempts < 6) alert("Wrong, that is not a top german car")
}
}
