
// Image 1
var randomNumber1 = generateRandomNumber();
var newImagePath = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", newImagePath);

// Image 2
var randomNumber2 = generateRandomNumber();
var newImagePath = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", newImagePath);

// Select winner
var winnerText = "";
if(randomNumber1 > randomNumber2){
    winnerText = "Player 1 Wins!";
}else if(randomNumber1 < randomNumber2){
    winnerText = "Player 2 Wins!";
}else{
    winnerText = "Draw!";
}

document.querySelector("h1").innerText = winnerText;

function generateRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}