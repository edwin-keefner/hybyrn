const clock = document.getElementById('time');
const userClock = document.getElementById('userTime');

function timeUpdate() {
    const date = new Date().toLocaleTimeString('en-US', {timeZone: 'America/New_York'});
    const userDate = new Date().toLocaleTimeString('en-US');

    userClock.innerHTML = userDate;
    
    if (date === userDate) {
        clock.innerHTML = "We are in the same timezone!";
    } else {
        clock.innerHTML = date;
    }

    
}
setInterval(timeUpdate, 1000);
timeUpdate();