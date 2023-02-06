let array = [1, 2, [3, 4, [5, 6, [8, 9, [10, 12]]]]];

const flatten = (arr) => {
  const result = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = acc.concat(flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
  return result;
};

console.log(flatten(array));
