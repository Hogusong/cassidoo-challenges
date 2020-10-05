/**
 *
 * Given an array that was once sorted in ascending order is rotated at some
 * pivot unknown to you beforehand. Find the minimum value in that array in
 * O(n) or less.
 *
 * Example:
 *
 * [0,2,4,7,9] might become [7,9,0,2,4], with a minumum value of 0.
 *
 */

exports.gimmeMinimumValue = (arrayOfPivotedNumbers) => {
  for (let a = 0, len = arrayOfPivotedNumbers.length; a < len; a++) {
    const currentNumber = arrayOfPivotedNumbers[a];
    const nextNumber = arrayOfPivotedNumbers[a + 1];

    if (nextNumber < currentNumber) {
      return nextNumber;
    }
  }

  return arrayOfPivotedNumbers[0];
};
