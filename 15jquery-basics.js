// SECTION: 15 - JQUERY BASICS
/** 68 jQuery Bootstrap Setup
 * DOWNLOAD Starter template from Bootstrap website
 */

// alert('Hello Coder !');

// START WRITING JQUERY - TEST: OK ! ! ! 
// $(document).ready(function(){
//     // EVERY CODE WE WRITE IS HERE: All jQuery CODE !!!
//     alert('Hello Coder !');
// });

// 69 TARGETTING ALL ELEMENTS USING JWQUERY
// - ADDED ANIMATE.CSS minified FROM: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css
// - NOT ADDED ANIMATE.CSS, this is just a reference: https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css

// $(document).ready(function(){
//     // TARGET ALL THE "ELEMENTS" IN THE "DOM" WITH THE NAME OF "BUTTON"
//     $('button').addClass('');
// });
                    // HERE OUTCOME ON PAGE PROBLEM: NOT SAME RESULT
$(document).ready(function(){
    $('button').addClass('animated bounce');
});

// 70 TARGETTING class AND id's IN jQuery
