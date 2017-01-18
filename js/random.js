var currentQuote ="";
var author="";

var getQuote= function(){
  $.ajax({
    headers:{
      "X-Mashape-Key":"rMakCCT24pmshbelgUxL6rI9nzDyp12KpekjsnQYgf6I8umQqg",
      Accept:"application/json",
      "Content-Type":"application/x-www-form-urlencoded"
    },
    url:"https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous",
    success:function(response){
      var post = JSON.parse(response);
      console.log(post);
      currentQuote=post.quote;
      author=post.author;
      $("h2").text("'"+post.quote);
      $("#author").text("-"+post.author);
      $('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' +author));
     }
  })
}
getQuote();

$("#new-quote").click(function(){
  getQuote();
});

$("#twitter").click(function(){
  window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' +author))
})

$("#end").click(function(){
  window.open("https://github.com/dexuiz");
})
