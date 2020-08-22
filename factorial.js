//for loop
function factorial(num){
  let factorial=1;
  for(let i=1;i<=num;i++){
    factorial=factorial*i;
  
  }
  return factorial;
}


// // while loop
// function factorial(num){
//   let factorial=1, i=1;
//   while(i<=num){
//     factorial=factorial*i;
//     i++;
//   }
//   return factorial;
// }

//recursive method
function factorial(num){
  if(num==0){
    return 1;
  }else{
    return num*factorial(num-1);
  }
}

console.log(factorial(5));