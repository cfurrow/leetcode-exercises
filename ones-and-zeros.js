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
  var sets = [];

  for(var i = 1; i <= strs.length; i++) {
    var setSize = i;
    for(var j = 0; j < strs.length; j++) {
      var currentIndex = j;
      var tmp = [];
      tmp.push(strs[currentIndex]);
      for(var k = 0; k < strs.length; k++) {
        if(tmp.indexOf(strs[k]) < 0 && tmp.length + 1 <= setSize) {
          tmp.push(strs[k])
        }
      }
      sets.push(tmp);
    }
  }

  console.log("sets", sets)
  console.log("sets.length", sets.length)

};

assert( findMaxForm(["10","0001","111001","1","0"], 5, 3), 4 );
assert( findMaxForm(["10","0","1"], 1, 1), 2 );

function assert(value, expected) {
  if(value != expected) {
    throw `Expected ${expected}, but received ${value}.`
  }
}
