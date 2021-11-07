"use strict";
// variable definition of my name
var myName = "Tarrin";
console.log('My name is ' + myName + '.');
// Const naming # of states in the US
var numberOfStates = "50";
console.log('The number of US states is ' + numberOfStates + '.');
//Result of adding 5 + 4 two ways 
var w = 5;
w += 4;
console.log(w);
var result = 5 + 4;
console.log(result);
function sayHello() {
    alert("Hello World!");
}
sayHello();
function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}
checkAge("Bo", 21);
checkAge("Lilly", 29);
checkAge("Grace", 45);
checkAge("Marley", 18);
checkAge("Macey", 17);
var myFavoriteVeggies = ["zuchini", "squash", "potatoes", "okra", "celery"];
for (var i = 0; i < myFavoriteVeggies.length; i++) {
    console.log(myFavoriteVeggies[i]);
}
var pet = {
    name: "Dee-Dee",
    breed: "American Bull Dog"
};
console.log(pet.name, pet.breed);
var people = [
    {
        name: "Allen",
        age: 49
    },
    {
        name: "Stacy",
        age: 42
    },
    {
        name: "Tarrin",
        age: 40
    },
    {
        name: "Brian",
        age: 37
    },
    {
        name: "Stephanie",
        age: 29
    },
];
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
function getLength(word) {
    return word.length;
}
var stringLength = getLength("Roll Tide!");
if (stringLength % 2 == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
