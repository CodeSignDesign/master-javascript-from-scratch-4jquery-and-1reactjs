// JavaScript LOOPS
// JavaScript Statements
// ====================
/**
 * SECTION 05
 * if else
 * do while
 * while
 * for
 * for in
 * labeled
 * break continue
 * switch
 */
// if STATEMENT is flow-control statement.
// if STATEMENT EVALUATE A GIVEN CONDITION TO A Boolean true or false. 

// var num = 100;
// if (num < 50) {
//     alert('Yes it is grater than ' + num);
// } 
// else {
//     alert('No it is NOT greater than ' + num);
// }

// var n = 20;
// if (n >= 26) {
//     alert('Number is greater or equal to 26');
// } else if (n <= 24) {
//     alert('Number is smaller or equal to 24');
// } else {
//     alert('Number is 25 !');
// }

// do while LOOP: do {statement} while (expression);
// do while statement creates a loop that executes a block of code 
// at least once, before checking if the condition is true
// then it will repeat the loop as long as the condition is true. 
// do {
//     statement;
// } while (expression);
// num = 0;
// do {
//     num++;
//     console.log('Number: ', num);
// } while (num < 10); // will run 10 times 1~10

// num = 0;
// do {
//     num++;
//     console.log('Number: ', num);
// } while (num > 10); // will run only once: Number: 1

// num = 0;
// do {
//     num++;
//     console.log('Number: ', num);
// } while (num < 2); // will run twice: Number: 1, Number: 2

// while LOOP evaluates the contition first
// only then the code inside the condition execute
// var num = 0;
// while (num < 5) {
//     num++;
//     console.log('Num: ', num);
// }

// for LOOP
// for ( varInitialization; condition; postLoopExpression) { statement }
// for (var i = 0; i < 10; i++) {
//     alert(i);
// }

// for in STATEMENTS
// var person = {
//     name: "CodeSign",
//     age: 50,
//     address: 'Athens'
//     }
// for(item in person) {
//     alert(item);
// }
// for(item in window) {
//     console.log(item);
// }

// Labeled, Break and Continue Statements
// var num = 0;
// for (var i = 0; i < 10; i++) {
//     if(i === 5) {
//         break;
//     }
//     num++;
// }
// console.log(num);

// var num = 0;
// for (var i = 0; i < 10; i++) {
//     if(i === 5) {
//         continue;
//     }
//     num++;
// }
// console.log(num);

// NESTED STATEMENTS
// var num = 0;
// outerLabel: for (var i = 0; i < 10; i++) {
//     for (var ii = 0; ii < 10; ii++) {
//         if (i == 5 && ii == 5) {
//             // continue outerLabel;
//             break outerLabel;
//         }
//         num++;
//     }
// }
// alert(num);

// SWITCH STATEMENT
// each case in switch statement checks if expression is equal to the value
// without break statement, code execution falls through to default case
// var i = 100;
// switch(i) {
//     case 10:
//     alert('10 Alert');
//     break;
//     case 20:
//     alert('20 Alert');
//     break;
//     default:
//     alert('Nothing Found');
// }

var i = 'Hi';
switch(i) {
    case 'Hi':
    alert('Hi there');
    break;
    case 'Hello':
    alert('Hello There');
    break;
    default:
    alert('No one there...');
}
