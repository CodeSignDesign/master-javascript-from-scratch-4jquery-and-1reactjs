/**
 * 11 - JavaScript Primitive Wrapper Type
 * 
 * String, Number, Boolean
 */

//  50 PRIMITIVE REFERENCE TYPE

// * * * String();
// This is REFERENCE TYPE
// var person = {
//     name: "DrCodeSign"
// };
// person.age = 50;
// console.log(person);

// PRIMITIVE TYPE behind the scene are created like an OBJECT
// var myString = "Hello CodeSign";
// myString.age = 50;
// console.log(myString);

// WE WRITE:
// var myString = 'Hello JavaScript';
// BEHIND THE SCENE:
// var myString = new String();
// HERE DOWN WE NEVER WRITE CODE LIKE THIS! The String is CONSTRUCTOR:
// * * * * .substring(); =! METHOD !
// var myString = new String('Hello CodeSign');
// var mySubString = myString.substring(3); // OUTPUT: "lo CodeSign"
// var mySubString = myString.substring(4); // OUTPUT: "o CodeSign"
// console.log(mySubString); // OUTPUT: "llo JavaScript"

// * * * Boolean();
// new Boolean(); // no need to crete this way: WE USE CONSTRUCTOR:
// WE WRITE:
// var num = 10;
//BEHIND THE SCENE IS CREATED: 
// * * * .toFixed(); =! METHOD !
// new Number(10);
// console.log(num.toFixed(2)); // OUTPUT: 10.00

/**
 * 51 STRING MANIPULATION METHODS
 * concat(); - slice(); - substr(); - substring();
 */
var strVal = "JavaScript";