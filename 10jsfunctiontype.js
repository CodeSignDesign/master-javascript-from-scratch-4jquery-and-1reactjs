/** 
 * SECTION 10
 * JavaScript FUNCTION TYPE
 * FUNCTIONS ARE OBJECTS, FUNCTION NAMES ARE JUST POINTERS
 * EACH FUNCTION IS AN INSTANCE OF A FUNCTION TYPE
 * FUNCTION NAME WITHOUT () ACCESS THE FUNCTION BUT DOES NOT EXECUTE FUNCTION
 */
// function total(num1, num2){
//     return num1 + num2;
// }

// new Array(); // create array with it's constructor
// new Object(); // create object
// new Object(); {} []
// console.log(total(1,2)); // => THIS IS OKKK!!!
// console.log(total()); // => OUTPUT: NaN
// var total = new Function('num1', 'num2', 'return num1 + num2'); // this is not recomended => this line of var * = new Function() but it is possible
// console.log(total(1, 2)); // * * => THIS JUST PRINT FUNCTION ITSELF and IN SOME SITUATIONS IT CAN BE SUPER USEFUL

// * * FUNCTION DECLARATON vs FUNCTION EXPRESSION
// * 1st sample of typical FUNCTION DECLARATION
// PROBLEM WITH FUNCTION DECLARATION IS THAT BECOME HOISTED
// IT MEANS THAT IT BECOME AVAILABLE IN GLOBAL EXECUTION CONTEXT
// function total(num1, num2) {
//     return num1 + num2;
// }
// console.log(total(3,7));

// var color = 'red'; // THIS BECOME AVAILABLE in the WINDOW OBJECT

// console.log(total(3,7)); // THIS SHOULD NOT WORK BUT IT WORKS BECAUSE IT IS AVAILABLE IN THE GLOBAL EXECUTION CONTEXT
// function total(num1, num2) {
    //     return num1 + num2;
    // }
// * FUNCTION DECLARATION sample down here:
// console.log(total(3,7));
// function total(num1, num2) {
//     return num1 + num2;
// }

// * FUNCTION EXPRESSION sample down here: 
// IT'S RECOMENDED TO USE Function Expression as much as possible
// BECAUSE YOU DON'T WANT YOUR FUNCTION BE HOISTED IN GLOBAL EXECUTION CONTEXT
// var total = function(num1, num2) {
//     return num1 + num2;
// }
// console.log(total(3,7));

// here is sample where we can pass functions as arguments that's how flexible functions are:
// function callingAFunction(myFunc, myArgs) {
//     return myFunc(myArgs);
// }
// function addHundred(num) {
//     return num + 100;
// }
// var result = callingAFunction(addHundred, 1000);
// console.log(result); // 1100

// * * FUNCTION'S ARGUMENT OBJECT PROPERTIES callee(), caller()
/**
 * WHAT IS INSIDE FUNCTIONS ?
 * TWO SPECIAL OBJECTS ARE INSIDE - "ARGUMENTS", THIS 
 * 
 */
/**
 * 47 ~ ~ ~  FUNCTION ARGUMENT OBJECT PROPERTIES ~ ~ ~
 * What is inside functions?
 * Two special objects are inside - "arguments", "this"
 * aftuments object is array like object, containing all arguments
 * arguments property - callee - pointer to the function
 * ... that owns the argument
 * function object also has additional property 'caller' which contains 
 * ... a reference to the function or null
 * 
 * "this" is reference to the execution context that the function
 * is operating on
 * when a function is called in a global scope of a web page
 * ... this points to a window object
 */

//  function factorial(num) {
//      if (num < 1) {
//          return 1;
//      } else {
//         //  return num * factorial(num  - 1);
//         return num * arguments.callee(num - 1);
//      }
//  }
//  console.log(factorial(5));

// function outside() {
//     inside();
// }
// function inside() {
//     console.log(inside.caller);
//     // alert(arguments.calle.caller);
// }
// // displays source code of outer 
// console.log(outside());


// 48 FUNCTION'S "this" OBJECT - it calls window object in global scope
// window.color = 'red';
// var obj = {color: 'blue'};
// function sayColor() {
//     console.log(this.color);
// }
// sayColor(); // red => GLOBAL
// obj.sayColor = sayColor;
// obj.sayColor();

/**
 * 49 FUNCTION METHODS: apply(), call(), bind()
 * The apply() method accepts two arguments.
 * The value of this inside the function and an array of arguments
 * The second argument may be an instance of Array
 * but it can also be the arguments object
 */

// * apply() - WE USE: arguments, arguments object
// function sum(num1, num2) {
//     return num1 + num2;
// }
// function callingSum(num1, num2) {
//     // return sum.apply(this, arguments);
//     return sum.apply(this, [num1, num2]); // using array arguments
// }
// console.log(callingSum(111, 111));

// * call() - USE: exact arguments (NOT: arrays, arguments object
// function sum(num1, num2) {
//     return num1 + num2;
// }
// function callingSum(num1, num2) {
//     return sum.call(this, num1, num2); // using 
// }
// console.log(callingSum(111, 111));

// * bind() - 
window.color = 'red'; // object global
var obj = { color: 'blue' }; // object on context
function sayColor() {
    alert(this.color);
}
var objSayColor = sayColor.bind(obj); // HERE WE bind() to this (global) object
objsayColor();