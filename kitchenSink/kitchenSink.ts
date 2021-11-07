// variable definition of my name
let myName = "Tarrin";
console.log('My name is ' + myName + '.');

// Const naming # of states in the US
const numberOfStates = "50";
console.log('The number of US states is ' + numberOfStates + '.');

//Result of adding 5 + 4 two ways 
let w = 5;
w += 4;
console.log(w);

let result = 5 + 4;
console.log(result);

function sayHello() {
    alert("Hello World!");
}

sayHello();

function checkAge(name: any, age: any) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!")
    }
}

checkAge("Bo", 21);
checkAge("Lilly", 29);
checkAge("Grace", 45);
checkAge("Marley", 18);
checkAge("Macey", 17);

let myFavoriteVeggies = ["zuchini", "squash", "potatoes", "okra", "celery"];

for (let i = 0; i < myFavoriteVeggies.length; i++) {
    console.log(myFavoriteVeggies[i])
}

let pet = {
    name: "Dee-Dee",
    breed: "American Bull Dog"
};

console.log(pet.name, pet.breed);

let people = [
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

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}

function getLength(word: any) {
    return word.length
}

let stringLength = getLength("Roll Tide!");

if (stringLength % 2 == 0) {
    console.log('The world is nice and even!') 
} else {
    console.log('The world is an odd place!')
}