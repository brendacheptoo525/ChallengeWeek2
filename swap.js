function swapCase(inputString) {
    // Split the input string into an array of characters
    return inputString.split('').map(function(char) {
      // Check if the character is uppercase
      if (char === char.toUpperCase()) {
        // Convert uppercase character to lowercase
        return char.toLowerCase();
      } else {
        // Convert lowercase character to uppercase
        return char.toUpperCase();
      }
    }).join(''); // Join the characters back into a string
  }
  console.log(swapCase('The Quick Brown Fox'));