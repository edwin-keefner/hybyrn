const userClock = document.getElementById('user_clock');
const clock = document.getElementById('my_clock');
const ageClock = document.getElementById('age_clock');
const remainingTimeClock = document.getElementById('remaining_time_clock');

function timeUpdate() {
    const userTime = new Date().toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit'});
    const time = new Date().toLocaleTimeString('en-US', {hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'America/New_York'});

    userClock.innerHTML = userTime;
    clock.innerHTML = time;

    const birthDate = new Date('May 24, 2007 03:59:00');
    const currentDate = new Date();
    const ageTime = (currentDate - birthDate); // time in milliseconds
    const ageYears = Math.floor(ageTime / 31556952000); 
    const ageMonths = Math.floor((ageTime - (ageYears * 31556952000)) / 2629800000);
    const ageDays = Math.floor((ageTime - (ageYears * 31556952000) - (ageMonths * 2629800000)) / 86400000);
    const formattedAge = (ageYears + ":" + ((ageMonths < 10) ? ("0" + ageMonths) : ageMonths) + ":" + ((ageDays < 10) ? ("0" + ageDays) : ageDays));
    ageClock.innerHTML = formattedAge;

    const remainingTime = 2445663780000 - ageTime;
    const remainingYears = Math.floor(remainingTime / 31556952000);
    const remainingMonths = Math.floor((remainingTime - (remainingYears * 31556952000)) / 2629800000);
    const remainingDays = Math.floor((remainingTime - (remainingYears * 31556952000) - (remainingMonths * 2629800000)) / 86400000);
    const formattedRemainingTime = (remainingYears + ":" + ((remainingMonths < 10) ? ("0" + remainingMonths) : remainingMonths) + ":" + ((remainingDays < 10) ? ("0" + remainingDays) : remainingDays));
    remainingTimeClock.innerHTML = formattedRemainingTime;
}   

setInterval(timeUpdate, 100);
timeUpdate();
