let arr = [10, 20, true, false, 0, null, undefined, ""];

let results = arr.filter((ele) => (ele > 0 ? ele : ""));
console.log(results);

// function filter(arr) {
//   let results = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// }

// console.log(filter(arr));
