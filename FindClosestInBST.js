// Find Closest Value within a BST:

// You are given a BST data structure consisting of BST nodes.  Each BST node has an integer value stored
// in a property called "value" and two children nodes store in properties called left/right respectively.
// A node can only be called a BST node if it satisfies the following conditions:
// 1) It's value is greater than the values of every node to it's left.
// 2) It's value is less than or equal to the values of every node to it's right.
// 3) And that it's children nodes are BST nodes themselves or null (none).

// Note: Typically it's safe to say there will be only one closest value to match.

// Sample input:
//
//      10      Find: 12
//     /  \
//    5    17
//   / \   / \
//  4   5 13  22
// /       \
//2         19

// My Solution:

// I remembered from years ago using a closest value to track works well, in C++ I typically used a large number, but in JS Infinity works a lot better.
// First see if this branch of the tree (or the tree in general) is valid (not null) and if so just return the closest value passed in.
// Next, compare the absolute value of target and closest and see if it's greater then the absolute value of the current nodes value and the target.  If so
// update closest to the current nodes value.
// After that it's simple logic, if the target value is less then the current nodes value look left, otherwise look right using recursive calls to the function.
// with an else returning closest (or tree.value honestly) if they're equal.

const { BST } = require('./BST');

const findClosestValueInBST = (tree, target, closest = Infinity) => {
  if (tree === null) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBST(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBST(tree.right, target, closest);
  } else {
    return closest;
  }
};

const findClosestTest = () => {
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
};

module.exports = { findClosestValueInBST, findClosestTest };
