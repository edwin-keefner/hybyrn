const music_list = document.getElementById("musicblogentries");
const homepage_music_list = document.getElementById("music-head");
const show_info = document.querySelectorAll(".showmore");

const musicblogentries = [
    //"/musicblogentries/MM-DD-YYYY.html"
    "musicblogentries/05-03-2025-jojomayer.html"
]

const musicblognames = [
    //"music test blog"
    "5/2/2025: Jojo Mayer"
]

if (musicblogentries.length === 0) {
    const entry = document.createElement("p");
    entry.innerHTML = "nothing here...";
    entry.style.fontSize = "2rem";
    entry.style.opacity = "0.5";
    try {
        music_list.appendChild(entry);
    } catch {}
    try {
        homepage_music_list.appendChild(entry);
    } catch {}
}

for (let i = 0; i < musicblogentries.length; i++) {
    const entry = document.createElement("a");
    entry.setAttribute("class", "entry");
    entry.setAttribute("href", musicblogentries[i]);
    entry.innerHTML = musicblognames[i];
    if (i < 1 && (musicblogentries[i] != null)) {
        try {
            homepage_music_list.append(entry);
        } catch {}
    }
    
    if (i == 1) {
        try {
            const seemore = document.createElement("a");
            seemore.setAttribute("href", "/music.html");
            seemore.innerHTML = "See More";
            homepage_music_list.append(seemore);
        } catch {}
    }
    
    try {
       music_list.appendChild(entry);
    } catch {}
}


