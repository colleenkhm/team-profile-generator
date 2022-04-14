const Manager = require('../lib/Manager.js')

test('when instantiating manager, make sure office class is set', () => {
    const manager = new Manager('name', 'id', 'email', 'office')
    expect(manager.office).toBe('office')
})

test('when calling getOffice(), the office number is returned', () => {
    const manager = new Manager('name', 'id', 'email', 'office')
    expect(manager.getOffice()).toBe('office')
})
