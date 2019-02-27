// 16-news-app.js // STARTED MY APP 

// * * * 83 Making AJAX call to API and getting random item * * * NOT WORKED
// New Video STARTED 
// * * * 84 Populating data to UI and add Tweet feature * * *

$(document).ready(function(){
    // My BUTTON ANIMATION with animate.css 
    // $(".btn").addClass("animated rotateInDownRight"); // bounce, tada, fadeIn
    
    // CODING STARTED FROM HERE first my URL LINK, if not work ...
    // var url="https://newsapi.org/v2/top-headlines?country=ch&apiKey=307cd047de4d482e8d1d6c3e788a28ad";
    // ... then USE his from tutorial:
    var url = "http://hn.algolia.com/api/v1/search?query=javascript";
    $.getJSON(url, function(data) {
    var currentQuote = '';
    var quotes = data.hits;
    $.('.read').on('click', function() {
        currentQuote = quotes[Math.floor(Math.random()) * quotes.length];
        console.log(currentQuote);
    });

    console.log(quotes[0].title);
    console.log(data);
});
});