async function updateSongs() {
    try {
      const response = await fetch("/api/lastfm?user=hybyrn&limit=10");
      const data = await response.json();
      displayTracks(data.recenttracks.track);
    } catch (error) {
      console.error("Failed to fetch tracks:", error);
    }
  }

  function displayTracks(tracks) {
    const container = document.getElementById("tracks");

    container.innerHTML = tracks.map(track => {
    const isNowPlaying = track["@attr"]?.nowplaying === "true";
    const songTime = new Date(track.date?.["#text"]);
    const currentTime = new Date(new Date().toLocaleTimeString('en-US', {timeZone: 'utc'}));
    const millisecondsAgo = (currentTime - songTime); 
    const daysAgo = Math.floor(millisecondsAgo / 86400000);
    const hoursAgo = Math.floor((millisecondsAgo % 86400000) / 3600000);
    const minutesAgo = Math.round(((millisecondsAgo % 86400000) % 3600000) / 60000);
    var parsedAgo = null; 
    if (daysAgo) {
        parsedAgo = daysAgo + " Days Ago";
    } else if (hoursAgo) {
        parsedAgo = hoursAgo + " Hours and " + (currentTime.getMinutes() - songTime.getMinutes()) + " Minutes Ago";
    } else {
        parsedAgo = minutesAgo + " Minutes Ago";
    }
    console.log(hoursAgo); 
    const playing = isNowPlaying ? "~Now Playing!~" : `Played ${parsedAgo || "unknown time"}`;
    return `
    <div class="track">
        <center><img src="${track.image[3]["#text"]}" alt="${track.name}"</center>
        <p>Title: <a href="${track.url}" target="_blank">${track.name}</a></p>
        <p>Artist: ${track.artist["#text"]}</p>
        <p>Album: ${track.album["#text"]}</p>
        <p>${playing}</p>
        <hr>
    </div>
    `;}).join(""); 
  } 

  updateSongs();
  setInterval(updateSongs, 10000); 