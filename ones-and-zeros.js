/*
LeetCode April 2021 Challenge
https://leetcode.com/explore/challenge/card/april-leetcoding-challenge-2021/593/week-1-april-1st-april-7th/3694/

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
  // Introducing a "dp" array, dynamic programming, to start counting stuff.
  let dp = [];
  for(var i = 0; i < m+1; i++) {
    let row = [];
    for(var j = 0; j < n+1; j++) {
      row.push(0);
    }
    dp.push(row);
  }

  // The dp array stores... what? what does this 2D array store?
  // It's organized so there are m rows, and n columns....
  // And dp[0][0] will always be 0, as there are never going to be strings in the set with neither a 0 or a 1.
  // dp[1][1] will be a count of... something. where zeroes is 1 and ones is 1

  strs.forEach( (s) =>{
    let zeroes = s.match(/0/g);
    zeroes = zeroes ? zeroes.length : 0;
    let ones = s.match(/1/g);
    ones = ones ? ones.length : 0;

    console.log({s, zeroes, ones})
    for(var i = m; i > zeroes - 1; i--) {
      for(var j = n; j > ones - 1; j--) {
        console.log(`Comparing dp[${i}][${j}] to dp[${i-zeroes}][${j-ones}]`)
        if(dp[i][j] >= dp[i-zeroes][j-ones] + 1) {
          console.log(`  dp[${i}][${j}]: Taking the value of dp[${i}][${j}]: ${dp[i][j]}`)
        } else {
          console.log(`  dp[${i}][${j}]: Taking the value of dp[${i-zeroes}][${j-ones}]: ${dp[i-zeroes][j-ones] + 1}`)
        }

        dp[i][j] = Math.max(dp[i][j], dp[i-zeroes][j-ones] + 1);
        
        // if(i==m && j==n) {
        //   console.log(`dp[${i}][${j}]`, {"dp[i][j]": dp[i][j], "dp[i-zeroes][j-ones]": dp[i-zeroes][j-ones] })
        // }
      }
    }
  } );

  console.log(dp);

  return dp[m][n];
};

assert( findMaxForm(["10","0001","111001","1","0"], 5, 3), 4 );
//assert( findMaxForm(["10","0","1"], 1, 1), 2 );

function assert(value, expected) {
  if(value != expected) {
    throw `Expected ${expected}, but received ${value}.`
  }
}
