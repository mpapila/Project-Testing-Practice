const caesarCipher = require("./caesarCipher")

describe("caesarCipher function", () => {
    test('encrypted string is', () => {
        expect(caesarCipher('hello', 3)).toBe('KHOOR')
    })
})