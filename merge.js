function merge(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  } else if (arr2.length === 0) {
    return arr1;
  } else {
    for (let i = 0; i < arr2.length; i++) {
      arr1.push(arr2[i]);
    }
    arr1.sort(function(a, b) {
      return a - b;
    });
    return arr1;
  }
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);