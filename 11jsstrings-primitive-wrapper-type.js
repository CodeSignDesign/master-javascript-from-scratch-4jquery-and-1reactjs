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
