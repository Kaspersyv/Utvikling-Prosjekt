let randomNumber1 = Math.floor(Math.random() * 100) + 1;

function GuessTheNumber() {
    let userGuess = document.getElementById("guess-input").value;
    document.getElementById("title-guessthenumber").innerHTML = userGuess;

    if (userGuess > randomNumber1) {
        document.getElementById("title-guessthenumber").innerHTML = userGuess + " er større enn svaret.";
    }
    else {
        if (userGuess < randomNumber1) {
            document.getElementById("title-guessthenumber").innerHTML = userGuess + " er mindre enn svaret.";
        }
        else {
            document.getElementById("title-guessthenumber").innerHTML = userGuess + " er riktig!";
            document.getElementById("button-div").innerHTML = '<button class="btn btn-guess btn-primary" onClick="window.location.reload();">Restart</button>';
        }
    }

}