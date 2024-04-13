#! usr/bin/env node
import inquirer from "inquirer";
console.log("Please check any one of the options from the list");
let marks = 0;
let Answer1 = await inquirer.prompt([{
        name: "A1",
        type: "checkbox",
        message: "What is Typescript?",
        choices: ["A subset of Javascript", "A superset of Javascript", "A competitor to Javascript ", "Areplacement for Javascript"]
    }]);
if (Answer1.A1 == "A superset of Javascript") {
    console.log("Correct Answer");
    marks += 5;
}
else {
    console.log("Wrong Answer");
}
let Answer2 = await inquirer.prompt([{
        name: "A2",
        type: "checkbox",
        message: "What advantage does Typescript offer over Javascript in terms of typing?",
        choices: ["Predefined Typing", "Dynamic Typing", "Weak Typing", "No Type Checking"]
    }]);
if (Answer2.A2 == "Predefined Typing") {
    console.log("Correct Answer");
    marks += 5;
}
else {
    console.log("Wrong Answer");
}
let Answer3 = await inquirer.prompt([{
        name: "A3",
        type: "checkbox",
        message: "Why do we use Typescript?",
        choices: ["To increase code complexity", "To catch error early", "To decrease code organization", "All of above"]
    }]);
if (Answer3.A3 == "To catch error early") {
    console.log("Correct Answer");
    marks += 5;
}
else {
    console.log("Wrong Answer");
}
let Answer4 = await inquirer.prompt([{
        name: "A4",
        type: "checkbox",
        message: "What is the purpose of installing Node.js for Typescript developement? ",
        choices: ["To run Typescript files", "To transpile Typescript code to Javascript", "To debug Typescript code", "To format Typescript code"]
    }]);
if (Answer4.A4 == "To transpile Typescript code to Javascript") {
    console.log("Correct Answer");
    marks += 5;
}
else {
    console.log("Wrong Answer");
}
let Answer5 = await inquirer.prompt([{
        name: "A5",
        type: "checkbox",
        message: "How can Typescript be installed globally?",
        choices: ["npm install typescript", "npm install -g typescript", "npm i typescript", "All of Above"]
    }]);
if (Answer5.A5 == "npm install -g typescript") {
    console.log("Correct Answer");
    marks += 5;
}
else {
    console.log("Wrong Answer");
}
console.log("Your total score is: " + marks + " points");
