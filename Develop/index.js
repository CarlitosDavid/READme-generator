// TODO: Include packages needed for this application
const inquier = require('inquirer');
const fs = require('fs');
const util = require('util');

const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is you GitHub Username?"
        name: 'username',
        default: 'connietran-dev',
        validate: function (answer) {
            if (answer.lenght < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true; 
        }
    },
    {
        type: 'input',
        message: "What is the name of the GitHub repo?",
        name: 'repo', 
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.lenght < 1) {
                return console.log ("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.", 
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Install section.",
        name: 'installation',
    },
    {
        type: 'input',
        message: "if applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "if applicable, provdie any test written for your application and provide example on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.", 
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}

const writeFileAsync = util.promisify(writeToFile); 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
