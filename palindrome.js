/*
https://leetcode.com/problems/valid-palindrome/
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

===Example 1:===

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

===Example 2:===

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
*/

const removeNonAlphaNumeric = (s) => {
  return s.replace(/[^a-zA-Z0-9]*/g, '');
}

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
  s = removeNonAlphaNumeric(s);
  s = s.toLowerCase();
  let start = 0;
  let end = s.length-1;
  if(s.length == 0 || s.length == 1) {
    return true;
  }

  console.log("new string: ", s);
  
  while(start <= end && s[start] == s[end]) {
    start++;
    end--;
  }

  return start >= end;
};



console.log(`isPalindrome("A man, a plan, a canal: Panama"): ${isPalindrome("A man, a plan, a canal: Panama")}`)
console.log(`isPalindrome("race a car"): ${isPalindrome("race a car")}`)
