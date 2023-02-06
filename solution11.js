function conactAndRemove(ar1, ar2) {
  return [...ar1, ...ar2].filter(
    (n) => ar1.indexOf(n) === -1 || ar2.indexOf(n) === -1
  );
}

let ar1 = [1, 1, 2, 7, 4, 5, 6];
let ar2 = [1, 3, 8, 2, 6];

console.log(conactAndRemove(ar1, ar2));
