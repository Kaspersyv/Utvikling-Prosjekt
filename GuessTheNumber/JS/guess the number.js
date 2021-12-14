alert("Hei");

var randomNumber1 = Math.floor(Math.random() * 100) + 1;
var userGuess = parseInt(document.getElementById("guess-input").value);

// var userGuess = document.getElementById("guess-input").value;


function GuessTheNumber() {
    alert(userGuess);
    alert(randomNumber1);
    document.getElementById("title-guessthenumber").innerHTML = userGuess;
}