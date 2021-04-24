// solution explaination:
// palindrom is a word that sounds same when reads backwards "eye" is eye even if you read it backwardly.
//  1. Because a palindrome is the word which is read and sounds same whether backwards or forwards
// Replace all spaces and alphanumerics with empty string first of all \W and _ also.
// if the word does not have any white spaces , alphanumerics then // check if the same string when it reversed
// is it equal to that.
// so if there are dollar signs or any kind of shit between words it would still return true because we already have set cases for alphanumerics an spaces.

//We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

//We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

function palindrome(str) {
  return (
    str.replace(/[\W_]/g, "").toLowerCase() ===
    str.replace(/[\W_]/g, "").toLowerCase().split("").reverse().join("")
  );
}

palindrome("eye");
