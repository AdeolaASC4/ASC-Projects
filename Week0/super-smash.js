var prompt = require('prompt-sync')();

var mashArray = ["Europe", "Asia","Africa", "Australia"];
var firstQuestion = [8,4,6];
var secondQuestion = ["Kirby", "Mario", "Sonic"];

function fight(){
var character = prompt("Who will you choose to fight?" );
    console.log("You chose " + character);
}

function attack(){
    var ammount = prompt(" How many times will you attack? ");
    console.log("You attacked for " + ammount + " damage");
}
fight();
attack(); 
