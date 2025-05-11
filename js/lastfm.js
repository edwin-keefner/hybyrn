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
        const playing = isNowPlaying ? "Now Playing!" : `Played: ${track.date?.["#text"] || "unknown time"}`;
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