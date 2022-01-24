// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your github user name?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions."
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide usage info"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide the contributing parties."
    },
    {
        type: "input",
        name: "test",
        message: "Please provide instructions for testing."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose a license",
        choices: [
            "MIT License",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "Mozilla Public License 2.0",
        ]
    }
    ])
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFileSync('./markdownexample/README.md', generateMarkdown(data))
};


// TODO: Create a function to initialize app
const init = () => {
    questions()
        .then((data) => writeToFile(data))
        //.then(() => console.log('success'))
        .catch((err) => console.error(err));
};

// Function call to initialize app
init();
