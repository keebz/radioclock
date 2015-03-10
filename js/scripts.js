$(document).ready(function(){
    startTime(5,15,10,"e");

});
//Check and display time
    function startTime(seg1,seg2,seg3,TZ) {
        var today=new Date();
        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        var zone = TZ;
        var amPm = " am"

        
//check time & format
        console.log(zone);
        f = twelveHourConversion(h, amPm);
        //hr = timeZone(f[0],TZ);
        m = checkTime(m);
        s = checkTime(s);

        areWeLive(f[0],m,s,f[1]);
        setSegmentTimer(m,s,seg1,seg2,seg3);

        document.getElementById('txt').innerHTML = f[0]+":"+m+":"+s+f[1];
        var t = setTimeout(function(){startTime()},500);
    }
//adjust for timezone
    /*function timeZone(hr,TZ) {
        zones = ["e","c","m","p"];
        adjustments = [1,0,1,2];
        if (TZ === zones[0]){
            hr = hr - 1;
            return hr;
        } else if (TZ === zones[1]){
            return hr;
        } else if (TZ === zones[2]) {
            hr = hr + 1;
            return hr;
        } else if (TZ === zones[3]) {
            hr = hr + 2;
            return hr; 
        };
    }*/

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
        if (h < 12 && amPm === " am" && h > 11) {
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

    function setSegmentTimer(m,s,seg1,seg2,seg3) {
        var commBreak = 2
        var totalTime = 0

        if (m === totalTime && s === "00") {
            segmentTimer(seg1);
            totalTime = totalTime + seg1;
        } else if (m === totalTime && s === "00") {
            segmentTimer(commBreak);
            totalTime = totalTime + commBreak;
        } else if (m === totalTime && s === "00") {
            setSegmentTimer(seg2);
            totalTime = totalTime + seg2;
        } else if (m === totalTime && s === "00") {
            segmentTimer(commBreak);
            totalTime = totalTime + commBreak;
        } else if (m === totalTime && s === "00") {
            segmentTimer(seg3);
        };

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
                return false;
            }
        }, 1000);
    }
