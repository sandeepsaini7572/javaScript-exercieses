let one = "abc";
let two = "cba";

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  if (str1.split("").sort().join("") === str2.split("").sort().join(""))
    return true;
  else return false;
}

if (isAnagram(one, two)) {
  console.log("Valid anagram");
} else {
  console.log("Not a Valid anagram");
}
