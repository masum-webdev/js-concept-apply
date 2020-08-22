//for loop method
// let fibo=[0,1];
// for(let i=2;i<=10;i++){
//   fibo[i]=fibo[i-1]+fibo[i-2];
// }

//while loop method
// let fibo=[0,1],i=2;
// while(i<=10){
//   fibo[i]=fibo[i-2]+fibo[i-1];
//   i++;
// }

//recursive method
function fiboSeries(n){
  if(n==0){
    return [0];
  }
  if(n==1){
    return [0,1];
  }
  else{
    let fibo=fiboSeries(n-1);
    let nextElement=fibo[n-1]+fibo[n-2];
    fibo.push(nextElement);
    return fibo;
  }
}
console.log(fiboSeries(10));