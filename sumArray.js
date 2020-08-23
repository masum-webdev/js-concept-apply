// let numbers = [10, 20, 30, 40, 50, 60];
function getArraySum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + numbers[i];
  }
  return total;
}
// console.log("Total result: " + getArraySum(numbers));
console.log("Total: "+getArraySum([10,1,2,3]));