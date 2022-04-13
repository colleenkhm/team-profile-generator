const Engineer = require('../lib/Engineer')

test('when instantiating engineer, the github property is set', () => {
    const engineer = new Engineer('name', 'id', 'email', 'github')
    expect(engineer.github).toBe('github')
})

