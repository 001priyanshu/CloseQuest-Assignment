function findNonRepeatingChars(inputString) {
    let nonRepeatingChars = [];
  
    let charCount = {};
  
    for (let char of inputString) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    // console.log(charCount);
  
    for (let char of inputString) {
      if (charCount[char] === 1) {
        nonRepeatingChars.push(char);
      }
    }
  
    return nonRepeatingChars;
  }
  
  let inputString = "Marketplace";
  let result = findNonRepeatingChars(inputString);
  
  console.log(result); 
  