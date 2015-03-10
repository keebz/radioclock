//Check and display time
    function startTime() {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        var amPm = " am"
        
    //check time & format
        f = twelveHourConversion(h, amPm);
        m = checkTime(m);
        s = checkTime(s);
        areWeLive(f[0],m,s,f[1]);
        document.getElementById('txt').innerHTML = f[0]+":"+m+":"+s+f[1];
        var t = setTimeout(function(){startTime()},500);
    }
    // add zero in front of numbers < 10
    function checkTime(i) {
        if (i<10) {i = "0" + i};  
        return i;
    }

    //convert for 12 hour format
    function twelveHourConversion(h, amPm) {
        if (h > 12) {
            h = h - 12;
            amPm = " pm";
        };
            return [h, amPm];
    }
    //Check and display if show is live or not
    function areWeLive(h, m, s, amPm) {
        if (h < 12 && amPm === " am") {
            document.getElementById('live').innerHTML = "ON AIR!";
            countDown(m,s);
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

    function segments(seg1,seg2,seg3,seg4) {
        var pause = false;
        var commBreak = 2
        var allSegments = [seg1, commBreak, seg2, commBreak, seg3, commBreak, seg4];
        for (x = 0; x <= 6; x++) {
            segmentTimer(allSegments[x]);
        }
    }

    // //timer logic for off air breaks
    function segmentTimer(minutes) {
        var currentMinutes = 2 * minutes,
            display = document.getElementById("seg"),
            mins, seconds;
        var speed = setInterval(function() {
            mins = parseInt(currentMinutes / 60)
            seconds = parseInt(currentMinutes % 60);
            seconds = seconds < 10 ? "0" + seconds : seconds;
            
            display.innerHTML = mins + ":" + seconds;
            currentMinutes--;
            
            if (currentMinutes < 0) {
                clearInterval(speed);
            }
        }, 1000);
    }

$(document).ready(function(){
    startTime();
    segments(5,15,10,5);


});