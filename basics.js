var a = 10;
let b = 2;
// let doesnt allow redeclation of the same variable
const c = 1;
var i = 5; //number datatype
console.log(typeof i);
var a = "s"; //string
console.log(typeof s);
var x; //unassigned null
var y = null;
var bol = true;
console.log(typeof bol);
//other datatypes:undefined,Symbol,BigInt,Date,Array,Object
//Arrays-
a = [12, 3, 65, 7]; //this is an object datatype
console.log(a[2]);
a[2] = 2;
console.log(a);
a[4] = 9;
a[30] = 100;
//object datatype
//represents a real entity
var fan = {
  numOfBlades: 4, //camel case
  rpm: 3000,
  color: "blue",
  company: "Bajaj",
  motor: {
    company: "CG",
    power: 50,
    cores: 24,
  },
};
console.log(fan.motor.cores);

//Operators
//arithmetic operator
a1 = 3;
b1 = 4;
console.log(a1 % b1); //remainder

//assignment operator
a = 8;
a *= 3;
console.log(a--);
