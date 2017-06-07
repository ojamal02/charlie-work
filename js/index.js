var quoteSource = [ "Is your cat making TOO MUCH NOISE ALL THE TIME? -Charlie", "I shoulda popped my shirt off. Goddammit, really shoulda popped that shirt off. -Dennis", "I will SMASH your face into a- into a jelly! -Charlie",  "See, I’ve always got an A, B and C strike plan to get us out of any potentially life-threatening situation. -Mac", "I’m not gonna be buried in a grave. When I’m dead, just throw me in the trash. -Frank", "We’re gonna get all in your face and point out your faults. -Sweet Dee", "Fight Milk! The first alcoholic dairy based protein drink for bodyguards! -Mac","Can I stop you, though? You keep using this word jabroni. And…it’s awesome! -Charlie", "Oh, you unzipped me! It’s all coming back! It’s all coming back; I hate you! It’s all coming back, you understand?! I DON’T LIKE IT! I DON’T LIKE TO THINK ABOUT IT! -Frank", "Dayman, fighter of the NighRead more at htman, champion of the sun, you’re a master of karate and friendship for everyone. Dayman! -Charlie and Dennis", "Don't put regular steak, put milk-steak, she'll know what it is. - Charlie", "Oh, get a job? Just get a job? Why don't I strap on my job helmet and squeeze down into a job cannon and fire off into job land, where jobs grow on little jobbies?! - Charlie", "RUM HAM!! - Frank", "Ohh cat in the wall eh? Now you're speaking my language. - Charlie", "You're telling me that on Christmas morning, you and your mother would not go to your neighbor's house and take their presents? - Mac", "This is crazy.. But I'm having feelings again - Dennis", "I'M THE GOLDEN GOD! - Dennis", "Are you saying you have a collection of skin luggage? - Sweet Dee", "We're drinking tequila out of sunscreen bottles. - Sweet Dee", "Take care of yourself, or whatever people say - Sweet Dee", 
"I eat stickers all the time, dude. — Charlie", "I’m not fat. I’m cultivating mass. — Mac", "Spa… what’s this word spa? — Charlie", "I don’t know how many years on this Earth I got left. I’m gonna get real weird with it. — Frank", 
];


function RandomFunction(MaxValue, MinValue) {
		return Math.round(Math.random() * (MaxValue - MinValue) + MinValue);
	}

$("#new-quote").click(function(){
  var randomNum = RandomFunction(0, quoteSource.length - 1);
  var randomQuote;
  document.getElementById("text").innerHTML = quoteSource[randomNum];
  randomQuote = document.getElementById("text").innerHTML;

$("#tweet").click(function() {
  window.open("https://twitter.com/intent/tweet?text=" + encodeURI( randomQuote ));
});
  
  var colors=["lightpink", "limegreen", "cyan", "springgreen", "yellow", "rebeccapurple", "turquoise", "red", "orchid", "cornflowerblue", "darkseagreen", "indianred"];
    var random = colors[Math.floor(Math.random()*colors.length)];
    $("body").css("background",random);
    $(".button").css("border-color",random);
    $(".button").css("color",random);
    $(".fa").css("color",random);
   

});