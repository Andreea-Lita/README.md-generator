const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
        type: 'input',
        name: 'github',
        message: 'This is a README generator in GitHub! Enter your GitHub username:',
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
        choices: ['MIT', 'Apache-2.0', 'BSD-2-Clause',
            'GPL-3.0', 'MPL 2-0', 'BSL-1.0', 'LGPL-2.1'
        ],
        when: ({ confirmLicenses }) => {
            if (confirmLicenses) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'name',
        message: ' Additionally, please provide your name/nickname or other contributor (specifying it was contributor in brackets) :'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function(error) {
        if (error) {
            return console.log(error);
        }
        console.log('README.md file created! Success!');
    });
}

// function to initialize program
function init() {
    return inquirer.prompt(questions).then(function(data) {
        var fileNameKind = 'README.md';
        writeToFile(fileNameKind, data)
    });
}

// function call to initialize program
init();