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
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter your employee ID:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'Please enter your office number:'
        }
    ]) .then((answers) => {
        console.log(answers)

        var manager = new Manager(answers.name, answers.id, answers.email, answers.office);

        // push the manager variable into employees array

        // call the getMenu() function
    })
}

function getEngineer()

function getIntern()

function buildTeam()

