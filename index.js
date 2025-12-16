let homeScore = 0;
let awayScore = 0;
let minute = 0;
let second = 0;
let count = 0;
var timer = false;

const homeScoreEl = document.getElementById("home-score");
const awayScoreEl = document.getElementById("away-score");



function startTimer() {
    timer = true;
    stopWatch();
}

function stopTimer() {
    timer = false;
}


function resetTimer() {
    stopTimer();
    timer = false;
    minute = 0;
    second = 0;
    count = 0;
    document.getElementById('minutes').textContent = "00";
    document.getElementById('seconds').textContent = "00";
    document.getElementById('tens').textContent = "00";
}


function addHome(points) {
    homeScore += points;
    homeScoreEl.textContent = homeScore;
}

function addAway(points) {
    awayScore += points;
    awayScoreEl.textContent = awayScore;
}

function resetGame() {
    homeScore = 0;
    awayScore = 0;
    homeScoreEl.textContent = 0;
    awayScoreEl.textContent = 0;
    resetTimer();
}

function stopWatch() {
    if (timer) {
        count++;

        if (count == 100) {
            second++;
            count = 0;
        }

        if (second == 60) {
            minute++;
            second = 0;
        }

        if (minute == 60) {
            minute = 0;
            second = 0;
        }

        let minString = minute;
        let secString = second;
        let countString = count;

        if (minute < 10) {
            minString = "0" + minString;
        }

        if (second < 10) {
            secString = "0" + secString;
        }

        if (count < 10) {
            countString = "0" + countString;
        }

        document.getElementById('minutes').innerHTML = minString;
        document.getElementById('seconds').innerHTML = secString;
        document.getElementById('tens').innerHTML = countString;
        setTimeout(stopWatch, 10);
    }
}