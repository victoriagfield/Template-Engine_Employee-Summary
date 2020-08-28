const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const allEmployee = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function promptUser() {
  return inquirer.prompt([{
    type: "input",
    name: "name",
    message: "What is your name?"
  }, {
    type: "input",
    name: "id",
    Message: "What is your ID number?"
  }, {
    type: "input",
    name: "email",
    message: "What is your e-mail?"
  }, {
    type: "list",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"]
  }]).then(userInput => {
    switch (userInput.role) {
      case "Manager":
        addManager();
        break;

      case "Engineer":
        addEngineer();
        break;

      case "Intern":
        addIntern();
        break;
    }
  })

  function addManager() {
    inquirer.prompt([{

      type: "input",
      name: "number",
      message: "What is your office number?"
    }])
  }

  function addIntern() {
    inquirer.prompt([{

      type: "input",
      name: "school",
      message: "What school do you attend?"
    }])
  }

  function addEngineer() {
    inquirer.prompt([{

      type: "input",
      name: "github",
      message: "What is your github username?"
    }])
  }
}

promptUser();

// // function to write html
// function writeToFile(fileName, data) {
//   console.log(fileName, data);

//   fs.writeFile(fileName, data, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });
//  }

// // function to initialize program and html
//  function init() {
//     promptUser().then((answers) => {
//     writeToFile("teamList.html", render(answers));
//   });
    
// }

// // function call to initialize program
// init();



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```