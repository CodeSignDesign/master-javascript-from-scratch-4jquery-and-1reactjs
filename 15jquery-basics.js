// SECTION: 15 - JQUERY BASICS

// * * * 68 jQuery Bootstrap Setup
//  DOWNLOAD Starter template from Bootstrap website

// alert('Hello Coder !');

// START WRITING JQUERY - TEST: OK ! ! ! 
// $(document).ready(function(){
//     // EVERY CODE WE WRITE IS HERE: All jQuery CODE !!!
//     alert('Hello Coder !');
// });

// * * * 69 TARGETTING ALL ELEMENTS USING JWQUERY
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

// * * * 70 TARGETTING class AND id's IN jQuery
    /** ANIMATED CSS 
     * ATTENTION SEEKERS: bounce, flash, pulse, shake, swing, tada, wobble, jello, heartBeat
     * BOUNCING ENTRANCES: bounceIn, bounceInDown, ..Left, ..Right, ..Up
     * BOUNCING EXITS: bounceOut, bounceOutDown, - - | | -  -
     * FADING EXTRANCES - FADING EXITS: fadeInUpBig
     * FLIPPERS, LIGHTSPEED, ROTATING ENTRANCES, ROTATING EXITS
     * zoomIn, slideInUp
     */

$(document).ready(function(){
    $('button').addClass('animated bounce');
    $('.btn-success').addClass('shake');
    $('#target6').addClass('swing');
    // $('#target4').addClass('fadeInUp');
    $('button').removeClass('btn-success');
// * * * 71 CUSTOM CSS, TARGETTING PROPERTIES AND ADDING HTML IN jQUERY
/** TARGETING THE ELEMENTS PROPERTIES:
 * css, html, text, prop, addClass, removeClass, add html
 */
    $('#target1').css('text-decoration', 'line-through');
    $('#target1').css('color', 'red');
    // FOR MULTIPLE OBJECTS USE: ! CURLY BRACES: ({name: 'value', nm: 'val'});
    $('#target3').css({color: 'white', background: 'purple'});
    // how do we CONTROL THE PROPERTIES
    $('#target2').prop('disabled', true);
    // TARGET PAGE ELEMENTS
    // $('h1').html('Learning jQuery is so much FUN !');
    $('h1').html('Learning <strong>jQuery</strong> is so much FUN !');
    $('h1').text('Learning jQuery is FUN !');
// * * * 72 REMOVE, APPEND AND CLONE in JQUERY 
    // REMOVE ELEMENT:
    // $('#target1').remove();
    // APPEND ELEMENT WITH: appendTo() COMMAND
    $('#target4').appendTo('.left');
    // clone() - appndTo() FUNCTIONS:
    $('.left').clone().appendTo('.right');

});
