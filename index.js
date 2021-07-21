// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
      {
          type: "input",
          name: "title",
          message: "What is the title of your project? (Required)",
          validate: titleInput => {
              if (titleInput) {
                  return true;
              } else {
                  console.log("Please give your project a title!");
                  return false;
              }
          }
      }, 
      {
        type: "input",
        name: "description",
        message: "Provide a brief description of your project here. (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log("Please give your project a description!");
                return false;
            }
        }
    }, {
        type: "input",
        name: "installation",
        message: "Provide a list of instructions for downloading and installing your project onto other devices. (Required)",
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Please provide installation instructions for your project.");
                return false;
            }
        }
    }, {
        type: "input",
        name: "usage",
        message: "Provide examples or scenarios for use of your project. (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please provide examples for your projects usage.");
                return false;
            }
        }
    }, 
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project (Required)',
        choices: ['Apache', 'MIT', 'Mozilla-Public', 'GNU-General-Public', 'IBM', 'None'],
        validate: licenseInput => {
            if (licenseInput) {
                return true;
            } else {
                console.log("Please pick a license for this project");
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "contribution",
        message: "List all contributors for this project if there were any, or N/A if there weren't any. (Required)",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please provide a list of contributors or 'N/A' if there weren't any.");
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "tests",
        message: "Provide testing instructions for your project here. (Required)",
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Please provide testing instructions for your project.");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "username",
        message: "Please enter your github username. (Required)",
        validate: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Please provide your github username.");
                return false;
            }
        }
    }, 
    {
        type: "input",
        name: "email",
        message: "Please provide your email address that you will check if anybody wishes to email you questions about your project. (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please provide an email address.");
                return false;
            }
        }
    },  
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README was written successfully");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (userInput){
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput))
    });
};

// Function call to initialize app
init();
