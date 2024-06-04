
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `[License](#license)`;
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
  return `## License

This project is licensed under the ${license} license.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of Contents

- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

${renderLicenseSection(data.license)}

## Tests

${data.tests}

## Questions

If you have any questions, please reach out to [${data.github}](https://github.com/${data.github}) or contact me at [${data.email}](mailto:${data.email}).
`;
}

module.exports = generateMarkdown;