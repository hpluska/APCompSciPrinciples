var mm = "Hello";
var nx = "good buddy";
var c = mm + nx;
console.log //prints Hellogood buddy... notice no space between o & g

var mm = "Hello";
var nx = "good buddy";
console.log(mm+ " " + nx);//prints Hello good buddy..notice the space
console.log("Hello" + " good buddy"); //prints Hello good buddy

var x = 17;
var s = "Was haben wir gemacht?"//German for "What have we done"
var combo = s + "" + x;
console.log(combo);//prints Was haben wir gemacht?17

var theName = "Donald Duck";
var len = theName.length;
console.log(len);

var myPet = "Sparky the dog";
var smallPart = myPet.substring(4);
console.log(smallPart);

var smallPart2 = myPet.substring(4,12);
console.log(smallPart2);

var phrase ="Where is my car?";
var phraseLower = phrase.toLowerCase();

console.log(phraseLower);
console.log(phrase.toUpperCase());

console.log("What is the \"right\" way?");

var msg = "Here is one line \n and here is another";
console.log(msg);

var msg2 = "Everything\t\tis\t\ttabbed";
console.log(msg2);

var path = "C:\\SomeFile.pdf";
console.log(path);

var somePhrase = "Sparky the dog";
var firstLetter = somePhrase.charAt(0);
var lastLetter = somePhrase.charAt(somePhrase.length-1);
console.log("The first letter is " + firstLetter + ".  The last letter is " + lastLetter + ".");

var someText = "Take a Hike!";
someText = "\t\t" + someText + "\n";//add some space before and after
console.log("X" + someText.trim() + "X"); //prints XTake a HikeX

var someString = "This is a String!";
var someString2 = 'Here is another String';
var someString3 = "100";

var s = "\t\tLucky hocky puck\t\t";
var j = 6, z = 99;

var p = s.charAt(s.length - 1);
p += s.charAt(s.length-2);
p += s.charAt(s.length-3);
p += s.charAt(s.length-4);
p += s.charAt(s.length-5);
console.log(p);

var p1 = s.charAt(j);
console.log(p1);
var p2 = s.charAt(z - 90);
console.log(p2);
