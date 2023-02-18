import inquirer from 'inquirer';
import fs from "fs/promises";


let {projectTitle, } = await inquirer
.prompt([

    {
      type: 'input',
      name: 'projectTitle',
      message: "What's the name of your project?",
    },

])





// * The title of my project 
// * Table of Contents 

// * Sections entitled:
// * Description 

// * Installation 
// * Usage 
// * License 
// * Contributing 
// * Tests 
// * Questions




