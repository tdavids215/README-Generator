// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = rquire('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        
            // something about things being case sensitive when you type them in? this might not be a prompt?
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
            message: 'Credits: List any collaborators, third-part assests or tutorials.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license would you like to include?',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        },
        
       
        ['Usage']
        ['Credits']
        ['Which license would you like to include (if none, leave blank).']
        ['Badges']
        ['Features']
        ['How to Contribute']
        ['Tests']
        // github
        // email
        // add these to the section entitle Questions with instructions on how to reach me with additional questions
    ])

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
