const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const employees = []

const inquirer = require('inquirer')

// TODO: write a function that asks questions pertaining to the manager
function getManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email:"
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter manager's office number:"
        }
    ]) .then((answers) => {
        console.log(answers)

        var manager = new Manager(answers.name, answers.id, answers.email, answers.office);

        //push manager into employees array

        // call the getMenu() function
    })
}

function getEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's github username"
        }
    ]) .then((answers) => {
        console.log(answers)

        var engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
    })
}

function getIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name:"
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter intern's employee ID:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email:"
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's school:"
        },
    ]) .then((answers) => {
        console.log(answers)

        var intern = new Intern(answers.name, answers.id, answers.email, answers.school);
    }
)}

function buildTeam() {

}

