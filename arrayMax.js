let marks=[45,23,24,50,44];
max=marks[0];
for(let i=0;i<marks.length;i++){
    if(max<marks[i]){
      max=marks[i];
    }
}

console.log("Higest Value is: "+max);
