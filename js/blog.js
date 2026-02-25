const entry_list = document.getElementById("entries");
const homepage_list = document.getElementById("blog-head");

const blogentries = [
    //"/blogentries/MM-DD-YYYY.html"
    "/blogentries/02-16-2026-deliberate.html",
    "/blogentries/10-01-2025-blossomsai.html",
    "/blogentries/07-01-2025-aithoughts.html",
    "/blogentries/06-06-2025-update.html",
    "/blogentries/05-11-2025-ywottrans.html",
    "/blogentries/05-10-2025-whywebsite.html"
]

const blognames = [
    //"test blog"
    "2/16/2026: Deliberate",
    "10/1/2025: I hate blossoms ai",
    "7/1/2025: thoughts on ai",
    "6/6/2025: update!",
    "5/11/2025: The perks of being an internet janitor",
    "5/10/2025: Why make a website?"
]

if (blogentries.length === 0) {
    const entry = document.createElement("p");
    entry.innerHTML = "nothing here...";
    entry.style.fontSize = "2rem";
    entry.style.opacity = "0.5";
    try {
        entry_list.appendChild(entry);
    } catch {}
    try {
        homepage_list.appendChild(entry);
    } catch {}
}

for (let i = 0; i < blogentries.length; i++) {
    const entry = document.createElement("a");
    entry.setAttribute("class", "entry");
    entry.setAttribute("href", blogentries[i]);
    entry.innerHTML = blognames[i];
    if (i < 5 && (blogentries[i] != null)) {
        try {
            homepage_list.append(entry);
        } catch {}
    }
    
    if (i == 5) {
        try {
            const seemore = document.createElement("a");
            seemore.setAttribute("href", "/blog.html");
            seemore.innerHTML = "See More";
            homepage_list.append(seemore);
        } catch {}
    }
    
    try {
       entry_list.appendChild(entry);
    } catch {}
}


