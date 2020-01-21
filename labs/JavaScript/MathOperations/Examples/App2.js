//Addition
console.log("addition");
var x = 1;
var y = 2;
var z = x + y;  //3 is assigned to z
x = x + z;  //4 is re-assigned to x
console.log(z);   //3 is printed to the console
console.log(x + y);   //6 is printed to the console
console.log(x + 10);   //14 is printed to the console
console.log(10 + 10); //20 is printed to the console

//Substraction
console.log("substraction");
var x2 = 1;
var y2 = 2;
var z2 = x2 - y2;   //-1 is assigned to z
x2 = x2 - z2;   //2 is re-assigned to x
console.log(z2);   //-1 is printed to the console


console.log("x2 - y2 = " + (x2 - y2));   //-3 is printed to the console

console.log(x2 - 10);   //-10 is printed to the console
console.log(10 - 10);   //0 is printed to the console

//Multiplication
console.log("multiplication");
var x3 = 1;
var y3 = 2;
var z3 = x3 * y3;  //2 is assigned to z
x3 = x3 * z3;  //2 is re-assigned to x
console.log(z3);  //2 is printed to the console
console.log(x3 * y3);  //4 is printed to the console
console.log(x3 * 10);   //20 is printed to the console
console.log(10 * 10);   //100 is printed to the console

//Division
console.log("division");
var x4 = 1;
var y4 = 2;
var z4 = y4/x4;   //2 is assigned to z
x4 = z4/x4;   //2 is re-assigned to x
console.log(z4);   //2 is printed to the console
console.log(x4/y4);   //1 is printed to the console
console.log(x4/10);   //.2 is printed to the console
console.log(10/10);   //1 is printed to the console

//modulus
console.log("modulus");
var x5 = 1;
var y5 = 2;
var z5 = x5%y5;     //1 is assigned to z
x5 = x5%z5;     //0 is re-assigned to x
console.log(z5);   //1 is printed to the console
console.log(x5%y5);   //0 is printed to the console
console.log(x5%10);   //0 is printed to the console
console.log(10%10);   //0 is printed to the console

//unary operators
console.log("unary operators");
var x6 = 1;
console.log(x6++);  //1 is printed to the consol, then x is incremented
console.log(++x6);  //x is incremented first, then it's value, 3, is printed to the consol.

//Math object
console.log("math object");
var x7 = 17;
console.log(Math.sqrt(x7));
console.log(Math.PI);

