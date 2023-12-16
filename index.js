let milli = 0, sec = 0, min = 0, hrs = 0;
let timer;

const display = document.querySelector(".time")
let laps = document.querySelector(".laps")

function start() {
    if (!timer) {
        timer = setInterval(run, 10)
    }
}

function run() {
    display.innerHTML = getTimer()
    milli++
    if (milli == 100) {
        milli = 0
        sec++
    }
    else if (sec == 60) {
        sec = 0
        min++
    }
    else if (min == 60) {
        min = 0
        hrs++
    }

    else if (hrs == 13) {
        hrs = 1
    }
}

function getTimer() {
    return (hrs < 10 ? "0" + hrs : hrs) + " : " + (min < 10 ? "0" + min : min) + " : " + (sec < 10 ? "0" + sec : sec) + " : " + (milli < 10 ? "0" + milli : milli);
}



function pause() {
    stopTimer()
}

function stopTimer() {
    clearInterval(timer)
    timer = false
}


function reset() {
    stopTimer()
    milli = 0
    sec = 0
    min = 0
    hrs = 0
    display.innerHTML = getTimer()
}

function restart() {
    if (timer) {
        reset()
        start()
    }

}

function lap() {
    if (timer) {
        let Ul = document.createElement("ul")
        Ul.innerHTML = getTimer()
        laps.appendChild(Ul)
    }
}

function resetLap() {
    laps.innerHTML = " "
}
