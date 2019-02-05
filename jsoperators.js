// JavaScript OPERATORS 
/**
 * UNARY OPERATORS try to convert everything to number and when we use + or - operator ther try to use mathematical conversion
 * BOOLEAN OPERATORS - logical ! (NOT), && (AND), || (OR)
 * MULTIPLICATIVE OPERATORS
 * ADDITIVE OPERATORS
 * RELATIONAL OPERATORS
 * EQUALITY OPERATORS
 * CONDITIONAL OPERATORS
 * ASSIGNMENT OPERATORS
 * COMMA OPERATORS
 */ 

 // UNARY OPERATORS is operator THAT WORKS ONLY ON ONE VALUE
// var age = 50;
// age++; // POSTFIX WAY
// console.log(age);

// var age2 = 50;
// --age2; // PREFIX 
// console.log(age2);

// CONVERSION 
// var str1 = '01';
// var str2 = '1.1';
// var str3 = 'zzz';
// str1 = +str1;
// console.log(str1);
// str2 = +str2;
// console.log(str2);
// str3 = +str3;
// console.log(str3);

// var str1 = '01';
// var str2 = '1.1';
// var str3 = 'zzz';
// str1 = -str1;
// console.log(str1);
// str2 = -str2;
// console.log(str2);
// str3 = -str3;
// console.log(str3);

// BOOLEAN OPERATORS - logical ! (NOT), && (AND), || (OR)
// => ! (NOT) OPERATOR
// alert(false); // false
// alert(!false); // NOT FALSE = TRUE
// alert(!!false); // false

// => && (AND) OPERATOR always evaluate 1st value
// var result = true && "Hello CodeSign";
// var result = false && "Hello CodeSign";
// console.log(result);

// => || (OR) OPERATOR => LOGICAL || (or) WORKS SIMILAR TO &&// BUT IF EITHER VALUE IS TRUE IT WILL RETURN TRUE
// var result = true || true; // returns "true"
// var result = true || false; // returns "true"
// var result = false || true; // returns "true"
// var result = false || false; // only here return "false" !
// console.log(result);

// MULTIPLICATIVE OPERATORS *, / and % 
// EVEN IF WE HAVE STRINGS IT WILL TRY TO CONVERT TO NUMBER
// var result = 2 * '10';
// var result = 2 * 10;
// console.log(result);

// var result = 2 / '10';
// // var result = 10 / 2;
// console.log(result);

// MODULUS or REMINDER or LEFT OVER: % "%" '%'
// var result = 15 % 5;
// var result = 203 % 10;
// console.log(result);

// ADDITIVE OPERATORS