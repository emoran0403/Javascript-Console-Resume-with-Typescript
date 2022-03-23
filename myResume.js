"use strict";
let myMe = {
    myName: `Eric Moran`,
    myCareer: `Math Teacher, Tutor`,
    myDescription: `I love learning`,
};
let myInterests = ["Math", "Video Games", "Movies", "Cooking"];
let myJobs = [
    "Cashier - Rite Aid: Worked the cash register",
    "Delivery Driver - Domino's: Delivered delicious pizza",
    "Math Tutor - IRSC: Helped college students study math ",
    "Math Teacher - FL Public School: Teaching math to 6th grade students",
];
let myS1 = {
    skill: "Math Background",
    coolness: true,
};
let myS2 = {
    skill: "Baking",
    coolness: false,
};
let myS3 = {
    skill: "Cooking",
    coolness: false,
};
let myS4 = {
    skill: "Halo",
    coolness: true,
};
let myS5 = {
    skill: "Minecraft",
    coolness: false,
};
let mySkills = [myS1, myS2, myS3, myS4, myS5];
console.log("Name: " + myMe.myName.toUpperCase());
console.log("Career: " + myMe.myCareer);
console.log("Description: " + myMe.myDescription);
console.log(`-----------------------------------------`);
console.log("My Interests:");
for (let i = 0; i < myInterests.length; i++) {
    console.log(myDisplayPosition(myInterests[i]));
}
console.log(`-----------------------------------------`);
console.log("My Previous Experience:");
for (let i = 0; i < myJobs.length; i++) {
    console.log(myDisplayPosition(myJobs[i]));
}
console.log(`-----------------------------------------`);
console.log("My Skills:");
for (let i = 0; i < mySkills.length; i++) {
    console.log(myDisplayPosition(myDisplaySkill(mySkills[i])));
}
console.log(`-----------------------------------------`);
function myDisplayPosition(string) {
    let myUse = `* ${string}`;
    return myUse;
}
function myDisplaySkill(ability) {
    if (ability.coolness) {
        let use = `BAM: ${ability.skill}`;
        return use;
    }
    return ability.skill;
}
