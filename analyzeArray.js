function analyzeArray(arr) {
    let total = 0;
    arr.forEach(element => {
        total += element;
    });
    let avarage = total / arr.length
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let length = arr.length
    let object = {}   
    object.avarage = avarage;
    object.min = min
    object.max = max
    object.length = length 
    return object
}
let array1 = [1, 8, 3, 4, 2, 6];
analyzeArray(array1)
module.exports = analyzeArray;