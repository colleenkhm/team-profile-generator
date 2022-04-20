const inquirer = require('inquirer');
const { writeFile, copyFile } = require('./utils/generatePage');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateIntern = require('./src/page-template')
const generateEngineer = require('./src/page-template.js')
const generateManager = require('./src/page-template.js')
// const generateHTML = require('./src/page-template.js');
// const generatePage = require('./utils/generatePage.js')
const employees = []

// const generateIntern = data => {
//     const internTemplateArr = []
//     var internArr = data.filter(employee => employee.getRole() === 'Intern')
//     console.log(internArr)
//     // for (var i = 0, i < )
//     if (!data) {
//         return ''
//     }

//     for (var i = 0; i < internArr.length; i++) {
//         let iName = internArr[i].name;
//         let iId = internArr[i].id;
//         let iEmail = internArr[i].email;
//         let iSchool = internArr[i].school;
//         console.log(iName)

//         var internTemplate =  `
//             <div class="intern">
//             ${iName}
//             ${iId}
//             ${iEmail}
//             ${iSchool}
//             </div>
//         `
        
//         internTemplateArr.push(internTemplate)
//     } return internTemplateArr
// }

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
    ]) .then((managerData) => {
        console.log(managerData)

        var manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.office);

        //push manager into employees array
        employees.push(manager);

        console.log(employees)

        // call the getMenu() function (maybe instead as a promise at the end??)
        getMenu()
    })
}

    //.then(({ member }) => {
    //     if (member === 'engineer') {
    //         return getEngineer()
    //     } else if (member === 'intern') {
    //         return getIntern()
    //     }
    // })

// getMenu()
// const buildTeam => {
    
// }
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
            name: 'github',
            message: "Please enter engineer's github username:"
        }
    ]) .then((engineerData) => {
        console.log(engineerData)

        var engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github);

        employees.push(engineer)

        console.log(employees)

        getMenu()
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
            name: 'school',
            message: "Please enter intern's school:"
        },
    ]) .then((internData) => {
        console.log(internData)

        var intern = new Intern(internData.name, internData.id, internData.email, internData.school);
        employees.push(intern)

        getMenu()
    })
}

const buildTeam = () => {
    const employeeHTML = [];
    const internHTML = generateIntern(employees)
    console.log(internHTML)
    // populate page template with employee data
    // 
    // console.log(employees)
    // writeFile(employees)
    // copyFile()

}

getManager()
    // .then(employees => {
    //     console.log(employees)
    //     // return generateHTML(employees);
    // })
    // .then(pageHTML => {
    //     return writeFile(pageHTML)
    // })
    // .then(writeFileResponse => {
    //     console.log(writeFileResponse);
    //     return copyFile();
    // })
    // .then(copyFileResponse => {
    //     console.log(copyFileResponse)
    // })
    // .catch(err => {
    //     console.log(err)
    // });
