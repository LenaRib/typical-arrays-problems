
exports.min = function min(array = []) {
  if (array.length === 0) return 0;
  let min = array[0];
  for (let item of array) {
    if (item < min) { min = item; }
  }
  return min;
}

exports.max = function max(array = []) {
  if (array.length === 0) return 0;
  let max = array[0];
  for (let item of array) {
    if (item > max) { max = item; }
  }
  return max;
}

exports.avg = function avg(array = []) {
  if (array === []) return 0;
  let sum = 0;
  for (let item of array) {
    sum += item;
  }
  return sum ? sum / array.length : sum;
}
