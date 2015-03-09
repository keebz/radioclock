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

//Seg 1 timer 5Min
    function fiveMinTimer() {
        var fiveMinutes = 5 * 1,
            display = document.getElementById("seg1"),
            mins, seconds;
        var speed = setInterval(function() {
            mins = parseInt(fiveMinutes / 60)
            seconds = parseInt(fiveMinutes % 60);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.innerHTML = mins + ":" + seconds;
            fiveMinutes--;
            
            if (fiveMinutes < 0) {
                clearInterval(speed);
                twoMinTimer();
            }
        }, 1000);
    }

    //break timer 2Min
    function twoMinTimer() {
        var twoMinutes = 60 * 2,
            display = document.getElementById("break"),
            mins, seconds;
        setInterval(function() {
            mins = parseInt(twoMinutes / 60)
            seconds = parseInt(twoMinutes % 60);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.innerHTML = mins + ":" + seconds;
            twoMinutes--;
            
            if (twoMinutes < 0) {
                twoMinutes = 60 * 2;
            }
        }, 1000);
    }