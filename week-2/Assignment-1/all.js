/**
 * [A function finds the max number of the passing array of numbers]
 *
 * @param {array} numbers - [We'll find the max number of this array]
 * @returns {number} [The max number of the passing array of numbers]
 */


function max(numbers) {
    while (numbers.length !== 1) {      // Make sure there're more than one element to compare in the array
        const length = numbers.length;
        if (numbers[0] < numbers[length-1]) {       // Compare the first and the last element in the array
            numbers.shift();        // Shift the first element off if it's smaller
        } else {
            numbers.pop();      // Pop the last element off if it's smaller than or equal to the first
        }
    }
    return numbers[0];
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
