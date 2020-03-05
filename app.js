'use strict'


var state = prompt('Am I from Washington?')
// console.log(state)
state = state.toUpperCase()
// console.log(state)
    if (state == 'YES'){
        alert('you are correct!')
    } else if (state == 'NO')
    {
        alert('you are incorrect')
    }


var age = prompt('Am I a minor?')
// console.log(age)
age = age.toUpperCase()
// console.log(age)
    if (age == 'YES'){
        alert('you are correct!')
    } else if (age == 'NO')
    {
        alert('you are incorrect')
    }

var sports = prompt('Am I an athlete?')
// console.log(sports)
sports = sports.toUpperCase()
// console.log(sports)
    if (sports == 'YES'){
        alert('you are correct!')
    } else if (sports == 'NO')
    {
        alert('you are incorrect')
    }

var school = prompt('Am I in school?')
// console.log(school)
school = school.toUpperCase()
// console.log(school)
    if (school == 'YES'){
        alert('you are correct!')
    } else if (school == 'NO')
    {
        alert('you are incorrect')
    }

var game = prompt('Am I a gamer?')
// console.log(game)
game = game.toUpperCase()    
// console.log(game)
    if (game == 'YES'){
        alert('you are correct!')
    } else if (game == 'NO')
    {
        alert('you are incorrect')
    }

var  birthday = prompt('What year was i born?');
var numberBirthday = Number(birthday);
var correctDay = 1999;
    console.log(birthday)
        if (numberBirthday< correctDay){
            console.log('Your guess was to low');
        } else if (numberBirthday > correctDay) {
            console.log('Your guess was too high');
        } else if (numberBirthday === correctDay) {
            console.log("you are correct");
        } else {
            console.log('Invalid Input')
        }

        
