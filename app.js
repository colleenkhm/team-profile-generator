const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generatePage');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { generateIntern } = require('./src/page-template')
const { generateEngineer } = require('./src/page-template')
const { generateManager } = require('./src/page-template')
const employees = []

function getMenu () {
    inquirer.prompt(
    {
        type: 'list',
        name: 'options',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish building team']
    }) .then((choice) => {
        console.log(choice)
            if (choice.options === 'Add an Engineer') {
            getEngineer()
            } 
            if (choice.options === 'Add an Intern') {
            getIntern()
            }
            if (choice.options === 'Finish building team') {
                buildTeam()
        }
    })
}

// TODO: write a function that asks questions pertaining to the manager
const getManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter manager's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter manager's employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter manager's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "Please enter manager's office number:",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log('Please enter office number!');
                    return false;
                }
            }
        }
    ]) .then((managerData) => {
        console.log(managerData)

        var manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);

        employees.push(manager);

        getMenu()
    })
}

const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter engineer's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter engineer's employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter engineer's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter engineer's github username:",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter github!');
                    return false;
                }
            }
        }
    ]) .then((engineerData) => {

        var engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

        employees.push(engineer)

        getMenu()
    })
}

const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter intern's name:",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter intern's employee ID:",
            validate: idInput => {
                if (idInput) {
                    return true;
                } else {
                    console.log('Please enter ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter intern's email:",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter intern's school:",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter school!');
                    return false;
                }
            }
        },
    ]) .then((internData) => {
        // console.log(internData)

        var intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        employees.push(intern)

        getMenu()
    })
}

const buildTeam = () => {
    console.log(employees)
    let employeeHTML = []
    const internHTML = generateIntern(employees)
    const engineerHTML = generateEngineer(employees)
    const managerHTML = generateManager(employees)
    console.log(internHTML, engineerHTML, managerHTML)
    employeeHTML.push(managerHTML)
    employeeHTML.push(engineerHTML)
    employeeHTML.push(internHTML)
    employeeHTML = employeeHTML.join('')

    var pageTemplate = `
    <!DOCTYPE html>
    <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <header>
                <h1>MY TEAM</h1>
            </header>
            <div class="container-fluid">
                <div class="row">
                    <section class="card-container col-md-12">
                        ${employeeHTML}
                    </section>
                </div>
            </div>
        </body>
    </html>
    `

    writeFile(pageTemplate)
    copyFile()

}

getManager()

