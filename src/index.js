module.exports = function getZerosCount(number) {
  let zeroCount = 0;
  while (number >= 5) {
    number = Math.trunc(number / 5);
    zeroCount = zeroCount + number;
  }
  return zeroCount;
}
