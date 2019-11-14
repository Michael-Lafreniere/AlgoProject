const twoNumberSum = require('./TwoNumberSum');
const findClosetInBST = require('./FindClosetInBST');

const twoNumSumArray = [3, 5, -4, 8, 20, 9, -1, 2];
const twoNumSumTarget = 10;
const twoNumResult = twoNumberSum.func(twoNumSumArray, twoNumSumTarget);

console.log(
  `Two Number Sum array is [${twoNumSumArray}], target sum is ${twoNumSumTarget} and the result is [${twoNumResult}]`
);
