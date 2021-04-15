/*
  From https://www.youtube.com/watch?v=GBuHSRDGZBY

  ===Instructions===
  You have two arrays of equal size, each filled with integers (and they can be negative or zero).
  You also have a target number as a single integer.
  The goal is to find a pair of integers, one from each array, that their sum is closest to the target number.

  ===Example 1===

  arrayA = [-1, 3, 8, 2, 9, 5]
  arrayB = [4, 1, 2, 10, 5, 20]
  target = 24

  The closest pairs are (5, 20) and (3, 20). But (5,20) is only 1 away from our target of 24.
*/

const findClosestPair = (arrayA, arrayB, target) => {
  
}


const assert = (value, expected) => {
  if( value != expected) {
    throw `[${value}] did not equal the expected value of [${expected}]!`;
  }
}

assert( findClosestPair([-1,3,8,2,9,5],[4,1,2,10,5,20],24), [5,20] );
