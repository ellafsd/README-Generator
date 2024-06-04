const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: "Please enter your GitHub username:",
        default: "GitHubUser"
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter your email address:",
    },
    {
        type: 'input',
        name: 'title',
        message: "Please enter your project's title:",
    },
    {
        type: 'input',
        name: 'tests',
        message: "What command should be used to run tests?",
        default: "npm test"
    },
    {
        type: 'list',
        name: 'license',
        message: "Please choose a license for your project:",
        choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
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

// this function initializes the app
function init() {}
inquirer.prompt(questions).then((answers) => {
    console.log("Generating the README file");
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
});
  
init();
