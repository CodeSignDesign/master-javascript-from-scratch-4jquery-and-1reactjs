// SECTION: 15 - JQUERY BASICS

// * * * 68 jQuery Bootstrap Setup * * * 
//  DOWNLOAD Starter template from Bootstrap website

// alert('Hello Coder !');

// START WRITING JQUERY - TEST: OK ! ! ! 
// $(document).ready(function(){
//     // EVERY CODE WE WRITE IS HERE: All jQuery CODE !!!
//     alert('Hello Coder !');
// });

// * * * 69 TARGETTING ALL ELEMENTS USING JWQUERY * * * 
// - ADDED ANIMATE.CSS minified FROM: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css
// - NOT ADDED ANIMATE.CSS, this is just a reference: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css

// $(document).ready(function(){
//     // TARGET ALL THE "ELEMENTS" IN THE "DOM" WITH THE NAME OF "BUTTON"
//     $('button').addClass('');
// });
                    // HERE OUTCOME ON PAGE PROBLEM: NOT SAME RESULT
// $(document).ready(function(){
//     $('button').addClass('animated bounce');
// });

// * * * 70 TARGETTING class AND id's IN jQuery * * * 
    /** ANIMATED CSS 
     * ATTENTION SEEKERS: bounce, flash, pulse, shake, swing, tada, wobble, jello, heartBeat
     * BOUNCING ENTRANCES: bounceIn, bounceInDown, ..Left, ..Right, ..Up
     * BOUNCING EXITS: bounceOut, bounceOutDown, #sameAsAbove       s 
     * FADING EXTRANCES - FADING EXITS: fadeInUpBig 
     * FLIPPERS, LIGHTSPEED, ROTATING ENTRANCES, ROTATING EXITS
     * zoomIn, slideInUp
     */

// $(document).ready(function(){
    // $('button').addClass('animated bounce');
    // $('.btn-success').addClass('shake');
    // $('#target6').addClass('slideInRight');
    // $('#target4').addClass('fadeInUp');
    // $('button').removeClass('btn-success');

// * * * 71 CUSTOM CSS, TARGETTING PROPERTIES AND ADDING HTML IN jQUERY * * * 
// TARGETING THE ELEMENTS PROPERTIES:
// css, html, text, prop, addClass, removeClass, add html
    // $('#target1').css('text-decoration', 'line-through');
    // $('#target1').css('color', 'red');
    // FOR MULTIPLE OBJECTS USE: ! CURLY BRACES: ({name: 'value', nm: 'val'});
    // $('#target3').css({color: 'white', background: 'purple'});
    // how do we CONTROL THE PROPERTIES
    // $('#target2').prop('disabled', true);
    // TARGET PAGE ELEMENTS
    // $('h1').html('Learning jQuery is so much FUN !');
    // $('h1').html('Learning <strong>jQuery</strong> is so much FUN !');
    // $('h1').text('Learning jQuery is FUN !');

// * * * 72 REMOVE, APPEND AND CLONE in JQUERY  * * * 
// REMOVE ELEMENT:
// $('#target1').remove();
// APPEND ELEMENT WITH: appendTo() COMMAND
    // $('#target4').appendTo('.left');
// clone() - appndTo() FUNCTIONS: Chain 2 Methods SAMPLE: 
    // $('.left').clone().appendTo('.right');

    // * * * 73 TARGET PARENT, CHILD, EVEN AND ODD ITEMS IN JQUERY * * * 
// Targeting: parent, children, specific children and even & odd numbers
    // $('h2').parent().css('backgroundColor', 'yellow');
    // $('.right').children().css('color', 'red');
// TARGETING SPECIFIC CHILD: Sample 1::
// $('.target:nth-child(2)').addClass('flash');
// TARGETING SPECIFIC CHILD: Sample 2:    
    // $('.target:nth-child(4)').addClass('animated swing');
    // TARGETING odd numbers: VERY USEFUL WHEN WORKING WITH TABLES
    // $('.target:odd').addClass('animated swing');
// TARGETING even numbers: VERY USEFUL WHEN WORKING WITH TABLES
    // $('.target:even').addClass('animated swing');

    // AND PUT ALL QUERIES HAVING SEARCH "javascript"
    //('animated swing');

    //  * * * 74 JQUERY OF VANILLA JAVASCRIPT * * 
    // * * * 74 JQUERY OF VANILLA JAVASCRIPT * * * 
// IF YOU DON'T WANT TO WRITE JQUERY THERE IS SITE: ...
// ...YOU MIGHT NOT NEED jQuery...
// http://youmightnotneedjquery.com/

    // * * * 75 HANDLING EVENTS WITH JQUERY * * * 
// USING click EVENTS
// 1st EXAMPLE: 'click'
// 1. TAKE THE ELEMENT, TARGET THE ELEMENT, USE THE .on METHOD, TAKES TWO ARGUMENTS, 1st IS THE EVENT ARGUMENT WHICH IS: 'click', AND THEN FUNCTION WHICH RETURNS WHATEVER WE WANT TO, in this case we put HTML
    // $('.question').on('click', function(){
    //     $('.answer').html('jQuery is the best thing is the World ! ');
    // });
// 2nd EXAMPLE: 'mouseover'
// $('.question').on('mouseover', function(){
//     $('.answer').html('jQuery is the best thing is the World ! ');
// });

// CLOSING: $(document).ready(function(){ => IMPORTANT ! ! !
// });

    // * * * 76 AJAX REQUEST TO EXTERNAL API * * * PROBLEM # # # 
// JSON = JavaScript OBJECT NOTATION, typical JSON NOTATION GOES LIKE THIS:
// the DIFFERENCE: YOU HAVE TO WRAP IT IN "QUOTE" => BOTH: "NAME" & "VALUE"
// {
//     "name": "value",
//     "anothername": "anothervalue"
// }
// we are going to make API CALL => 3rd party APIs:
// for example: "Weather API", "Movie API"
// WHAT WE DO: MAKE API "CALL" "REQUEST" to GET THAT DATA
// IMPORTANT => 'JSON' EXPLANATION for JQUERY PAGE: 
// http://youmightnotneedjquery.com/

// $(document).ready(function(){
//     $.getJSON('/my/url', function(data){
//     })
// });

// EXPLANATION IN VANILLA JS:
// var request = new XMLHttpRequest();
// request.open('GET', '/my/url', true);
// request.onload = function() {
//   if (request.status >= 200 && request.status < 400) {
//     // Success!
//     var data = JSON.parse(request.responseText);
//   } else {
//     // We reached our target server, but it returned an error
//   }
// };
// request.onerror = function() {
//   // There was a connection error of some sort
// };
// request.send();

// $(document).ready(function(data){
    // LIVE EXAMPLE: Algolia Search API-HN 
    // https://hn.algolia.com/api
    // TAKE FROM PAGE THIS SEARCH API URL: 
    // http://hn.algolia.com/api/v1/search?query=
    // AND FETCH ALL QUERIES EQUALS TO "javascript"
    // http://hn.algolia.com/api/v1/search?query=javascript
    // var url = 'http://hn.algolia.com/api/v1/search?query=javascript';
    
//     $(document).ready(function(data){
//         var url = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty';
// // var url = 'https://newsapi.org/v2/top-headlines?country=ch&apiKey=307cd047de4d482e8d1d6c3e788a28ad';
//     $.getJSON('url', function(data){
//         console.log(data instanceof Object);
//         if (Array.isArray(data)) {
//             console.log('This is Array');
//         } else {
//             console.log('This is not Array')
//         }
//     });

// });

//  JQUERY => SOURCE FOR HTML PAGE: <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>


// * * * 77 AJAX RESPONSE - OBJECT OR ARRAY? 

// var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=307cd047de4d482e8d1d6c3e788a28ad';

// MY NEWS API FROM: newsapi.org WEB SITE:
// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=307cd047de4d482e8d1d6c3e788a28ad';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
    //         console.log(response.json());
    // })
    
// THIS CODE DON'T WORK ! ! ! ! ! ! !
// $(document).ready(function(data){
// var url = 'https://newsapi.org/v2/top-headlines?country=ch&apiKey=307cd047de4d482e8d1d6c3e788a28ad';
//     $.getJSON('url', function(data){
//         console.log(data instanceof Object);
//         if (Array.isArray(data)) {
//             console.log('This is Array');
//         } else {
//             console.log('This is not Array')
//         }
//     });

// });

// * * * * 78 Display AJAX RESPONSE IN THE BROWSER * * * * 
$(document).ready(function() {
var url = "http://hn.algolia.com/api/v1/search?query=javascript";
$.getJSON(url, function(data) {
var allNews = data.hits; // 20 hits
    console.log(allNews); // TO SEE RESULT IN MY console.log() IN BROWSER !!!
        var eachNews = '';
        allNews.map(function(item, index, array){
            $('.question').on('click', function(){
                eachNews += "<div>";
                eachNews += item.title;
                eachNews += "</div>";
            $('.answer').html(eachNews);
            });
        });; 
    });
});

// * * * * 79 GEOLOCATION DATA * * * * WORKS => SUCCESS !!!

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
        $('.answer').html("latitude: " + position.coords.latitude + "<br />" +  "longitude: " + position.coords.longitude);
    });
} // WORKS ! ! ! @ @ @ 