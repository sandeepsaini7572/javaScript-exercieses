let str = "abcabcdef";

let arr = str.split("");
let arr2 = [];

for (let i in arr) {
  if (arr2.indexOf(arr[i]) === -1) arr2.push(arr[i]);
}
const result = arr2.join("");
console.log(result);
