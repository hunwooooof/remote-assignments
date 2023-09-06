/**
 * [A function that calculates two numbers inside the passing object only addition and subtraction.]
 *
 * @param {object} args - [Includes two numbers and a plus or minus sign]
 * @returns {number} [The max result of the calculation]
 */



function calculate(args) {

    if (args.op === '+') {      // 1. Calculate addition
        let output = args.n1 + args.n2;
        return output;

    } else if (args.op === '-') {       // 2. Calculate subtraction
        let output = args.n1 - args.n2;
        return output;

    } else {        // 3. Catch error
        console.error('Not supported');
        
    }
}

console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'

