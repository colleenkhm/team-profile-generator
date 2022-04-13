const Employee = require('../lib/Employee');

test('when instantiating an employee, name is set', () => {
    const employee = new Employee('Cody', '234543', 'cody@gmail.com');

    expect(employee.name).toBe('Cody')
});

test('when instantiating an employee, id is set', () => {
    const employee = new Employee('Cody', '234543', 'cody@gmail.com');

    expect(employee.id).toBe('234543')
});

test('when instantiating an employee, email is set', () => {
    const employee = new Employee('Cody', '234543', 'cody@gmail.com');

    expect(employee.email).toBe('cody@gmail.com')
});

test('when calling getName(), the name is returned', () => {
    const employee = new Employee('Cody', '234543', 'cody@gmail.com');

    expect(employee.getName()).toBe('Cody')
})