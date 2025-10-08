function countCharacterOccurrences(str, banned) {
  const arr = str.split(" ");
  const obj = {};
  for (let char of arr) {
    if (char !== banned) {
      if (obj[char]) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      delete obj[key];
    }
  }
  return obj;
}

//alternative method
function countWord(s, banned) {
  let words = s.split(" ");
  let wordCount = {};

  // Count occurrences of words (excluding banned word)
  for (let word of words) {
    if (word !== banned) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }
  }
  console.log(wordCount);
  // Create an array of formatted results
  let result = Object.entries(wordCount)
    .filter(([word, count]) => count > 1) // Keep only words that appear more than once
    .map(([word, count]) => `${word}:${count}`);

  console.log(result);
}

// Example usage
console.log(
  countCharacterOccurrences("this is a test test test this is a", "this")
);
