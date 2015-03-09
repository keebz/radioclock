//Check and display time
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    areWeLive(h,m,s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}
// add zero in front of numbers < 10
function checkTime(i) {
    if (i<10) {i = "0" + i};  
    return i;
}
//Check and display if show is live or not
function areWeLive(h, m, s) {
    if (h>=11 && h<12) {
        document.getElementById('live').innerHTML = "ON AIR!";
        countDown(m,s);
        //startTimer();
    }
    else {
        document.getElementById('live').innerHTML = "";
        document.getElementById('notLive').innerHTML = "Off Air";
        document.getElementById('timeLeft').innerHTML ="";
    }
}
//display countdown as show approaches the end
function countDown(m,s) {
    var mLeft = 60 - m;  
    var sLeft = (60 - s);
    if (sLeft < 10){ sLeft = "0" + sLeft}
    document.getElementById('timeLeft').innerHTML = "Time Left: " + mLeft + ":" + sLeft;
}

function segmentBlock(seg1, seg2, seg3, seg4) {
    times = [seg1, seg2, seg3, seg4];
    var currentBlock = 0;
    if (currentBlock < 3) {
        minutes = times[currentBlock];
        segmentTimer(minutes);
        currentBlock = currentBlock + 1;
    } else if (currentBlock === 3) {
        minutes = times[currentBlock];
        segmentTimer(minutes);
        currentBlock = 0;
        return;
    };
}

//Seg 1 timer 5Min
function segmentTimer(minutes) {
    var fiveMinutes = 2 * minutes,
        display = document.getElementById("seg"),
        mins, seconds;
    var speed = setInterval(function() {
        mins = parseInt(fiveMinutes / 60)
        seconds = parseInt(fiveMinutes % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.innerHTML = mins + ":" + seconds;
        fiveMinutes--;
        
        if (fiveMinutes < 0) {
            clearInterval(speed);
            breakTimer();
        }
    }, 1000);
}

//break timer 2Min
function breakTimer() {
    var twoMinutes = 2 * 2,
        display = document.getElementById("break"),
        mins, seconds;
    var speed = setInterval(function() {
        mins = parseInt(twoMinutes / 60)
        seconds = parseInt(twoMinutes % 60);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        
        display.innerHTML = mins + ":" + seconds;
        twoMinutes--;
        
        if (twoMinutes < 0) {
            clearInterval(speed);
        }
    }, 1000);
}

// function fifteenMinTimer() {
//     var fifteenMinutes = 60 * 15,
//         display = document.getElementById("seg"),
//         mins, seconds;
//     var speed = setInterval(function() {
//         mins = parseInt(fifteenMinutes / 60)
//         seconds = parseInt(fifteenMinutes % 60);
//         seconds = seconds < 10 ? "0" + seconds : seconds;
        
//         display.innerHTML = mins + ":" + seconds;
//         fifteenMinutes--;
        
//         if (fifteenMinutes < 0) {
//             clearInterval(speed);
//             twoMinTimer();
//         }
//     }, 1000);
//}