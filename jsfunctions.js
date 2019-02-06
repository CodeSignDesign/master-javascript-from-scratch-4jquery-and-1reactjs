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

function shopping() {
    if (arguments.length >= 2) {
        alert('You are granted 20% discount!');
    } else if (arguments.length <= 1) {
        alert('You are not getting any discount!')
    }
}
shopping("Milk", "Bread");