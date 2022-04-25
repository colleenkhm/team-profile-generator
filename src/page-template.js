const generateManager = data => {
    var manager = data.filter(employee => employee.getRole() === 'Manager')
    console.log(manager)

    var managerTemplate = `
    <div class="employee-card">
    <p>Manager Name: ${manager[0].name}<p>
    <p>Manager Id: ${manager[0].id}</p>
    <p>Manager Email: ${manager[0].email}</p>
    Manager Office Number: ${manager[0].office}
    </div>
    `
    return managerTemplate
}

const generateEngineer = data => {
    var engineerArr = data.filter(employee => employee.getRole() === 'Engineer')

    if (!data) {
        return ''
    }

    var engineerTemplate = []
    for (var i = 0; i < engineerArr.length; i++) {
        let eName = engineerArr[i].name;
        let eId = engineerArr[i].id;
        let eEmail = engineerArr[i].email;
        let eGithub = engineerArr[i].github;

        var engineerCard =  `
            <div class="employee-card">
            <p>Engineer Name: ${eName}</p>
            <p>Engineer Id: ${eId}</p>
            <p>Engineer Email: ${eEmail}</p>
            <p>Engineer Github: ${eGithub}</p>
            </div>
        `
        engineerTemplate.push(engineerCard)
    } 
    engineerTemplate = engineerTemplate.join('')
    return engineerTemplate
}

const generateIntern = data => {
    var internArr = data.filter(employee => employee.getRole() === 'Intern')
    console.log(internArr)

    if (!data) {
        return ''
    }

    var internTemplate = [];
    for (var i = 0; i < internArr.length; i++) {
        let iName = internArr[i].name;
        let iId = internArr[i].id;
        let iEmail = internArr[i].email;
        let iSchool = internArr[i].school;

        var internCard =  `
            <div class="employee-card">
                <p>Intern Name: ${iName}</p>
                <p>Intern Id: ${iId}</p>
                <p>Intern Email: ${iEmail}</p>
                <p>Intern School: ${iSchool}</p>
            </div>
        `
        internTemplate.push(internCard)
    } 
    internTemplate = internTemplate.join('')
    return internTemplate
}

module.exports = {
    generateEngineer, generateManager, generateIntern
}