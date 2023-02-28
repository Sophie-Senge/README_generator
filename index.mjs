import inquirer from 'inquirer';
import fs from "fs/promises";
import { helper } from './utils/helper.mjs';
let { projectTitle, description, installation, usage, license, builtWith, tests, githubUser, contact, contribution } = await inquirer.prompt(helper.questions)

let readmeText =`<h1 align="center">${projectTitle}</h1> 
  
<p align="center">${helper.makeLicense(license)}</p>

## Table of Contents
#
${description ? `- [Description](#description)` : ``}
${installation ? `- [Installation Guide](#installation-guide)` : ``}
  ${usage ? `- [Usage](#usage)`: ``}
  ${tests ? `- [Test Instructions](#test-instructions)` : ``}
  ${contribution ? `- [Contribution Guidelines](#contribution-guidelines)` : ``}
${builtWith ? `- [Built With](#built-with)` : ``}
${githubUser ? `- [Author](#author)` : ``}
${contact ? `- [Contact](#contact)` : ``}


${description ? `## Description
 #
${'```'}
${description}
${'```'}` : ``}
 
${installation ? `## Installation Guide
#
*Steps required to install my project:*\n
${installation}` : ``}

${usage ? `### Usage
*Instructions and examples for use:*\n
${usage}` : ``}

${tests ? `### Test Instructions
*Tests for application and how to run it:*\n
${tests}` : ``}

${contribution ? `## Contribution Guidelines
#
*If you would like to contribute, you can follow these guidelines:*\n
${contribution}` : ``}

${builtWith ? `## Built With
#
${helper.makeList(builtWith)}` : ``}

## Author
#
- GitHub - [${githubUser}](https://github.com/${githubUser})
${contact ? `- Contact me with any questions! - ${contact}` : ``}

### License
#
${helper.makeLicense(license)}
`
fs.writeFile("READMEnew.md", readmeText);
