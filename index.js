// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// Function to start the file generator
//const generateFile = ({ title, github, description, license, install }) => `
const generateFile = (data) => {

    const renderLicenseBadge = (license) => {
        if (license === "MIT") {
            return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        }
        if (license === "Apache 2.0") {
            return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        }
        if (license === "GPL 3.0") {
            return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
        }
        if (license === "BSD 3") {
            return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        }
    }
return `
# Project Title: ${data.title} 


# Table of Content section 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Test](#test)
* [License](#license)
* [Questions](#questions)


---

GitHub profile: 

* Github Username: <a href="${data.github}">${data.github}</a>


## Description of Project: 

${data.description}

---

# Usage
 - Instructions for use of this application:


# Contributing
- How to contribute to this application:


# Test
- Instructions for testing this application:


## License 

License provided by:  

${renderLicenseBadge(data.license)}

--- 


# Installation
## To Run this Application 

Use the command <em>${data.install}</em> to start installation of dependencies here. 


`};

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
    {
        type: "confirm",
        name: "confirm",
        message: "Would you like a Table of Contents section?",
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateFile(data), (err) =>
      err ? console.log(err) : console.log('README file is created!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            // will this work?
            /* const newFile = generateFile(questions)
            fs.writeFile('README-new.md', newFile); */
            writeToFile('./samples/README-new.md', response);
            console.log('README file is being created now!');
        })
}

// Function call to initialize app
init(writeToFile);
