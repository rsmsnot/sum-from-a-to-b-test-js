
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  let total = 0;
  if (fromN === toN) {
    return total += toN;;
  }
  return fromN + sum(fromN + 1, toN);
}

module.exports = sum; 