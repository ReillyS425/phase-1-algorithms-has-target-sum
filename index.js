function hasTargetSum(array, target) {
  for (let indexIterate = 0; indexIterate < array.length; indexIterate++) {
    const tDiff = target - array[indexIterate]
    for (let iterationAftDiff = indexIterate + 1; iterationAftDiff < array.length; iterationAftDiff++) {
      if (array[iterationAftDiff] === tDiff) return true;
    }
  }
  return false;
}


/* 
  Runtime: 0(n^2)
  Space: 0(n)
*/

/* 
  iterate over number in an array
  find a number that when added to the current number will equal the target  
  if it finds a combo to match the target it will return true
  if none add up to the target, return false
*/

/*
  I created a function that has two parameters, an array, and a target number.
  I then create a variable that starts at the index of the array and iterates over the legnth array.
  Next I created a variable to hold the difference of the target number - the current number on the array.
  Then I iterate through the rest of the array and if the array hold the difference of the target number and the current number it will return True.
  If not it will return false.
*/

//function hasTargetSum(array, target) {
 // const seenNumbers = {};
 // for (let i = 0; i < array.length; i++) {
   // const complement = target - array[i];
   // if (seenNumbers[complement]) return true;
   // seenNumbers[array[i]] = true;
  //}
 // return false;
//}


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here


  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 13, 4, 11, 7], 24));

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
