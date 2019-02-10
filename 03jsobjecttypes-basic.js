// JavaScript Object Types - BASIC
// * * * * * * * * * * * * 

/** 
 * SECTION 03
* Creating Project - {} =>USING OBJECT LITERAL, + New
* Accessing Properties - []
* Accessign Object Properties with Variables
* Updating Object Properties
* Adding New Properties
* Delete Properties
* Object has Property?
* Nested Object
*/

// var person = new Object();
// person.name = "CodeSign";
// person.age = 50;
// console.log(person.name, person.age);

// USING OBJECT LITERAL & SQUARE BRACKET NOTATION: 
// * Creating Project - {}, New
// * Accessing Properties - []
// var person = {
//     name: "CodeSign Design",
//     age: 50,
//     'my fav songs': 'Wonderful Tonight'
// }
// console.log(person['name'], person['my fav songs']);

// var person = {
//     name: "CodeSign Design",
//     age: 50,
// }
// var objName = person.name;
// console.log(objName, person.age);

// METHODS : VERY IMPORTANT !
// Updating Object Properties
// var person = {
//     name: "CodeSign Design",
//     age: 50,
//     sayName: function() {
//         return this.name;
//     }
// };
// person.name = "Code Code & Code";
// console.log(person.sayName(), person.age);

// Adding New Properties
// var person = {
//     name: "CodeSign Design",
//     age: 50,
//     sayName: function() {
//         return this.name;
//     }
// };
// person.name = "CodeSign & CodeDesign § ";
// person.address = "Athens, Greece";
// console.log(person.sayName(), person.age, person.address);

// Delete Properties
// var person = {
//     name: "CodeSign Design",
//     age: 50,
//     sayName: function() {
//         return this.name;
//     }
// };
// person.name = "CodeSign & CodeDesign § ";
// person.address = "Athens, Greece";
// delete person.address;
// console.log(person.sayName(), person.age, person.address);

// Object has Property? Answer is Boolean ??? Always
// var person = {
//     name: "CodeSign Design",
//     age: 50,
//     sayName: function() {
//         return this.name;
//     }
// };
// person.name = "CodeSign & CodeDesign § ";
// person.address = "Athens, Greece";
// delete person.address;

// console.log ("Has this property? ", person.hasOwnProperty('age'));

// console.log(person.sayName(), person.age, person.address);

// Nested Object
var person = {
    name: "CodeSign",
    age: 50,
    sayName: function() {
        return this.name;
    }, 
    likes: {
        book: 'Learning JS',
        movies: {
            one: 'Nosso Lar',
            two: 'Master JavaScript from Scratch',
            three: 'Develop Joomla Templates & Extensions'
        },
        song: 'What a Wonderful World'
    }
};

// console.log(person.likes.movies.two);
// WE CAN COMBINE "DOT" NOTATION & "SQUARE BRACKET" NOTATION
console.log(person.likes['movies'].two);
