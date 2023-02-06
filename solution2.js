// Unique Elements

let arr = [1, 2, 1, 2, 3, 4, 5, 1, 0, 1, 0];

const uniqueElements = arr.filter(
  (currentValue, index) => arr.indexOf(currentValue) === index
);

console.log(uniqueElements);

// Repaeated Elements

let hash_obj = arr.reduce((acc, cur) => {
  acc[cur] ? acc[cur]++ : (acc[cur] = 1);
  return acc;
}, {});

let repeatedElements = Object.keys(hash_obj).filter((key) => hash_obj[key] > 1);
console.log(repeatedElements);

// Non Repeated ELements

const nonRepeatedElements = arr.filter((x) => {
  return arr.findIndex((y) => y === x) === arr.lastIndexOf(x);
});

console.log(nonRepeatedElements);
