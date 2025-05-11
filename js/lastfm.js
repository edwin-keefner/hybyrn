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
    if (tracks["@attr"].nowplaying === "true") {
        var playing = "Now Playing!";
    } else {
        var playing = "Played: " + tracks.date["#text"]; 
    }
    container.innerHTML = tracks.map(track => `
      <div class="track">
        <img src="${track.image[3]["#text"]}" alt="${track.name}" />
        <a href="${track.url}"><p>Title: ${track.name}</p></a>
        <p>Artist: ${track.artist["#text"]}</p>
        <p>Album: ${track.album["#text"]}</p>
        <p>${playing}</p>
      </div>
    `).join(""); 
  } 

  updateSongs();
  setInterval(updateSongs, 10000); 