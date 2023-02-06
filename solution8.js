let str = "abcdef12213^&%^&% 678b hjg";

let number_of_digits = 0;
let number_of_alphabets = 0;
let number_of_spaces = 0;
let number_of_special_characters = 0;

for (let i = 0; i < str.length; i++) {
  let c = str[i];

  if (c >= "0" && c <= "9") number_of_digits++;
  else if ((c >= "a" && c <= "z") || (c >= "A" && c <= "Z"))
    number_of_alphabets++;
  else if (c == " ") number_of_spaces++;
  else number_of_special_characters++;
}

console.log("Number of digits are ", number_of_digits);
console.log("Number of alphabets are ", number_of_alphabets);
console.log("Number of spaces are ", number_of_spaces);
console.log("Number of characgters are ", number_of_special_characters);
