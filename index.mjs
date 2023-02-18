import inquirer from 'inquirer';
import fs from "fs/promises";


let { projectTitle, description, installation, usage, license, builtWith, tests, questions, contribution } = await inquirer
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
      type: 'list',
      name: 'license',
      message: 'Which license do you want?',
      choices: ['MIT', 'Apache', 'GNU GPL v3'],
    }

  ])
let readmeText =

  
  `# ${projectTitle}

${generateLicense(license)}

 
## Table of Contents


## Description
${description}


### Installation
${installation}

 
### Usage
${usage}

## Contribution Guidlines
${contribution}

### Built With
${builtWith}

### Test Instructions

## Author
// * github link, username, email address with questions directed to them

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
  // if (license === "gnu v3"){
  //   return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  // }
  // else if (license === "mit"){
  //   return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  // }
  // else if (license === "apache"){
  //   return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  // }

}




fs.writeFile("README.md", readmeText);


// * License 
// * Contributing 
// * Tests 
// * Questions
// GitHub username, with a link to their GitHub profile
 //   email address with instructions on how to reach them with additional questions




