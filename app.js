const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = ('./src/page-template')
const employees = []

const inquirer = require('inquirer');
const { writeFile } = require('./utils/generatePage');

// TODO: write a function that asks questions pertaining to the manager
const getManager = () => {
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
        employees.push(manager);

        // call the getMenu() function (maybe instead as a promise at the end??)
        // .then(getMenu())
    }) .then(getMenu)
}

const getMenu = () => {
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmAdd',
            message: 'Would you like to add another team member?',
            default: true
        },
        {
            type: 'list',
            name: 'selectMember',
            message: 'please select what type of team member you would like to add:',
            choices: ['engineer', 'intern'],
            when: ({ selectMember }) => {
                //problem lies in here, automatically runs getIntern() meaning selectMember = engineer is not working the way I want it to
                if ('selectMember' === 'engineer') {
                    return getEngineer()
                } else {
                    return getIntern()
                }
            }
        }
    ])
}

const getEngineer = () => {
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

        employees.push(engineer)
    })
}

const getIntern = () => {
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
        employees.push(intern)
    }
)}

getManager()


// getManager()
//     .then(teamData => {
//         return (generatePage(teamData))
//     })
//     .then(pageHTML => {
//         return (writeFile(pageHTML))
//     })
//     .catch(err => {
//         console.log(err)
//     })


