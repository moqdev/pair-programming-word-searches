// implementing a word search solver, as a function that receives a 2D array of letters and a word. The function must:
// Check to find the word horizontally and vertically
// Return true if the word is found, and return false if the word is not found

// Task 1 - we search for the first letter of the word in the 2d array
// Task 2 - we loop once ver and once horiz
// we return true if found

const wordSearch = (letters, word) => {
  // Joining each row into a string
  const horizontalJoin = letters.map((ls) => ls.join(""));

  //console.log(horizontalJoin);
  let verticalJoin = "";

  for (const l of horizontalJoin) {
    //console.log(l);
    if (l.includes(word)) {
      return true;
    }
  }

  for (let i = 0; i < letters[0].length; i++) {
    //vertical index
    let tempArr = [];
    //columns
    for (let k = 0; k < letters.length; k++) {
      tempArr.push(letters[k][i]);
      // Joining each column into a string
    }
    let verticalJoin = tempArr.join("");

    for (const j of verticalJoin) {
      if (j.includes(word)) {
        return true;
      }
    }
  }
  return false;
};

module.exports = wordSearch;
