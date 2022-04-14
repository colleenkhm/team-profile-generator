const Intern = require("../lib/Intern.js");

test('when instantiating intern, the school property is set', () => {
    const intern = new Intern('name', 'id', 'email', 'school')
    expect(intern.school).toBe('school')
})

test('when calling getSchool(), the school is returned', () => {
    const intern = new Intern('name', 'id', 'email', 'school')
    expect(intern.getSchool()).toBe('school')
})
