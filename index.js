let isPlaying = false;
let correctAns;
let userAns;
let guessCount = 0;
let stopWatch;
const timeoutSeconds = 8;

const playWithTimeout = function() {
   
    const countDownTime = new Date();
    countDownTime.setSeconds(countDownTime.getSeconds() + timeoutSeconds)
    stopWatch = setInterval(function() {
       
        var now = new Date().getTime();
      
        
        var distance = countDownTime - now;
      
      
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      
        document.getElementById("stopWatch").innerHTML = "Time left: " + seconds + " seconds ";
        
       
        if (distance < 0) {
            clearInterval(stopWatch);

          document.getElementById("stopWatch").innerHTML = "Time Expired and You Lost";
        }
      }, 500);

    play();
    
};
const play = function() {
    document.getElementById('orangeBall').setAttribute('style', 'display:none');
   
    correctAns = 'cup-' + (Math.floor(Math.random() * 3) + 1)

    console.log("correct ans is: " + correctAns);
}

const guess = function(element) {
    guessCount = guessCount + 1;
    if (guessCount > 1) {
        alert('cannot guess more than 1 time');
        return;
    }

    const userAns = element.getAttribute('id');

    if (userAns == correctAns) {
        document.getElementById('message').innerHTML = 'Congrats, you got it!';
        isPlaying = false;
        const ball = document.getElementById('orangeBall')
        document.getElementById(correctAns).appendChild(ball);
        document.getElementById('orangeBall').setAttribute('style', 'display:block');
        clearInterval(stopWatch);
    } else {
        document.getElementById('message').innerHTML = 'You lost';
        clearInterval(stopWatch);
    }
}

const reset = function() {
    clearInterval(stopWatch);
    correctAns = null;
    userAns = null;
    guessCount = 0;
    const ball = document.getElementById('orangeBall')
    document.getElementById('original-ball-div').appendChild(ball);
    document.getElementById('orangeBall').setAttribute('style', 'display:block');
    document.getElementById('message').innerHTML = '';
    document.getElementById("stopWatch").innerHTML = '';
}


