
//RNG for the dice images
let randomNumber1 = Math.floor(Math.random() * (1, 6) + 1)
let randomNumber2 = Math.floor(Math.random() * (1, 6) + 1)


//Changing the dices according to the RNG number
document.getElementById("img1").setAttribute('src', 'images/dice'+ randomNumber1 + '.png')
document.getElementById("img2").setAttribute('src', 'images/dice'+ randomNumber2 + '.png')

if (randomNumber1 == randomNumber2) {
    document.getElementById("result").innerText = "Draw!"
}
else if (randomNumber1 > randomNumber2) {
    document.getElementById("result").innerText = "Player 1 wins!"
}
else if (randomNumber1 < randomNumber2) {
    document.getElementById("result").innerText = "Player 2 wins!"
}
else {
    alert("Error!")
}


