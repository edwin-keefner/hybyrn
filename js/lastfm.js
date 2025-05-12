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
    
    const currentTime = new Date();
    const songTime = new Date(track.date?.["#text"]);
    const currentUTC = Date.UTC(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
    const songUTC = Date.UTC(songTime.getFullYear(), songTime.getMonth(), songTime.getDate());
    
    var daysAgo = Math.floor((currentUTC - songUTC) / 86400000);
    var hoursAgo = Math.floor((currentUTC - songUTC) / 3600000);
    var minutesAgo = Math.floor((currentUTC - songUTC) / 60000); 
    var parsedAgo = null;

    if (daysAgo != 0) {
        parsedAgo = daysAgo + " Days Ago";
    } else if (hoursAgo != 0) {
        parsedAgo = hoursAgo + " Hours Ago"; 
    } else {
        parsedAgo = minutesAgo + " Minutes Ago"; 
    }

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
    `;
    }).join(""); 
  } 

  updateSongs();
  setInterval(updateSongs, 10000); 