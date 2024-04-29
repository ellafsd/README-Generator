
const inquirer = require('inquirer');
const fs = require('fs');

// Create a function that returns a license badge based on which license is passed in.
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = {
      'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      'Apache License 2.0': '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      'None': ''
  };
  if (badges[license]) {
    return badges[license];
  } else {
    return '';
  }
}


// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  } else {
    return `This project is licensed under the ${license}. ${renderLicenseLink(license)}`;
    }
}


// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  \`\`\`
  ${data.installation}
  \`\`\`
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  To run tests, use the following command:
  \`\`\`
  ${data.tests}
  \`\`\` 
  `;}

module.exports = generateMarkdown;
