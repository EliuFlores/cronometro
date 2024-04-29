let timer;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
        running = false;
    } else {
        timer = setInterval(updateTimer, 1000);
        document.getElementById('startStop').textContent = 'Stop';
        running = true;
    }
}

function reset() {
    clearInterval(timer);
    hours = minutes = seconds = 0;
    document.getElementById('display').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
    document.getElementById('startStop').textContent = 'Start';
    running = false;
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }
    document.getElementById('display').textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}