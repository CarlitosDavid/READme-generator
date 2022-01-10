const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input", 
        message: "what is the project about?",
        name: "Description"
    },
    {
        type: "input",
        message: "What does the user need to install this app?",
        name: "Installation"
    },
    {
        type: "input",
        message: "What liscence is being used?",
        name: "License"
    },
    {
        type: "input", 
        message: "What commands are used to run this app?",
        name: "commands"
    },
    {
        type: "input",
        message: "what is your Github username?",
        name: "Username"
    },
    {
        type: "input",
        message: "what is your email address?"
        name: "Email"
    },
]

function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

function init() {
    inquirer.prompt(questions)
    .then(funciton(data) {
        writeFile("README.md", generatorMarkdown(data));
        console.log(data)
    })
}

init();