let numbers = [10, 20, 10, 30, 10];
function removeDuplicate(numbers) {
  let uniqArray = [];
  for (let i = 0; i < numbers.length; i++) {
    var element = numbers[i];
    var index = uniqArray.indexOf(element);
    if (index == -1) {
      uniqArray.push(numbers[i]);
    }
  }
  return uniqArray;
}
console.log(removeDuplicate(numbers));