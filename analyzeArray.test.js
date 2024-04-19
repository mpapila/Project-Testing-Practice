const analyzeArray = require("./analyzeArray")

describe('analyzeArray function', () => {
    test('return the array to object has avarage,min,max,length', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({ avarage: 4, min: 1, max: 8, length: 6 });
    })
})