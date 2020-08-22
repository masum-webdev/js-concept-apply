function inchToFeet(inch){
  var feet=parseInt(inch/12);
  var leftInch=inch%12;
  var mesaurment=feet+" feet "+leftInch+" inch";
  return mesaurment;
}

var myHeight=66.5;
console.log("My Height Measurment: "+inchToFeet(myHeight));

var mySisterHeight=63;
console.log("My Sister's Height Measurment: "+inchToFeet(mySisterHeight));