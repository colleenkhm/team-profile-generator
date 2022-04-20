const generateManager = data => {
    var manager = data.filter(employee => employee.getRole() === 'Manager')
    console.log(manager)
    return `
    // <p>
    // ${manager[0].name}
    // ${manager[0].id}
    // ${manager[0].email}
    // ${manager[0].office}
    // </p>
    // </div>
    `
    
}

// gonna need to find what managerData, engineerData, etc. actually correlate to and populate
// look to what I did for readme generator because that somehow worked 
const generateEngineer = data => {
    var engineerArr = data.filter(employee => employee.getRole() === 'Engineer')
    console.log(engineerArr)
    // for (var i = 0, i < )
    if (!data) {
        return ''
    }
    const engineerTemplateArr = []
    for (var i = 0; i < engineerArr.length; i++) {
        let eName = engineerArr[i].name;
        let eId = engineerArr[i].id;
        let eEmail = engineerArr[i].email;
        let eGithub = engineerArr[i].github;

        var engineerTemplate =  `
        <div class="employee-card"
            ${eName}
            ${eId}
            ${eEmail}
            ${eGithub}
        </div>
        `
        
        engineerTemplateArr.push(engineerTemplate)
    }
}

const generateIntern = data => {
    var internArr = data.filter(employee => employee.getRole() === 'Intern')
    if (!data) {
        return ''
    }

    return `
    <div class="employee-card" id="intern-${id}
    <p>
    hello
    </p>`
}

module.exports = templateData => {
    console.log(templateData)
    return `<div>${generateManager(templateData)}</div>
    <div>${generateEngineer(templateData)}</div>
    `
}
// ${generateManager(managerData)}