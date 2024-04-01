function generateArray(start, end) {
    let result = []; // Initialize an empty array to store the generated numbers
    
    if (start <= end) { // Check if the start number is less than or equal to the end number
      for (let i = start; i <= end; i++) {
        result.push(i); // Add each number from start to end to the result array
      }
    } else { // If the start number is greater than the end number
      for (let i = start; i >= end; i--) {
        result.push(i); // Add each number from start to end to the result array in descending order
      }
    }
    
    return result; // Return the generated array
  }
  console.log(generateArray(4, 7));
  console.log(generateArray(-4, 7))