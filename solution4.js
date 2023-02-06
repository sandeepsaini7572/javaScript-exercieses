// ES6 method

let str = "SAMPLE";

const result = str.split("").reverse().join("");

console.log(result);

// 2nd Method

let ans = "";

for (let i = str.length - 1; i >= 0; i--) {
  ans += str[i];
}

console.log(ans);
