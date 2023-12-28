function calculateFibonacciArray(maxIndex) {
    let fibonacciArray = [0, 1];
    
    for (let i = 2; i <= maxIndex; i++) {
      fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
  
    return fibonacciArray;
  }
  
  function findCharsAtFibonacciIndices(sentence, fibonacciIndices) {
    let maxIndex = Math.max(...fibonacciIndices);
    let fibonacciArray = calculateFibonacciArray(maxIndex);
    
    let result = [];
  
    for (let i = 0; i < fibonacciIndices.length; i++) {
      let idx = fibonacciArray[fibonacciIndices[i] - 1];
      if (idx < sentence.length) {
        result.push(sentence[idx]);
      } else {
        // here i am assuming if the length of the string is less than the fibonnaci asked then we are showing there * as indicating that length is exceeding
        result.push("*");
      }
    }
  
    return result;
  }
  
  
  let s = "Welcome to an exclusive marketplace for working professionals";
  let arr = [1, 3, 6, 9, 3];
  
  let output = findCharsAtFibonacciIndices(s, arr);
  console.log(output);
  
  