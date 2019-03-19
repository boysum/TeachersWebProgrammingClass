var answer = generateAnswer(100);
var textbox = document.querySelector('#textGuess');
var button = document.querySelector('#buttonGuess');

// Execute a function when the user releases a key on the keyboard
textbox.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      button.click();
    }
  });

var guessCount = 0;
function guess(){
    textbox.select();
    if(button.innerHTML === 'Play Again')
    {
        answer = generateAnswer(100);
        button.innerHTML = 'Guess';
        textbox.value = '';
        guessCount = 0;
        return;
    }
    guessCount++;
    var userGuess = textbox.value;
    if(userGuess == answer)
    {
        button.innerHTML = 'Play Again'
        alert('You win! You got it in ' + guessCount + ' guesses.');

    }
    else if(userGuess > answer)
    {
        alert('lower');        
    }
    else {
        alert('higher');
    }    
}

function generateAnswer(upper)
{
    return Math.floor((Math.random() * upper) + 1);
}