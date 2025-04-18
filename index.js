const clock = document.getElementById('time');
function updateTime() {
    let time = new Date(new Date().toLocaleString('en', {timeZone: 'America/New_York'}));
    let hours = Date.getHours();
    let minutes = Date.getMinutes();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0'+ minutes : minutes;
    clock.innerHTML = hours + ':' + minutes + ' ' + ampm;
}
updateTime();
setInterval(updateTime, 1000);
    




