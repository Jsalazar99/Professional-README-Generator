// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Function to start the file generator
const generateFile = ({ title, github, description, license, install }) => ``;

// Array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "description",
        message: "Please type a short description of your project?",
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: [
            "MIT",
            "Apache 2.0",
            "GPL 3.0",
            "BSD 3"]
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateFile, (err) =>
      err ? console.log(err) : console.log('README file is created!')
    );

 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            console.log(response);
        })
}

// Function call to initialize app
init();
