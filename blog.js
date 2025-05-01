const entry_list = document.getElementById("entries");

const blogentries = [
    "/blogentries/YYYY-MM-DD.html"
]

const blognames = [
    "test blog"
]

for (let i = 0; i < blogentries.length; i++) {
    const entry = document.createElement("a");
    entry.setAttribute("class", "entry");
    entry.setAttribute("href", blogentries[i]);
    entry.innerHTML = blognames[i];
    entry_list.appendChild(entry);
}