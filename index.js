function hasTargetSum(array, target) {
  // Write your algorithm here
  
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
    }
    }
  }
  return false;
  
}
/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*
For each element at index i in the array (from 0 to array.length - 2):
  For each element at index j in the array (from i + 1 to array.length - 1):
    If the sum of array[i] and array[j] is equal to the target:
      Return true
Return false

/*
  Add written explanation of your solution here
/
it's a nested loop which examines all possible pairs of numbers in the array
we have an outer loop(i) that is responsible for selecting the first number in each pair
and an inner loop (j) that is responsible for selecting the second number in each pair
Inside the inner loop, for each pair of numbers (array[i] and array[j]), it calculates their sum: array[i] + array[j]. If this sum equals the target number, it means we have found a pair of numbers that adds up to the target

/ You can run `node index.js` to view these console logs*/
if (require.main === module) {
  // add your own custom tests in here




  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
