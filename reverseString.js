function reverseString(str) {
    var splitString = str.split("")
    var reverseArray = splitString.reverse();
    var reversedString = reverseArray.join("")
    return reversedString
}

module.exports = reverseString