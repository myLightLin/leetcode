/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    return nums
		.sort((a, b) => a - b)
		.filter((x, index) => index % 2 === 0)
		.reduce((a, b) => a + b);
};