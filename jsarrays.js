/**
 * JavaScript ARRAYS
 * ==================
 * Arrays hold any type of data such as STRING, NUMBER & OBJECT
 * Create array using new keyword or array literal []
 * you can pass item to array constructor or literal
 * access using bracket notation 
 * set value using bracket notation or length
 * detecting array - Array.isArray()
 * conversion methods - toString(), join()
 * stack methods - push(), pop()
 * queue methods - shift(), unshift()
 * reordering methods - reverse(), sort()
 * manipulation methods - concat(), slice(), splice()
 * location methods - indexOf(), lastIndexOf()
 * iterative methods - every(), some(), filter(), forEach(), map()
 * reduce method - reduce(), reduceRight()
 */

// * CREATE Array !!!
//  var colors = new Array('red', 'green', 'yellow');
//  console.log(colors);
//  var colors = []; // HERE: array literal > PREFERRED WAY
// var colors1 = ['purple', 'blue', 'green', 'white'];
// console.log(colors1);
// console.log(colors1.length);
// with brackets we can access the particular array
// console.log(colors1[2]);
// console.log(colors1[0]);
// console.log((colors1.length = 3));
// console.log(colors.length = 2);
// console.log((colors1.length = 100));
// console.log(Array.isArray(colors1));

// IT CAN HOLD ANY TYPE OF DATA: literal:['yellow', 'orange']
// var colors = ['purple', 'blue', 'green', 'pink', 99, ['yellow', 'orange']];
// alert(colors);
// alert(colors[2]); // access using bracket notation
// console.log(colors);
// console.log(Array.isArray(colors));
// ~ SET VALUE USING BRACKET NOTATION:
// alert(colors[2] = 'purple');
// ~ DETECTING ARRAYS USING Array.isArray()
// console.log(Array.isArray(colors));
// ANOTHER WAY THAT WE - CAN NOT - RELAY ON
// console.log(colors instanceof Array);

// * ARRAY CONVERSION METHODS - toString(), join()
// objects have: toString(), toLocalString() and valueOf()
// toLocalString() differs because the output is based on local time so in which country you are the result very

// var colors = ["red", "green", "blue"];
// console.log(colors.toString());
// console.log(colors.join(" "));
// console.log(colors.join(" - "));

// * ARRAY STACK METHODS push(), pop()
// Stack Method is also known as "LAST IN FIRST OUT" 
// push() accepts any number of args and add to the end of array
// pop() removes the last item in the array
// var colors = [];
// var allColors = colors.push("purple", "pink", "indigo");
// colors.push("purple", "pink", "indigo"); // WE CAN USE STRAIGHT push() method
// colors.push("Yellow");
// var removedItem = colors.pop();
// console.log(colors, "Removed item: ", removedItem);

// * ARRAY QUEUE METHODS: unshift(), shift()
// Queue Method is also known as FIRST in FIRST out
// unshift() ADDS any number of args to the FRONT of array
// shift() method REMOVES the FIRST item in the array and returns
// var colors = [];
// colors.unshift("Red", "Green", "Blue");
// colors.unshift("Purple", "Cyan");
// var removedItem = colors.shift();
// console.log(colors, "Removed: ", removedItem);

// * ARRAY REORDERING METHOD reverse(), sort()
// 1st: reverse();
// var values = [1,2,3,4,5];
// values.reverse();
// console.log(values);
// 2nd: sort();
// var values = [3,1,2,5,4];
// values.sort();
// console.log(values); // DON'T USE IT BUT IT SHOWS SAME AS DOWN
// console.log(values.sort()); // USE THIS CODE AS DEFAULT !!!
// // REVERS METHOD BEHIND THE SCENE REVERS THE NUMBERS TO STRING
// var values = [0,10,50,100,150];
// console.log(values.sort());

// var values = ["orange", "apple", "banana", "cherry"];
// console.log(values.sort());

// var values = [0,10,50,100,150];
// console.log(values.sort(compare));
// function compare(val1, val2) {
//     // return val2 - val1; // FROM bigger to smaller
//     return val1 - val2; // FROM smaller to bigger
// }

// * REORDERING METHOD USING ARRAYS: sort(STRING);
// var values = ["orange", "apple", "banana", "cherry"];
// console.log(values.sort(compare));
// function compare(val1, val2) {
//     if (val1 > val2) {
//         return -1;
//     } else if (val1 > val2) {
//         return 1;
//     } else {
//         return 0;
//     }
// }

// * Manipulation methods - concat(), slice(), splice()
// => concat(); 
// var colors = ["purple", "green", "pink"]
// var totalColors = colors.concat(['blue', 'violet']);
// console.log(totalColors);
// console.log("ORG: ", colors, totalColors); 
// for me ORG: needs "ORG: " & THIS DON'T WORK 'ORG:'!=> "ORG: " 

// => slice(); TAKES TWO ARGUMENTS
// * IF GIVEN ONLY ONE ARGUMENT, IT RETURNS ALL ITEMS BETWEEN
// "(including) THAT POSITION" AND "THE END" OF ARRAY
// var colors = ["purple", "green", "pink", "blue", "violet"];
// console.log(colors.slice());
// console.log(colors.slice(1));
// console.log(colors.slice(2));

// * IF GIVEN TWO ARGUMENTS, IT RETURNS ALL ITEMS BETWEEN "START"
// AND "THE END" POSITION, NOT INCLUDING "THE END" POSITION
// var colors = ["purple", "green", "pink", "blue", "violet"];
// console.log(colors.slice(1, 4));

// => splice() - INSERT / REPLACE / DELETE
// * DELETE USING TWO ARGUMENTS ..
// POSITION OF FIRST ITEM AND THE NUMBER ITEMS TO DELETE
// var colors = ["purple", "green", "pink", "blue", "violet"];
// var deletedItems = colors.splice(3, 1);
// var colors = ["purple", "green", "pink", "blue", "violet"];
// var deletedItems = colors.splice(3, 2); // 2nd ARG SHOWS HOW MANY ITEMS TO DELETE
// var colors = ["purple", "green", "pink", "blue", "violet"];
// var deletedItems = colors.splice(1, 3);
// var deletedItems = colors.splice(1, 0, "I am not Color", "many");
// var colors = ["purple", "green", "pink", "blue", "violet"];
// var deletedItems = colors.splice(1, 4, "I am not Color", "I am Human");
// console.log("Colors: ", colors, "Deleted: ", deletedItems);

// * insert/replace SAME AS ABOVE WITH 0 "ARGUMENTS" AND ITEMS TO IN

// * ARRAY LOCATION METHODS: indexOf(), lastIndexOf()
// Both indexOf() and lastIndexOf() accepts two arguments
// The item to look for ...
// ... and an optional index from which to start looking 
// var colors = ["Red", "Green", "Blue", "Black", "Purple", "Gold"];
// alert(colors.indexOf("Green"));
// var colors = ["Red", "Green", "Blue", "Black", "Purple", "Gold"];
// alert(colors.indexOf("Gold", 3));
// alert(colors.lastIndexOf("Purple")); // IT SEARCH FROM THE LAST TO THE FIRST
// START TO SEARCH FROM THE third (0,1,2,3 onwards) till the end
// var colors = ["Red", "Green", "Blue", "Black", "Purple", "Gold"];
// alert(colors.indexOf("rose")); // IT TRY TO FIND BUT IT IS NOT THERE, SO IT ALERT "-1" ? minus that one

// ** ITERATIVE METHONS - every(), some(), filter(), forEach(), map()
// EACH METHODS ACCEPTS TWO ARGUMENTS
// - A FUNCTION TO RUN ON EACH ITEM
// - AND OPTIONAL SCOPE OBJECT, IN WHICH TO RUN THE FUNCTION

// * every() - iterative method
// var numbers = [1,2,3,4,5,4,3,2,1];
// var everyResult = numbers.every(function(item, index, array){
    //     return item > 2;
    // });
    // console.log(everyResult); // NOT EVERY ITEM IS GREATER THEN 2, SO IT RETURNS "false"
    
// * some() - iterative method
// var numbers = [1,2,3,4,5,4,3,2,1];
// var someNumbers = numbers.some(function(item, index, array) {
    //     return item > 2; // SOME OF THE ITEMS ARE GREATER THEN "2";
    // });
    // console.log(someNumbers);
    
// * filter() - iterative method
// var numbers = [1,2,3,4,5,4,3,2,1];
// var filterResult = numbers.filter(function(item, index, array) {
//     return item > 2;
// });
// console.log(filterResult);

// * forEach() - DOES NOT NEED RETURN STATEMENTS
// var numbers = [1,2,3,4,5,4,3,2,1];
// numbers.forEach(function(item, index, array) {
//     // console.log(item);
//     console.log(item, index, array); // VERY POWERFUL
// });

// var numbers = [1,2,3,4,5,4,3,2,1];
// var mapResult = numbers.map(function(item, index, array) {
//     return "Num " + item;    
// });
// console.log(mapResult);

// * * REDUCE METHOD - reduce() "STARTS FROM BEGINING", reduceRight() "STARTS FROM THE END => FROM THE RIGHT"
// BOTH METHODS ITERATE OVER ALL ITEMS IN THE ARRAY
// ... AND BUILD UP A VALUE THAT IS ULTIMATELY RETURNED
// They take two arguments, first argument is a function call on each item
// Second optional argument is an initial value upon which the reduction is
// a function passed into accepts four arguments
// previousValue, currentValue, itemIndex, arrayObjectß

var numbers = [1,2,3,4,5];
var sum = numbers.reduce(function(prevValue, currentValue, index,array){
    return prevValue + currentValue;
});
console.log(sum);