const engineerTemplateArr = []
const internTemplateArr = []

const generateManager = data => {
    var manager = data.filter(employee => employee.getRole() === 'Manager')
    console.log(manager)
    return `
    <div class="manager"
    ${manager.name}
    ${manager.id}
    ${manager.email}
    ${manager.office}
    </div>
    `
}

const generateEngineer = data => {
    var engineerArr = data.filter(employee => employee.getRole() === 'Engineer')
    console.log(engineerArr)
    // for (var i = 0, i < )
    if (!data) {
        return ''
    }

    for (var i = 0; i < engineerArr.length; i++) {
        let eName = engineerArr[i].name;
        let eId = engineerArr[i].id;
        let eEmail = engineerArr[i].email;
        let eGithub = engineerArr[i].github;
        console.log(eName)

        var engineerTemplate =  `
            <div class="engineer">
            ${eName}
            ${eId}
            ${eEmail}
            ${eGithub}
            </div>
        `
        
        engineerTemplateArr.push(engineerTemplate)
    } return engineerTemplateArr
}

const generateIntern = data => {
    var internArr = data.filter(employee => employee.getRole() === 'Intern')
    console.log(internArr)

    if (!data) {
        return ''
    }

    for (var i = 0; i < internArr.length; i++) {
        let iName = internArr[i].name;
        let iId = internArr[i].id;
        let iEmail = internArr[i].email;
        let iSchool = internArr[i].school;
        console.log(iName)

        var internTemplate =  `
            <div class="intern">
            ${iName}
            ${iId}
            ${iEmail}
            ${iSchool}
            </div>
        `
        
        internTemplateArr.push(internTemplate)
    } return internTemplateArr
}

module.exports = {
    generateEngineer, generateManager, generateIntern
}

// module.exports = templateData => {
//     console.log(templateData)
//     return `${generateManager(templateData)}
//     ${generateEngineer(templateData)}
//     ${generateIntern(templateData)}
//     `
// }
// ${generateManager(managerData)}