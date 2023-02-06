let text = "my name is sandeep saini";

function captilizeText(text) {
  let words = text.split(" ");

  let result = [];

  for (let word of words) {
    result.push(word[0].toUpperCase() + word.slice(1));
  }
  return result.join(" ");
}

console.log(captilizeText(text));
