async function updateSongs() {
    try {
      const response = await fetch("/api/lastfm?user=hybyrn&limit=100");
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
    
    //const songTime = new Date (track.date?.["#text"]);
    const songTime = new Date(track.date?.["#text"].replace(/(\d+) (\w+) (\d+), (\d+):(\d+)/, 
            (_, day, month, year, hour, minute) => {
                const monthMap = {
                'Jan': '01', 'Feb': '02', 'Mar': '03', 'Apr': '04',
                    'May': '05', 'Jun': '06', 'Jul': '07', 'Aug': '08',
                    'Sep': '09', 'Oct': '10', 'Nov': '11', 'Dec': '12'
                };
                return `${year}-${monthMap[month]}-${day.padStart(2, '0')}T${hour.padStart(2, '0')}:${minute.padStart(2, '0')}:00Z`;
            }
        ));
    const currentTime = new Date();

    const msDiff = currentTime - songTime;
    const secondsDiff = Math.floor(msDiff / 1000);
    const minutesDiff = Math.floor(secondsDiff / 60);
    const hoursDiff = Math.floor(minutesDiff / 60); 
    const daysDiff = Math.floor(hoursDiff / 24); 

    let parsedDiff;
    if (daysDiff > 0) {
        parsedDiff = `${daysDiff} Day${daysDiff > 1 ? 's' : ''} Ago`;
    } else if (hoursDiff > 0) {
        parsedDiff = `${hoursDiff} Hour${hoursDiff > 1 ? 's' : ''} Ago`;
    } else if (minutesDiff > 0) {
        parsedDiff = `${minutesDiff} Minute${minutesDiff > 1 ? 's' : ''} Ago`;
    } else {
        parsedDiff = "Just Now";
    }

    const playing = isNowPlaying ? "~Now Playing!~" : `Played ${parsedDiff || "unknown time"}`;

    return `
    <div class="track">
        <center><img src="${track.image[3]["#text"]}" alt="${track.name}"></center>
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