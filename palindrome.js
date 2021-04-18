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
};


console.log(`isPalindrome("A man, a plan, a canal: Panama"): ${isPalindrome("A man, a plan, a canal: Panama")}`)
console.log(`isPalindrome("race a car"): ${isPalindrome("race a car")}`)
console.log(`isPalindrome("0 P"): ${isPalindrome("0 P")}`)
console.log(`isPalindrome("aa"): ${isPalindrome("aa")}`)
console.log(`isPalindrome("a"): ${isPalindrome("a")}`)
console.log(`isPalindrome(""): ${isPalindrome("")}`)
console.log(`isPalindrome("car wash me"): ${isPalindrome("car wash mer")}`)
console.log(`isPalindrome("abcdcba"): ${isPalindrome("abcdcba")}`)
console.log(`isPalindrome(",; W;:GlG:;l ;,"): ${isPalindrome(",; W;:GlG:;l ;,")} (should be false)`)
