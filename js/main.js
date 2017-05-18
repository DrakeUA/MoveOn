var mainTheme = new Audio("music/main.mp3");
var start = new Audio("music/mario.mp3");
var gameOver = new Audio("music/GameOver.mp3");

HTMLAudioElement.prototype.stop = function () {
    this.pause();
    this.currentTime = 0.0;
}

window.onload = function () {
    mainTheme.play();
    mainTheme.loop = true;
}

//-------------timer-----------------
var minutes = 0;
var seconds = 0;

function startTime() {
    timer.innerHTML = minutes + ":" + seconds;
    seconds++;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (seconds == 59) {
        minutes += 1;
        seconds = 0;
    }
}
//---------------------------------------------------------------
function move() {
    img.style.top = Math.round(Math.random() * (480 - 40) + 40) + 'px';
    img.style.left = Math.round(Math.random() * (1000 - 400) + 400) + 'px';
    img.style.transition = '0.2s';
}
//-----------------------------------------------
but.onclick = function () {
    setInterval(move, 400);
    var tick = setInterval(startTime, 1000);
    but.style.display = 'none';
    run.style.display = 'none';
    img.style.display = 'block';
    mainTheme.stop();
    start.play();
    start.loop = true;
    //-----------------------------------------------------------------------
    var n = 15;
    img.onmouseover = function () {
        n -= 1;
        num.innerHTML = n
        if (n < 6) {
            h1.style.color = 'red';
        }
        if (n == 0) {
            start.stop();
            gameOver.play();
            main.style.display = 'none';
            blink2.style.display = 'block';
            clearInterval(tick);
        
        }
    }
}