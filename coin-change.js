/*
  https://leetcode.com/problems/coin-change/

  You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

  Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

  You may assume that you have an infinite number of each kind of coin.

  Video: https://www.youtube.com/watch?v=4S5x4SF4fsM
*/

/**
 * 
 * @param {Array[integer]} coins - A list of denominations we have
 * @param {integer} amount - The amount we want to get to, using the least amount of denominations in our coins array
 * 
 * @returns {integer} - The smallest number of denominations to total up to amount, or -1 if it cannot be done.
 * 
 * ===Example 1===
 * Input: coins = [1,2,5], amount = 11
 * Output: 3
 * Explanation: 11 = 5 + 5 + 1
 * 
 * ===Example 2===
 * Input: coins = [2], amount = 3
 * Output: -1
 * 
 * ===Example3===
 * Input: coins = [1], amount = 0
 * Output: 0
 */
const coinChange = (coins, amount) => {
  let dp = [];
  const inf = Math.pow(10, 1000);
  for(let i = 0; i <= amount; i++) {
    dp.push(inf);
  }
  dp[0] = 0;

  for(let i = 0; i < dp.length; i++) {
    coins.forEach( (coin) => {
      if( i - coin >= 0 ) {
        dp[i] = Math.min(dp[i], dp[i-coin]+1);
      }
    });
  }

  //console.log(dp);

  const lastValue = dp[dp.length-1];
  if(lastValue === inf) {
    return -1;
  }
  return lastValue;
};

const assert = (value, expected) => {
  if(value != expected) {
    console.log(`❌ value ${value} != expected ${expected}`)
  } else {
    console.log("✅ Nice work.")
  }
}

assert(coinChange([1,2,5], 11), 3);
assert(coinChange([2], 3),-1);
assert(coinChange([1], 0), 0);
