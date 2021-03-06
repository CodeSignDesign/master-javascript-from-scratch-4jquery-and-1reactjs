/**
 * 11 - JavaScript Primitive Wrapper Type
 * 
 * String, Number, Boolean
 */

//  50 PRIMITIVE REFERENCE TYPE

// * * * String();
// This is REFERENCE TYPE
// var person = {
//     name: "DrCodeSign"
// };
// person.age = 50;
// console.log(person);

// PRIMITIVE TYPE behind the scene are created like an OBJECT
// var myString = "Hello CodeSign";
// myString.age = 50;
// console.log(myString);

// WE WRITE:
// var myString = 'Hello JavaScript';
// BEHIND THE SCENE:
// var myString = new String();
// HERE DOWN WE NEVER WRITE CODE LIKE THIS! The String is CONSTRUCTOR:
// * * * * .substring(); =! METHOD !
// var myString = new String('Hello CodeSign');
// var mySubString = myString.substring(3); // OUTPUT: "lo CodeSign"
// var mySubString = myString.substring(4); // OUTPUT: "o CodeSign"
// console.log(mySubString); // OUTPUT: "llo JavaScript"

// * * * Boolean();
// new Boolean(); // no need to crete this way: WE USE CONSTRUCTOR:
// WE WRITE:
// var num = 10;
//BEHIND THE SCENE IS CREATED: 
// * * * .toFixed(); =! METHOD !
// new Number(10);
// console.log(num.toFixed(2)); // OUTPUT: 10.00

/**
 * ^ ^ ^ ^ 51 STRING MANIPULATION METHODS
 * concat(); - slice(); - substr(); - substring();
 */

 // * * concat();
// var strVal = "Java";
// var result = strVal.concat("Script ", '!');
// console.log(result);

// * * - slice(); - substr(); - substring();
// ^ ^ ^ ^ ^ REDO THIS IS VERY IMPORTANT ^ ^ ^ ^ ^
// * slice();
// ^ slice(); METHOD SELECTS THE ELEMENTS STARTING AT THE GIVEN START ARGUMENT, AND ENDS AT, BUT DOES NOT INCLUDE, THE GIVEN END ARGUMENT ^ ^ ^ 
// var strVal = 'hello world';
// alert(strVal.slice(3)); // "lo world" 
// alert(strVal.slice(3, 7)); // "lo w"

// * substring();
// ^ substring(); EXTRACTS THE CHARACTERS IN A STRING BETWEEN "start" and "end", NOT INCLUDING "end" ITSELF
// var strVal = 'hel*lo wor*ld';
// var strVal = 'hello world';
// alert(strVal.substring(3)); // "lo world"
// alert(strVal.substring(3, 7)); // "lo w" => MY RESULT @@@
// SEND MESSAGE to Ryan BECAUSE OF THE DIFFERENCE and also say thanks and give an advice to start orthophonic classes
// alert(strVal.substring(3, 7)); // "lo world"
// sample from: https://www.w3schools.com/jsref/jsref_substring.asp
// var str = "Hello world!"; // 0=H, 1=e, 2=l, 3=l, 4=o, 5=" ", 6="w", 7="o", 8="r", 9="l", 10="d" @@@###@@@
// alert(str.substring(1, 4)); // "ell"

// substr(); 
// ^ substr(); EXTRACTS PART OF STRING, BEGINNING AT CHARACTER AT SPECIFIED POSITION, AND RETURNS THE SPECIFIC NUMBER OF CHARACTERS.
// it gives the number of characters to return !!!
// var strVal = 'hello world';
// alert(strVal.substr(3)); // "lo world"
// alert(strVal.substr(3, 7)); // "lo worl"

// 52 STRING MANIPULATION METHODS using:
// indexOf(), trim(), toUpperCase(), toLowerCase()
/**
 * indexOf AND lastIndexOf RESULTS THE SAME BUT BEHIND THE SCENE THE SEARCH BEGINS FROM EITHER START (indexOf) or BY END (lastIndexOf)
 */
// var strVal = "Hello World";
// alert(strVal.indexOf('o')); // 4
// alert(strVal.lastIndexOf('o')); // 7 
// alert(strVal.indexOf('9')); // -1

// var strVal = "    Hello World    ";
// console.log(strVal); // shows space
// console.log(strVal.trim()); // TRIMS WHITE SPACE

// var strVal = "Hello World";
// console.log(strVal.toUpperCase()); // CONVERTS TO UPPERCASE
// console.log(strVal.toLowerCase()); // CONVERTS TO LOWERCASE

/** 53 STRING MANIPULATION METHODS using:
 * STRING PATTERN MATCHING
 * match(), search(), replace() AND split()
 */
/** match() METHOD => 
 * match is as same as calling RegExp object exec() method
 * match() accepts RegExp string or RegExp object.
 */

// var text = 'cat, bat, sat , fat';
// var pattern = /.at/; // this dot means it accepts all character except new line => IT IS USEFUL WHEN WE SEARCH CERTAIN TEXT AND . (DOT) MEANS 
 
// var matches = text.match(pattern);
// alert(matches.index); // 0
// alert(matches[0]); // cat
 
/** search() METHOD =>
 * search() method takes one argument as same as match.
 * it returns the index of first pattern occurance in the string
 * .....or -1 if its not.
 */
//  var text = 'cat, bat, sat , fat';
//  var pattern = /at/;
 
// var matches = text.search(pattern);
// alert(matches);
// console.log(matches); // 1 - RETURNS 1 WHICH IS THE FIRST POSITION OF "at" IN THE STRING
 
/** replace() METHOD =>
 * replace() takes two arguments, first argument RegExp object or a string
 * The second argument can be a string or a function.
 */

// var text = 'cat, bat, sat , fat';
// var pattern = /at/;
// var result = text.replace('at', 'ond'); // THIS ONE REPLACE THE FIRST INSTANCE AND THE REST REMAINS THE SAME
// console.log(result); // cond, bat, sat , fat

// var text = 'cat, bat, sat , fat';
// var result = text.replace(/(at)/g, 'ond'); // OK: cond, bond, sond , fond
// var result = text.replace(/(.at)/g, "word($1)"); 
// OK: word(cat), word(bat), word(sat), word(fat)
// console.log(result); //  
// alert(result); // 

/** split(); MEHTOD =>
* split() method separate the string into an array of substrings
 * .....based on a separator.
 */
var colorText = 'red, blue, green, yellow';
var colors1 = colorText.split(',');
console.log(colors1); // (4) ["red", " blue", " green", " yellow"]