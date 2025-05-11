function updateCurrentSong() {
    fetch("/lastfmapi")
    .then(response => response.json())
    .then(data => {
        const track = data.recenttracks.track[0];
    
        console.log(track); 
    });
}

updateCurrentSong();
setInterval(updateCurrentSong, 1000);