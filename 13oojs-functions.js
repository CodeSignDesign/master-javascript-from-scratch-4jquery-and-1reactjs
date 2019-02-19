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
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        // IT IS A POINTER TO A FUNCTION BEING EXECUTED
        return num * factorial(num - 1);
    }
}
alert(factorial(5)); // 5 * 4 * 3 * 2 * 1 = 120