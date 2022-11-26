let array = [1, 3, 5, 7, 9];
let target = 9;

function linearSearch(array, targetValue) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetValue) {
      return i;
    }
  }
  return "targeted value not found!";
}

console.log(linearSearch(array, target));

// console.log("arif");
