var button = document.querySelector("#buttonGuess");
var textbox = document.querySelector("#textGuess");
var randNum = generateRandomNumber();

function guess(){
    var guessValue = textbox.value;
    if(guessValue == randNum){
        alert("You got it!");
    }
    else if(guessValue > randNum)
    {
        alert("Too High");
    }
    else{
        alert("Too Low");
    }

}

function generateRandomNumber(){
    return Math.floor(getRandomArbitrary(1, 100));
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}