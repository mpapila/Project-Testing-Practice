const reverseString = require("./reverseString")

describe('reverse string',()=> {
    test('reversed string is',()=>{
        expect(reverseString('hello')).toBe('olleh')
    })
})