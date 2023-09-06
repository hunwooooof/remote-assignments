/**
 * [A function finds the max number of the passing array of numbers]
 *
 * @param {array} numbers - [We'll find the max number of this array]
 * @returns {number} [The max number of the passing array of numbers]
 */


function max(numbers) {
    while (numbers.length !== 1) {
        let length = numbers.length;
        if (numbers[0] < numbers[length-1]) {
            numbers.shift();
        } else {
            numbers.pop();
        }
    }
    return numbers[0];
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7