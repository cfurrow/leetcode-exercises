/*
You are given an array of binary strings strs and two integers m and n.

Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.

A set x is a subset of a set y if all elements of x are also elements of y.

==Example 1==
Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
Output: 4
Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
{"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.


==Example 2==
Input: strs = ["10","0","1"], m = 1, n = 1
Output: 2
Explanation: The largest subset is {"0", "1"}, so the answer is 2.
*/

/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
  // build every combination of values in strs
  // validate each combination
  // score each combination
  let sets = { };
  sets[strs.length] = strs; // add the original as a set

  
  let setSize = 2;
  // first loop, make sets of 2
  // second loop, make sets of 3
  // ...
  // last loop, make sets of n-1 (max set that is not the original set)
  for(; setSize < strs.length; setSize++) {
    for(var baseSetStart = 0; baseSetStart < strs.length - setSize; baseSetStart++) {
      let baseSet = strs.slice(baseSetStart, setSize);
      sets[setSize] = [];

      for(var i = 0; i < strs.length; i++) {
        var current = strs[i];
        if(baseSet.indexOf(current) >= 0) {
          // do not include values we already have in the baseSet
          continue;
        }

        sets[setSize].push( baseSet.concat([current]) );
      }
    }
  }
  
  console.log(sets);
};

// ["10","0001","111001","1","0"]

// sets of 3
// ["10", "0001", "111001"]
// ["10", "0001", "1"]
// ["10", "0001", "0"]
// ["10", "111001", "0001"] // we already have this set
// ["10", "111001", "1"]
// ["10", "111001", "0"]
// ["10", "1", "0001"] // we already have this set
// ["10", "1", "111001"] // we already have this one
// ["10", "1", "0"]
// ["0001", "10", "111001"] // dupe
// ["0001", "10", "1"] //dupe
// ["0001", "10", "0"] //dupe
// ["0001", "111001", "10"] // dupe
// ["0001", "111001", "1"]
// ["0001", "111001", "0"]

assert( findMaxForm(["10","0001","111001","1","0"], 5, 3), 4 );
assert( findMaxForm(["10","0","1"], 1, 1), 2 );

function assert(value, expected) {
  if(value != expected) {
    throw `Expected ${expected}, but received ${value}.`
  }
}
