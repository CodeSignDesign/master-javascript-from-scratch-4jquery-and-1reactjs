/**
 * SECTION 09
 * JavaScript DATE and REGULAR EXPRESSION TYPE
    * => JavaScript DATE TYPE
    * => JavaScript Regular Expression TYPE
 */

// The DATE TYPE stores dates as the number of milliseconds that have passed since midnight on January 1, 1970 UTC (Universal Time Code)
// !!! moment.js - POPULAR LIBRARY for DATE FORMATING METHODS

//  var date = new Date();
//  console.log(date);

// Get: fullYear
// var fullYear = new Date().getFullYear();
// console.log(fullYear);

// To create a date based on ANOTHER DATE or TIME you must pass in the MILLISECOND REPRESENTATION of the date (the number of milsec after 1970 

/**
  * JavaScript REGULAR EXPRESSON TYPE
  * is a cequence of characters that forms a pattern
  * var re = /hello/
  * Regular Expression methods
  * test() and match()
  * string methods:match, search, replace, split
*/

// WE PUT "/" AND "/" and EVERYTHING WE WRITE INSIDE the BACKSLASHES IS A Tegualr Expresson
// var re = /hello/; // +> TO CREATE REGULAR EXPRESSION !!!!
// // var sentence = 'hello world'; // true
// var sentence = 'hell world'; // false
// console.log(re.test(sentence)); // TO TEST THIS SENTENCE

// REGULAR EXPRESSON METHODS ARE test() and match()
// We also use RegExp on String, they are "STRING METHODS"
//  YOU CREATE REGULAR EXPRESSION USING: 
//  new "keyword" OR IN BETWEEN "/"HERE"/"
// var re = RegExp(); // +> TO CREATE REGULAR EXPRESSION !!!!

// var re = /^\d{3}$/; // EXPLANATION:
// // console.log(re.test("hello")); // false OK 
// console.log(re.test("123hello world")); // false OK
// console.log(re.test("123")); // true OK 

// var re = /^\d{3}$/; // EXPLANATION:
// console.log(re.test("123")); // true OK 
// console.log(re.test("123hello world")); // false OK

// var re = /^\d{3}/; // WITHOUT "$" THAT ENDS SEARCH
// console.log(re.test("123hello world")); // true

/**
 * ^ - keyboard Shift + 6: Represents beginning
 * \d - "d" MEANS DIGIT and "\" MEANS ESCAPE DIGIT
 * {3} - HOW MANY DIGITS YOU WANT TO FIND: here 3 digits
 * $ - DOLLAR SIGN MEANS "THE END" = TEST ENDS HERE !!!
 * MORE ABOUT REGULAR EXPRESSIONS SEE LINKS:
 * https://www.w3schools.com/jsref/jsref_obj_regexp.asp
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
 * Now here REMEMBER Important: !!!
 * 
 * IMPORTANT MEANINGS: 
 * d - digit
 * b - begining OR ??? "^"
 * e - end OR ??? "$"
 * g - global
 */

