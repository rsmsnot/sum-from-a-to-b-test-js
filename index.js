
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let sum = 0;
  // if (fromN === toN) {
  //   return sum += fromN;;
  // }

  
  for (let i = fromN; i < (toN + 1); i++) {
  sum += i;
  }
  return sum;

}

module.exports = sum; 