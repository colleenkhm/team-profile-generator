const generateManager = data => {
    var manager = data.filter(employee => employee.getRole() === 'Manager')
    console.log(manager)

    var managerTemplate = `
    <div class="employee card">
        <div class="card-title">${manager[0].name} (MANAGER)</div>
        <p class="content"><strong>Id:</strong> ${manager[0].id}</p>
        <p class="content"><strong>Email:</strong> <a href="mailto: ${manager[0].email}">${manager[0].email}</a></p>
        <p class="content"><strong>Office Number:</strong> ${manager[0].office}</p>
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
            <div class="employee card">
                <div class="card-title">${eName} (ENGINEER)</div>
                <p class="content"><strong>Id:</strong> ${eId}</p>
                <p class="content"><strong>Email:</strong> <a href= "mailto: ${eEmail}">${eEmail}</a></p>
                <p class="content"><strong>Github:</strong> <a href="github.com/${eGithub}" target="_blank">${eGithub}</a></p>
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
        <div class="employee card">
            <div class="card-title">${iName} (INTERN)</div>
            <p class="content"><strong>Id:</strong> ${iId}</p>
            <p class="content"><strong>Email:</strong> <a href="mailto: ${iEmail}">${iEmail}</a></p>
            <p class="content"><strong>School:</strong> ${iSchool}</p>
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