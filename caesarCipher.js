function caesarCipher(str, key) {
    let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
    const inputArray = str.split("")
    let newArray = []
    for (let i = 0; i < inputArray.length; i++) {
        let istArray = inputArray[i]
        let inputIndex = alphabetArray.indexOf(istArray)
        let encryptedWordofIndex = inputIndex + key
        let newLetter = alphabetArray[encryptedWordofIndex]
        newArray.push(newLetter)
    }
    let encryptedWord = newArray.join("").toUpperCase();
    return encryptedWord
}

module.exports = caesarCipher