const generateManager = managerData => {
    return `
    <div class="employee-card" id="manager"
    <p>
    ${name}
    ${id}
    ${email}
    ${office}
    </p>
    `
}

// gonna need to find what managerData, engineerData, etc. actually correlate to and populate
// look to what I did for readme generator because that somehow worked 
const generateEngineer = engineerData => {
    if (!engineerData) {
        return ''
    }

    return `
    <div class="employee-card" id="engineer-${id}"
    <p>
    ${name}
    ${id}
    ${email}
    ${github}
    </p>
    `
}

const generateIntern = internData => {
    if (!internData) {
        return ''
    }

    return `
    <div class="employee-card" id="intern-${id}
    <p>
    ${name}
    ${id}
    ${email}
    ${school}`
}