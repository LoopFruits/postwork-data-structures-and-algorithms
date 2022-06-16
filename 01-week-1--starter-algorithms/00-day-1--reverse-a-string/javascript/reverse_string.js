function reverseString(str) {
  // type your code here
  rString = "";

  for (let i = str.length - 1; i > -1; --i) {
    rString = rString + str[i];
  }

  return rString;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution


// pseudocode 

// must solve the problem using iteration 