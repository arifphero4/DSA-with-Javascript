let price = [12, 17, 21, 23, 30, 33, 47, 76];
let target = 33;

function binarySearch(array, targetValue) {
  let start = 0;
  let end = array.length - 1;
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (array[mid] === target) {
      return "data found in index" + " " + mid;
    } else if (targetValue > array[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return "data not found!";
}

console.log(binarySearch(price, target));
