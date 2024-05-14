const start = document.querySelector('.start')
const stop = document.querySelector('.stop')
const reset = document.querySelector('.reset')


let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;


function startStopwatch(){
    if(!intervalId){
        intervalId = setInterval(updateStopwatch,10)
    }
}

function stopStopwatch(){
    clearInterval(intervalId)
    intervalId = null
}

function resetStopwatch(){
    stopStopwatch();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
}

function updateStopwatch(){

    seconds++;
    if(seconds==60){
        seconds = 0
        minutes++
    }
    if(minutes==60){
        minutes= 0
       hours++
    }
}