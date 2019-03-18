var answer = generateAnswer(100);


function guess(){
    var textbox = document.querySelector('#textGuess');
    var userGuess = textbox.value;
    if(userGuess == answer)
    {
        alert('You win!');
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