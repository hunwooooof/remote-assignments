/**
 * [Give an array of integers to the function and it'll return indices of the two numbers such that they add up to a specific target. Assume that each input would have exactly one solution, and can't use the same element twice.]
 *
 * @param {array} nums - [An array of integers which includes two answers that can add up to the specific target]
 * @param {number} target - [Which is the target that two numbers add up tp]
 * @returns {array} [Includes the indices of the two numbers]
 */



function twoSum(nums, target) {
    let output = [];    // Declare 'output' as answer

    // Subtract each element from the target
    for  (let i = 0; i < nums.length; i++) {
        const sub = target - nums[i];
        if (sub > 0 && sub !== nums[i]) {  // There's a chance that one of the other elements equals to 'sub' 
            if (nums.indexOf(sub) !== -1) { // Make sure 'sub' is inside the nums
                const n1 = nums[i];
                const n2 = sub;
                output.push(nums.indexOf(n1), nums.indexOf(n2));
                break;
            }
        }
    }
    console.log(output);
}


twoSum([2, 7, 11, 15], 9);                  // output: [0, 1]
twoSum([2, 11, 7, 15], 22);                 // output: [2, 3]
twoSum([2, 7, 11, 15, 1, 100, 55], 155);    // output: [5, 6]
twoSum([3, 7, 11, 15, 1, 100, 345], 4);     // output: [0, 4]