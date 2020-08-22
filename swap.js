let a=6;
let b=5;
console.log("Before Swaping: a:"+a+" b:"+b);

// //process-1 with temp
// let temp=a;
// a=b;
// b=temp;
// console.log("After Swaping: a:"+a+" b:"+b);

//process 2 without temp
// a=a+b;
// b=a-b;
// a=a-b;
// console.log("After Swaping: a:"+a+" b:"+b);

//process 3
[a,b]=[b,a];
console.log("After Swaping: a:"+a+" b:"+b);
