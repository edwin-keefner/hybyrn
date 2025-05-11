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
        <img src="${track.image[3]["#text"]}" alt="${track.name}" />
        <a href="${track.url}"><p>Title: ${track.name}</p></a>
        <p>Artist: ${track.artist["#text"]}</p>
        <p>Album: ${track.album["#text"]}</p>
        <p>${playing}</p>
    </div>
    `;}).join(""); 
  } 

  updateSongs();
  setInterval(updateSongs, 10000); 