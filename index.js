const fs = require("fs");
//const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What does the user need to know about how to install this?',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using this repo?',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What license does your project have?',
        choices: ['MIT', 'Apache', 'BSD', 'GPL'],
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to this project?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be used to run tests?',
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address',
      },
];

// function to write README file
function writeToFile(answers) { //writeToFile(fileName, answers)

    fs.writeFile('./output/README.md', generateMarkdown(answers), (err) => 
    err ? console.error(err) : console.log("Success! You're README has been created in the output folder."))
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then((answers) =>{ 
            console.log(answers)
            //what to do with the answers collated from the user?
            writeToFile(answers)
        });
}

// function call to initialize program when you type node index.js into terminal
init();
