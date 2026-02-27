const age = document.getElementById('age');
const timeLeft = document.getElementById('timeLeft');
const clock = document.getElementById('time');
const userClock = document.getElementById('userTime');

function timeUpdate() {
    //live clock
    const date = new Date().toLocaleTimeString('en-US', {timeZone: 'America/New_York'});
    const userDate = new Date().toLocaleTimeString('en-US');

    userClock.innerHTML = userDate;
    
    if (date === userDate) {
        clock.innerHTML = "We are in the same timezone!";
    } else {
        clock.innerHTML = date;
    }

    //way too specific age
    const birthDate = new Date('May 24, 2007 03:59:00');
    const currentDate = new Date(); 
    const specificAge = Math.abs(birthDate - currentDate) / 31556952000; 
    const remainingTime = Math.abs(77.5 - specificAge);
    age.innerHTML = "Age: " + specificAge;
    timeLeft.innerHTML = "Time Left: " + remainingTime;
    
}
setInterval(timeUpdate, 100);
timeUpdate();



