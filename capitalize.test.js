const capitalize = require('./capitalize');

describe('capitalize function', () => {
    test('first character capitalized',() => {
        expect(capitalize('hello')).toBe('Hello')
    })
})