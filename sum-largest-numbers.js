function sumLargestNumbers(arr) {
  if (arr.length < 2) {
    throw new Error('Oops! Array must have at least two integers.');
  } else {
    arr.sort(function(a, b) {return b - a});
    return arr[0] + arr[1];
  }
}

console.log(sumLargestNumbers([29, 42, 22]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 1000]));