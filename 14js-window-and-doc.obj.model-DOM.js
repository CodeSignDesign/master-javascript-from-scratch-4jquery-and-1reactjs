/** WINDOW AND DOCUMENT OBJECT MODEL - DOM
 * = = = > 64 BOM - Browser Object Model
 * html DOCUMENT IS REPRESENTED AS ELEMENT nodes
 * 
 * WINDOW OBJECT PROPERTIES: 
 * window.document
 * location - href / pathname
 * localStorage, 
 * window.localStorage.getItem : 
 * => window.localStorage.getItem("name");
 * navigator.geolocation, some sites asks for your 
 * history - back/forward
 * => window.history.back()
 * => window.histry.forward()
 * => window.open(http://url)
 * WINDOW OBJECT METHODS:
 * alert()
 * prompt()
 * open/close
 * setInterval()
 * setTimeout()
 */

 // prompt() EXERCISE:
// var result = prompt('What is your name?');
// if (result !== null) {
//     alert('Welcome ' + result);
// }

// * * * 65 setInterval() & setTimeout()
// JavaScript execution in browser is single-threaded
// {single-threaded MEANS ONE COMMAND AT A TIME ! }
// you can use setInterval or setTimeout to run the code in specific time

// 1st ARGUMENT: function, 2nd ARGUMENT: duration ! ! !
// setTimeout(function() - THIS SAMPLE IS ONE TIME EXECUTION AFTER 3 SECONDS: 
// setTimeout(function(){
//     alert("Hello Coder"); 
// }, 3000);

// setInterval() SAMPLE: IT COMES EVERY 3 seconds
// setInterval(function(){
//     alert("Hello Coder"); 
// }, 3000);

// * * * 66 DOM write, set, create ELEMENTS
// document.write('Hello Coder, writing in document !')
// IMPORTANT: I GOT MESSAGE:
// [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write
// GOT MESSAGE:
// [Violation] Avoid using document.write(). https://developers.google.com/web/updates/2016/08/removing-document-write

// var div = document.getElementById('root');
// div.getAttribute('id');
// I CAN: setAttribute() TO ADD ELEMENTS IN JAVASCRIPT
// 
// div.setAttribute('id', 'hahaha');
// alert(div.getAttribute('id'));

// CREATE BUTTON: 
// EVERY TIME I CLICK THE BUTTON IT ADD NEW LINE OF h1 text
function myClick(){
    var div = document.createElement('h1');
    var text = 'Hello CodeDeSigner';
    var newH1 = document.body.appendChild(div);
    newH1.innerText = text;
}