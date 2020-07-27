var heroes = ["star lord","hulk","spider man","hawk eye","black panther","doctor starnge","ant man","iron man","captain america","thor"];
var quotes = ["","hulk smash","i am friendly neighbourhood spiderman","","yibambe","","","and i .. am ... ironman","i can do this all day","bring me thanos"]
var randomNumber = Math.floor(Math.random()*10)
var heroName =  heroes[randomNumber];
var random_quotes = quotes[randomNumber]
$("#b").on("click",function(){
  $(".writing").text(heroName);
  $("body").css("background-image", "url(image" + randomNumber + ".jpg)");
  $(".quote").text(random_quotes);
  $("#b").hide();
});
