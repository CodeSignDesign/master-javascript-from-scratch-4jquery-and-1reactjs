// JavaScript Functions
// ===================
/**
 * With functions you can encapsulate statements
 * that can be run everywhere
 * functions can be called with name and arguments with comma
 * not necessary to return a value
 * functions stops executing on return statement
 * you have have multiple returns
 */
// function total(one, two) {
//     var totalThis = one + two;
//     return totalThis;
// }
// var result = total(1, 2);
// alert(result);
// var anotherResult = total(100, 500);
// alert(anotherResult);
// total(); // to envoke function we have to use parentheses

// function nameCheck(name) {
//     if (name == 'CodeSign') {
//         return 'Hi CodeSign';
//     } else {
//         return 'I dont know you' 
//     }
//     alert(Otinanai);
// }
// var result = nameCheck('CodeSign');
// alert(result);

// ARGUMENTS
/**
 * ARGUMENTS are not necessary and can be any data type or none
 * ARRAY like object represents arguments internally []
 * you can access each argument using Bracket Notation
 * determine number of arguments using Arraylength Propery
 */
// function sayHi(name) {
//     return name;
// }
// alert(sayHi("JavaScript CodeSign"));

// function sayHi(name) {
    // return arguments[0], arguments[2], arguments[1];
//     return arguments[0] + arguments[2] + arguments[1];
// }
// alert(sayHi("JavaScript ", 'JS Functions are Great', 'Code '));

// function shopping() {
//     if (arguments.length >= 2) {
//         alert('You are granted 20% discount!');
//     } else if (arguments.length <= 1) {
//         alert('You are not getting any discount!')
//     }
// }
// shopping("Milk", "Bread");

// var color = "blue"; // GLOBAL CONTEXT = WINDOW OBJECT

// function colorUpdate() {
//     var anotherColor = "green";
//     var color = "purple"; // return color; WILL NOT GO OUTSIDE AND LOOK FOR GLOBAL EXECUTION !!!
//     return color; // This is IN GLOBAL CONTEXT = SCOPE CHAIN
//     }
// console.log(colorUpdate());

// * SAMPLE WHAT WE CAN DO WITH THE CODE ABOVE:
// var whatever = function colorUpdate() {
// }
// colorUpdate();

/**
 * NO BLOCK LEVEL SCOPE !!!
 * ====================
 * in other programming languages such as C or Java...
 * code block enclosed by brackets have their own scope
 * but it's not true in JavaScript - if | for
 */
// if(true) {
//     var color = "red";
// } 
// console.log(color);

// function saycolor () {
//     var color = "green";
// }
// console.log(color); // HERE WE TRY TO ACCESS COLOR FROM GLOBAL SCOPE AND IT DOESN'T WORK !!!

// HERE THE MOST IMMEDIATE IS THE FUNCTON'S CONTEXT
// for ( var i = 0; i < 10; i++) {
//     //
// }
// console.log(i);

/**
 * JavaScript REFERENCE TYPE
 * ==============================
 * IN TRADITIONAL PROGRAMMING LANGUAGES SUCH AS JAVA ...
 * CLASSES ARE REFERENCE TYPE BUT IN 'JAVASCRIPT' IT'S OBJECT
 * OBJECT TYPE IS BASE FROM WHICH ALL OTHER REFERENCE TYPES
 * ... INHERIT BASIC BEHAVIOR. 
 * all REFERENCE TYPES such as: Array, Date and RegExp ...
 * ... INHERIT THEIR BASIC BEHAVIOR FROM OBJECT TYPE
 */