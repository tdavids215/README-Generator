// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// an array of questions for user input
const questions = [
    
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps to install your project?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide some instructions and examples for use.',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Contributing: List any collaborators, third-party assests or tutorials.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests did you include and how would someone run them?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to include?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'no license'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
        }


        
        
        // ['Badges']
        // ['Features']
        // ['How to Contribute']
    ];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('You have successfully created a README file'))



}

// initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdownFile = generateMarkdown(answers);
        writeToFile('README.md', markdownFile);
    });
}

// Function call to initialize app
init();
