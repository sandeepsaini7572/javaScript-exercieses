let str = "My Name is Sathesh";

let wordArray = str.split(" ");

let reverseWordArray = wordArray.map((word) =>
  word.split("").reverse().join("")
);

const result = reverseWordArray.join(" ");

console.log(result);
