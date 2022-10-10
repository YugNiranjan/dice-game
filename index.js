//first player
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImg1 = "images/dice"+randomNumber1+".png"; // images/dice1.png - images/dice.png
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomDiceImg1);

// second player
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImg2 = "images/dice"+randomNumber2+".png"; // images/dice1.png - images/dice.png
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImg2);

// winning player
if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "⛳ player 1 win";
} else if (randomNumber1 < randomNumber2 ) {
document.querySelector("h1").innerHTML = "player 2 win ⛳";  
}else{
document.querySelector("h1").innerHTML = "Draw!";  
}