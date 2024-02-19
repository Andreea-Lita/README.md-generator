const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// const questions = [{
//         type: 'input',
//         name: 'name',
//         message: 'What is your name?',
//     },
//     {
//         type: 'input',
//         name: 'location',
//         message: 'Where are you from?',
//     }, {
//         type: 'input',
//         name: 'hobby',
//         message: 'What is your favorite hobby?',
//     }, {
//         type: 'input',
//         name: 'food',
//         message: 'What is your favorite food?',
//     }, {
//         type: 'input',
//         name: 'github',
//         message: 'Enter your GitHub Username',
//     }, {
//         type: 'input',
//         name: 'linkedin',
//         message: 'Enter your LinkedIn URL.',
//     },

// ];
const questions = [{
        type: 'input',
        name: 'name',
        message: 'This is a README generator in GitHub! To start, please provide your name:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',

    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: "Enter your project description here:",
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the instructions for installation?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Instructions for usage:',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can others contribute to this project?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the tests written for your application and how to use them:',
    },
    {
        type: 'confirm',
        name: 'confirmLicenses',
        message: 'Would you like to include a license?',
        default: false
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What license would you like to include?',
        choices: ['MIT', 'Apache',
            'GPL', 'MPL', 'BSD', 'OBSD', 'CC', 'ECL-2.0'
        ],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
];
// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
    return inquirer.prompt(questions);
}

// function call to initialize program
init();