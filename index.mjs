import inquirer from 'inquirer';
import fs from "fs/promises";


let { projectTitle, description, installation, usage, license, builtWith, tests, githubUser, githubLink, contact, contribution } = await inquirer
  .prompt([

    {
      type: 'input',
      name: 'projectTitle',
      message: "Please enter the name of your project: ",
    },
    {
      type: 'input',
      name: 'description',
      message: "Please enter a brief description of your project: ",
    },
   
    {
      type: 'input',
      name: 'installation',
      message: "Enter your installation details:  ",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Enter your usage information:  ",
    },
    {
      type: 'input',
      name: 'contribution',
      message: "Enter your contribution guidelines:  ",
    },
    {
      type: 'checkbox',
      message: 'What is your project built with?',
      choices: ['HTML', 'CSS', 'JavaScript'],
      name: 'builtWith',
    },
    {
      type: 'input',
      name: 'tests',
      message: "Enter your test instructions:  ",
    },
    {
      type: 'input',
      name: 'githubUser',
      message: "Enter your gitHub username:  ",
    },
    {
      type: 'input',
      name: 'githubLink',
      message: "Enter your gitHub url link:  ",
    },
    {
      type: 'input',
      name: 'contact',
      message: "Enter your email address as alternative contact info:  ",
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license do you want?',
      choices: ['MIT', 'Apache', 'GNU GPL v3'],
    },
    

  ])
let readmeText =

  
  `# ${projectTitle} ${generateLicense(license)}
 
## Table of Contents
${description ? `- [Description](#description)` : ``}
  ${installation ? `- [Installation Guide](#installation-guide)` : ``}
  ${usage ? `- [Usage](#usage)`: ``}
${contribution ? `- [Contribution Guidelines](#contribution-guidelines)` : ``}
  ${builtWith ? `- [Built With](#built-with)` : ``}
  ${tests ? `- [Test Instructions](#test-instructions)` : ``}
${githubUser ? `- [Author](#author)` : ``}
${contact ? `- [Contact](#contact)` : ``}




${description ? `## Description
${description}` : ``}

${installation ? `### Installation Guide
${installation}` : ``}

${usage ? `### Usage
${usage}` : ``}

${contribution ? `## Contribution Guidelines
${contribution}` : ``}


${builtWith ? `### Built With
${builtWith}` : ``}


${tests ? `### Test Instructions
${tests}` : ``}

## Author
- GitHub - [${githubUser}](${githubLink})
${contact ? `- Contact - ${contact}` : ``}

### License
${generateLicense(license)}

`





function generateLicense(license) {
  let badge;
  switch (license) {
    case "MIT":
      badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;
    case "GNU GPL v3":
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;
    case "Apache":
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }
return badge;

}

// function tableOfContents(included){
// return (included ?  : ``)
// return 
// }




fs.writeFile("README.md", readmeText);


// * License 
// * Contributing 
// * Tests 
// * Questions
// GitHub username, with a link to their GitHub profile
 //   email address with instructions on how to reach them with additional questions




