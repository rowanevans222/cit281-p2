/* 
    CIT 281 Project 2
    Name: Rowan Evans
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  

  // Returns a random lowercase letter
function getRandomLetter() {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  return alphabet[Math.floor(Math.random() * alphabet.length)];
}

// Returns a random-length string using getRandomLetter()
function getRandomString(minLength, maxLength) {
  const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
  let result = '';
  for (let i = 0; i < length; i++) {
      result += getRandomLetter();
  }
  return result;
}

// Sorts a string in ascending order
function getSortedString(string) {
  return string.split('').sort().join('');
}

const randomStr = getRandomString(10, 20);
console.log("Unsorted:", randomStr);
console.log("Sorted:  ", getSortedString(randomStr));
  
  console.log(result);