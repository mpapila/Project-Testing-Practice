const {add , subtract , divide , multiply} = require("./calculator")

describe('add function',() => {
    test('a plus b is equal',()=> {
        expect(add(3,5)).toBe(8)
    })
})
describe('subtract function',() => {
    test('a subtract b is equal',()=> {
        expect(subtract(5,3)).toBe(2)
    })
})
describe('divide function',() => {
    test('a divided b is equal',()=> {
        expect(divide(6,2)).toBe(3)
    })
})
describe('multiply function',() => {
    test('a multiply b is equal',()=> {
        expect(multiply(3,5)).toBe(15)
    })
})

