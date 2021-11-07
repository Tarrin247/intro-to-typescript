"use strict";
console.log("Name: " + "tarrin jenkins".toUpperCase());
console.log("Career: Hunter");
console.log("Description: I enjoy pvping in Tarren Mill");
console.log("");
console.log("My Interests:");
console.log("* Shooting elves");
console.log("* Shooting dawrves");
console.log("* Hanging out in the Under City");
console.log("* Making fun of bloodelves");
console.log("");
console.log("My Previous Experience:");
displayPosition("The Undead Horde", "Hunter", "Killing Alliance");
displayPosition("Under City, Inc.", "Marksman - PVP", "Making Aliiance vanish");
console.log("");
console.log("My Skills:");
displaySkill("Killing Alliance in pvp", true);
displaySkill("Picking off the enemy, Raising cain in Alliance towns, Minding my own business", false);
function displayPosition(companyName, jobTitle, description) {
    console.log(jobTitle + " at " + companyName + " - " + description);
}
function displaySkill(skillName, isCool) {
    if (isCool == true) {
        console.log("BAM: " + skillName);
    }
    else {
        console.log(skillName);
    }
}
