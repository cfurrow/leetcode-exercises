/*
https://leetcode.com/problems/longest-palindromic-substring/
Given a string s, return the longest palindromic substring in s.

===Example 1:===
Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.

===Example 2:===
Input: s = "cbbd"
Output: "bb"

===Example 3:===
Input: s = "a"
Output: "a"

===Example 4:===
Input: s = "ac"
Output: "a"


==Constraints==
1 <= s.length <= 1000
s consist of only digits and English letters (lower-case and/or upper-case),

*/

var isPalindrome = (s) => {
  if(s.length == 0 || s.length == 1) {
    return true;
  }
  let end = s.length-1;
  let half = Math.ceil(end / 2);
  let palindrome = false
  for(let i = 0; i<half; i++) {
    if(s[i] == s[end-i]) {
      palindrome = true;
    } else {
      palindrome = false;
      break;
    }
  }
  
  return palindrome;
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let longest = s[0];
  
  // TODO: i does not have to go all the way to s.length... can it stop much sooner?
  for(let i = 0; i < s.length; i++) {
    for(let j = i; j < s.length; j++) {
      // skip if current diff is going to be shorter than pre-determined longest
      if(longest.length > 0 && j-i < longest.length) {
        continue;
      }
      let test = s.substring(i, j+1);
      //console.log({test, "ispal": isPalindrome(test), longest: test.length > longest.length })
      if( isPalindrome(test) && test.length > longest.length ){
        longest = test;
      }
    }
  }

  return longest;
};

var assert =(s, expected) => {
  var longest = longestPalindrome(s);
  if(longest == expected) {
    console.log(`✅ ${longest} was the longest palindrom of ${s}`)
  } else {
    console.log(`❌ Try again. ${longest} was not the longest palindrom of ${s}`)
  }
}


assert("babad", "bab");
assert("a", "a");
assert("cbbd", "bb")
assert("ac", "a")
assert("bb", "bb")
