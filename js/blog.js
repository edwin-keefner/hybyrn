const entry_list = document.getElementById("entries");

const blogentries = [
    //"/blogentries/MM-DD-YYYY.html"
    "/blogentries/06-06-2025-update.html",
    "/blogentries/05-11-2025-ywottrans.html",
    "/blogentries/05-10-2025-whywebsite.html"
]

const blognames = [
    //"test blog"
    "6/6/2025: update!",
    "5/11/2025: The perks of being an internet janitor",
    "5/10/2025: Why make a website?"
]

if (blogentries.length === 0) {
    const entry = document.createElement("p");
    entry.innerHTML = "nothing here...";
    entry.style.fontSize = "2rem";
    entry.style.opacity = "0.5";
    entry_list.appendChild(entry);
}

for (let i = 0; i < blogentries.length; i++) {
    const entry = document.createElement("a");
    entry.setAttribute("class", "entry");
    entry.setAttribute("href", blogentries[i]);
    entry.innerHTML = blognames[i];
    entry_list.appendChild(entry);
}
