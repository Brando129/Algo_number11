// Shift array values: drop the first and leave ​'0'​ at end.

function arrShift(arr){
  for (var idx = 1; idx < arr.length; idx++){
    arr[idx - 1] = arr[idx];
}
    arr[arr.length - 1] = 0;

  return arr;
}

// console.log(arrShift([1, 3, 4, 2, 5, 7, 9, 8, 6]))