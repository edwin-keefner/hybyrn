res.setHeader("Access-Control-Allow-Origin", "*"); 
res.setHeader("Content-Type", "application/json");

async function updateSongs() {
    try {
      const response = await fetch("/api/lastfm?user=hybyrn&limit=10");
      const data = await response.json();
      console.log(data.recenttracks.track);
      //displayTracks(data.recenttracks.track);
    } catch (error) {
      console.error("Failed to fetch tracks:", error);
    }
  }

  /*function displayTracks(tracks) {
    const container = document.getElementById("tracks");
    container.innerHTML = tracks.map(track => `
      <div class="track">
        <img src="${track.image[2]["#text"]}" alt="${track.name}" />
        <div class="track-info">
          <div class="track-name">${track.name}</div>
          <div class="artist">${track.artist["#text"]}</div>
        </div>
      </div>
    `).join(""); 
  } */

  updateSongs();
  setInterval(updateSongs, 1000); 