let str = "abcabc123";

function getFrequency(str) {
  let freq = {};

  for (let ch of str) {
    if (freq[ch]) freq[ch]++;
    else freq[ch] = 1;
  }
  return freq;
}

console.log(getFrequency(str));
