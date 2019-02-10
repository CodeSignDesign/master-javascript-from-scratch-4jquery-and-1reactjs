/**
 * SECTION 09
 * JavaScript DATE and REGULAR EXPRESSION TYPE
 * => JavaScript DATE TYPE
 * => JavaScript REGULAR EXPRESSON TYPE
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

//  WE PUT "/" AND "/" and EVERYTHING WE WRITE INSIDE the BACKSLASHES IS A Tegualr Expresson
 var re = /hello/;
 var sentence = 'hello world'; // true
 console.log(re.test(sentence));

 // REGULAR EXPRESSON METHODS ARE test() and match()
 // We also use RegExp on String, they are "STRING METHODS"
//  YOU CREATE REGULAR EXPRESSION USING: 
//  new "keyword" OR IN BETWEEN "/"HERE"/"
var re = RegExp();