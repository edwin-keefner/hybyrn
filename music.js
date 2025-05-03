const entry_list = document.getElementById("musicblogentries");
const show_info = document.querySelectorAll(".showmore");

const blogentries = [
    //"/musicblogentries/YYYY-MM-DD.html"
    "/musicblogentries/2025-05-02-jojomayer.html",
]

const blognames = [
    //"music test blog"
    "5/2/2025: Jojo Mayer"
]

for (let i = 0; i < blogentries.length; i++) {
    const entry = document.createElement("a");
    entry.setAttribute("class", "entry");
    entry.setAttribute("href", blogentries[i]);
    entry.innerHTML = blognames[i];
    entry_list.appendChild(entry);
}

show_info.forEach((button) => {
    button.addEventListener("click", () => {
        const info = button.parentNode.querySelector(".artistinfo");
        if (info) {
            info.style.display = (info.style.display === "block") ? "none" : "block";
        }
    });
}); 
