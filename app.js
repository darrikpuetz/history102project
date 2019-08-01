var ageNow = prompt('How old are you?');
var greeting;

if (ageNow > 50) {
    greeting = 'Still Learning' document.write ('<p>' + greeting + '</p>');;
} else if (ageNow > 18) {
    greeting = 'Getting educated';
} else if (ageNow > 0) {
    greeting = 'Tiny learner';
} else {
    greeting = 'well then'
}

alert(greeting + ' Age is only a number...and sight');

document.write('<p>' + greeting + '</p>');