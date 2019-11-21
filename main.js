const { twoNumberSum } = require('./TwoNumberSum');
const { BST, findClosestValueInBST } = require('./FindClosetInBST');

const twoNumSumArray = [3, 5, -4, 8, 20, 9, -1, 2];
const twoNumSumTarget = 10;
const twoNumResult = twoNumberSum(twoNumSumArray, twoNumSumTarget);

console.log(
  `Two Number Sum array is [${twoNumSumArray}], target sum is ${twoNumSumTarget} and the result is [${twoNumResult}]`
);

const bstTest = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(41)
  .insert(1)
  .insert(3)
  .insert(19)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-203)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4550);

const bstFindValue = 12;
const bstClosestResult = findClosestValueInBST(bstTest, bstFindValue);
console.log(
  `Find Closest Value in BST for value of ${bstFindValue}, which resulted in: ${bstClosestResult}.`
);
