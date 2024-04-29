
// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "Enter your GitHub username:",
        default: "GitHubUser"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your email address:",
        default: "ellagirin@gmail.com"
    },
    {
        type: 'input',
        name: 'title',
        message: "Enter your project's title:",
        default: "My Awesome Project"
    },
    {
        type: 'input',
        name: 'description',
        message: "Write a short description of your project:",
        default: "A brief description of my project"
    },
    {
        type: 'list',
        name: 'license',
        message: "Choose a license for your project:",
        choices: ['MIT', 'APACHE 3.0', 'GPL v3.0', 'BSD 3-Clause', 'None'],
        default: 'MIT'
    },
    {
        type: 'input',
        name: 'installation',
        message: "What command should be run to install dependencies?",
        default: "npm install"
    },
    {
        type: 'input',
        name: 'tests',
        message: "What command should be used to run tests?",
        default: "npm test"
    },
    {
        type: 'input',
        name: 'usage',
        message: "What should users know about using the repository?",
        default: "Instructions on usage"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Who contributed to this project?",
        default: "Your collaborator's names"
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            return;
        }
        console.log("Successfully wrote to", fileName);
    });
}

// Create a function to initialize app
function init() {}
console.log("Welcome to the README Generator");
inquirer.prompt(questions).then((answers) => {
    console.log("Generating your README...");
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
});


// Function call to initialize app
  init();
