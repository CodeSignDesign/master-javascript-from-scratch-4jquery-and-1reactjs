// JavaScrip Data Types
// * * * * * * * * * * * 

/**
 * # SECTION 02
 * Boolean
 * Null
 * Undefined
 * Number 
 * String
 * Symbol
 */

//  STRING
// var message = 'CodeSign Design';
// alert(typeof message); // String

// NUMBER
// var message = 'CodeSign Design';
// message = 100;
// alert(typeof message); // Number

// OBJECT
// var computer = null;
// alert(typeof computer); //Object

// BOOLEAN
// var num1 = '100';
// var num2 = 100;
// var boolNum = num1 === num2;
// alert (typeof boolNum); // Boolean 
// alert (num1 === num2); // false

// NUMBER Floating Points
// var integerNumber = 100;
// var floatingPointNumber = 100.50;
// var float2 = 100.3;
// console.log(integerNumber, floatingPointNumber, float2);

// MAXIMUM AND MINIMUM NUMBERS
// alert(Number.MAX_VALUE);
// alert(Number.MIN_VALUE);

// NaN = Not a Number 
// var num = "100ksdfjaqw";
// alert (Number(num));

// !!! STRANGE THING IN JavaScript Should be true but it shows false
// alert(NaN === NaN);

// isNaN => IS NOT A NUMBER 
// alert(isNaN(NaN)); // true
// alert(isNaN(100)); // false
// alert(isNaN('100')); // false CONFUSING in JS
// alert(isNaN('blue')); // true
// alert(isNaN(true)); // false => true & false can be converted to number: true becomes 1 and false becomes 0

// parseInt();
// parseFloat();
// var num1 = parseInt('2107dragan');
// var num1 = parseInt('21.07'); // it show only float number
// alert(num1);

// var num2 = parseFloat('21.07');
// var num2 = parseFloat('21.07code'); // it parses ONLY FLOAT NUMBERS
// alert(num2);

// STRING DATA TYPE RegExp Object - REGULAR EXPRESSION OBJECT
// CHECK LIST in: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// REFERENCES: https://www.w3schools.com/jsref/jsref_obj_regexp.asp
// var name = "Code\n Sign"; // PUT the rest in NEW LINE: \n Find a new line character
// var name = "Code\t Sign"; // Find a tab character: \t 
// var name = "Code\b Sign"; // Find a match at the beginning/end of a word: \b 
// alert(name);

// LENGHT PROPERTY
var name = 'CodeSign Design';
console.log(name.length);

// CONVERT INT to STRING
var age = 50;
var ageStringify = age.toString();
console.log(typeof ageStringify);