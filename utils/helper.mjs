export const helper = {
  makeList(array){
    let list = ""
    for(const element of array){
      list += `- ${element}\n`
    }
    return list
  },
  makeLicense(license){
    switch (license) {
      case "MIT":
        return `<a href= "https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-yellow.svg"/></a>`
      case "GNU GPL v3":
        return`<a href= "https://www.gnu.org/licenses/gpl-3.0">
        <img src= "https://img.shields.io/badge/License-GPLv3-blue.svg"/></a>`
      case "Apache":
        return `<a href= "https://opensource.org/licenses/Apache-2.0">
        <img src= "https://img.shields.io/badge/License-Apache_2.0-blue.svg"/></a>`
    }
  },
  questions: [
    {
      type: 'input',
      name: 'projectTitle',
      message: "Enter the name of your project: ",
    },
    {
      type: 'input',
      name: 'description',
      message: "Enter a brief description of your project: (leave blank to skip) ",
    },
   
    {
      type: 'input',
      name: 'installation',
      message: "Enter your installation details: (leave blank to skip)  ",
    },
    {
      type: 'input',
      name: 'usage',
      message: "Enter your usage information: (leave blank to skip)  ",
    },
    {
      type: 'input',
      name: 'contribution',
      message: "Enter your contribution guidelines: (leave blank to skip) ",
    },
    {
      type: 'checkbox',
      message: 'What is your project built with?',
      choices: ['HTML5', 'CSS', 'React', 'Angular', 'JQuery', 'Next.js', 'JavaScript', 'Swift', 'Python', 'Ruby', 'Java'],
      name: 'builtWith',
    },
    {
      type: 'input',
      name: 'tests',
      message: "Enter your test instructions: (leave blank to skip) ",
    },
    {
      type: 'input',
      name: 'githubUser',
      message: "Enter your gitHub username:  ",
    },
    {
      type: 'input',
      name: 'contact',
      message: "Enter your email address as an alternative contact: (leave blank to skip) ",
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license do you want?',
      choices: ['MIT', 'Apache', 'GNU GPL v3'],
    }
  ]
}