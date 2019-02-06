// JavaScript OPERATORS 
/**
 * UNARY OPERATORS try to convert everything to number and when we use + or - operator ther try to use mathematical conversion
 * BOOLEAN OPERATORS - logical ! (NOT), && (AND), || (OR)
 * MULTIPLICATIVE OPERATORS - "*" , "/" and "%"
 * ADDITIVE OPERATORS -
 * RELATIONAL OPERATORS - ">" "<" "<=" ">="
 * EQUALITY OPERATORS - == != === !==
 * CONDITIONAL /TERNERY OPERATORS - variable = expression ? true:false
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

// MULTIPLICATIVE OPERATORS "*" , "/" and "%" 
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

// HERE WE HAVE 2 NUMBERS
// var result = 20 + 30; 
// console.log(result);

// HERE WE HAVE STRING
// var name = "CodeSign";
// var age = 50;
// var sentence = 'My Name is ' + name + " and my age is " + age; // toString(); "METHOD"
// console.log(sentence);

// IF ONE OPERAND IS A STRING IT WILL =>
// with "+" it will CONVERT OTHER OPERAND ALSO TO A STRING
// var num1 = 10;
// var num2 = '10';
// var total = num1 + num2;
// console.log(total);

// with "-" it will CONVER OTHER OPERAND TO A NUMBER
// var num1 = 10;
// var num2 = '1';
// var total = num1 - num2; // Number();
// console.log(total);

// RELATIONAL OPERATORS - > < <= >= 
// WE USE THESE OPERATORS TO COMPARE 2 VALUES

// var result = 10 < 20;
// console.log(result);

// var result = 10 > 20;
// console.log(result);

// var result = 10 <= 20;
// console.log(result);

// var result = 10 >= 20;
// console.log(result);

// COMPARISON OF 2 STRINGS, they use NUMERICAL VALUES OF STRING LETTERS AND COMPARE THERE'S VALUE
// Source: https://ee.hawaii.edu/~tep/EE160/Book/chap4/subsection2.1.1.1.html

// var result = "Brick" > "alphabet";
// console.log(result);

// IF ONE VALUE IS STRING AND ANOTHER IS NUMBER, 
// COMPARISON WILL BE BASED ON NUMBER. 
// BECAUSE COMPARISON IS BASED ON NUMBER
// var result = "23" < 3; // false
// BECAUSE THEY ARE STRING - COMPARISONS BASED ON CHARACTER CODE
// var result = "23" < "3"; // true

// EQUALITY OPERATORS -> == === != !==
// console.log('1' == 1); // true
// console.log(1 != 1); // false
// console.log(false == 0); // true
// console.log(true == 1); // true

// IDETICAL = STRICT EQUAL OPERATORS
// console.log('1' === 1); // false
// console.log(1 !== '1'); // true

// CONDITIONAL /TERNERY OPERATORS - 
// variable = expression ? true:false

