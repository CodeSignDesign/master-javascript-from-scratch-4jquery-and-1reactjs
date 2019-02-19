/** SECTION 13 Object Oriented JavaScript - Functons
 * 59 FUNCTIONS
 * Function declaration
 * one of the key characteristics of function declaration is 
 * function declaration hoisting.
 */
// TYPE 1: FUNCTION DECLARATION are read before the code executes because it becomes available in a global context
// sayHi(); // hi
// function sayHi() {
//     alert('hi');
// }
/** TYPE 2: FUNCTION EXPRESSION
 * LOOKS LIKE A NORMAL VARIABLE ASSIGNMENT
 * ANONYMUS FUNCTION IS CREATED AND ASSIGNED TO THE VARIABLE
 * ANYTIME A FUNCTION IS BEING USED AS A VALUE, IT IS FUNCTION EXPRESSION = !!! Very Important !!!
 */ 
// sayHi(); // error - function does not exist yet
// var sayHi = function() {
//     alert('hi');
// }
/** 60. RECURSION 
 * RECURSIVE FUNCTION TYPICALLY IS FORMED WHEN A FUNCTION 
 * CALLS ITSELF BY NAME
*/
// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     } else {
//         // IT IS A POINTER TO A FUNCTION BEING EXECUTED
//         return num * factorial(num - 1);
//     }
// }
// alert(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120

/** 61. FUNCTION CLOSURES
* CLOSURES ARE FUNCTIONS THAT HAVE ACCESS TO VARIABLES FROM 
* ...ANOTHER FUNCTION'S SCOPE. THIS IS OFTEN ACCOMPLISHED BY 
* ...CREATING A FUNCTION INSIDE A FUNCTION
*/
// function eat(){
//     var fruit = 'Apple';
//     // this function is executed outside of its execution context
//     function watch(){
//         console.log(fruit);
//     }
//     return watch;
// } 
// var favFruit = eat();
// favFruit();

/** 62. OBJECT CLOSURES 
 * 'this' OBJECT IS BASED ON THE CONTEXT IN WHICH A FUNCTION IS EXECUTED
 * ANONYMUS FUNCTIONS ARE NOT BOUND TO AN OBJECT IN 'this' CONTEXT
 */
var name = "The window";
var object = {
    name: "The object",
    getName: function() {
        var that = this; // NEW ADDED !
        return function() {
            // return this.name; // USED IN 1st CASE
            return that.name;
        };
    }
};
alert(object.getName()());
console.log(object.getName()());