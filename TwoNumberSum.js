// Two Number Sum:
//
// Create a function that takes in a non-empty array and a sum value.
// If any two numbers in the provided array sum up to the target sum return them.
// Otherwise return an empty array.

// My solution:
//
// Sort the input array from lowest to highest.  Find the end of the array as our
// right value and 0 for the left, while they've not crossed nor has our current sum
// equaled the target sum we determine if we are higher or lower then the target sum
// and advance or subtract our left/right pointers accordingly.  If we do find that
// our current sum and target sum are equal we return an array in order (left then right)
// otherwise we return an empty array.

const twoNumberSum = (input, targetSum) => {
  input.sort((a, b) => a - b);
  let left = 0;
  let right = input.length - 1;
  while (left < right) {
    const currentSum = input[left] + input[right];
    if (currentSum === targetSum) {
      return [input[left], input[right]];
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  return [];
};

module.exports = { twoNumberSum };
