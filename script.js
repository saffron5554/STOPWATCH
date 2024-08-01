let seconds = 0  ;
let tens = 0 ;
let mins = 0 ;
let getSeconds = document.querySelector('#second');
let getTens = document.querySelector('#msecond');
let getMins = document.querySelector('#minute');
let btnStart = document.querySelector('.start');
let btnStop = document.querySelector('.stop');
let btnReset = document.querySelector('.reset');
let interval;

btnStart.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10 );
})
btnStop.addEventListener('click', () => {
    clearInterval(interval);
})
btnReset.addEventListener('click', () => {
    clearInterval(interval);
    tens = '00';
    seconds = '00';
    mins = '00';
    getSeconds.innerHTML = seconds;
    getTens.innerHTML = tens;
    getMins.innerHTML = mins;
})

function startTimer(){
    tens++;
    if(tens <= 9){
        getTens.innerHTML = '0' + tens;
    }
    if(tens > 9){
        getTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        getSeconds.innerHTML = '0' + seconds;
        tens = 0;
        getTens.innerHTML = '0' + 0;
    }
    if(seconds > 9){
        getSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        mins++;
        getMins.innerHTML = '0' + mins;
        seconds = 0;
        getSeconds.innerHTML = '0' + 0;
    }
    if(mins > 9){
        getSeconds.innerHTML = mins;
    }
}