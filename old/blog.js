const entry_list = document.getElementById("entries");
const homepage_list = document.getElementById("blog-head");

fetchBlogData();

async function fetchBlogData() {
    try {
        const blogEntries = await fetchJson('./js/json/blogentries.json');
        const blogNames = await fetchJson('./js/json/blognames.json');
        addBlogEntries(blogEntries, blogNames);
    } catch (error) {
        console.error("Error fetching blog data:", error);
    }
}

async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

function addBlogEntries(blogEntries, blogNames) {
    if (blogEntries.length === 0) {
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
    
    for (let i = 0; i < blogEntries.length; i++) {
        const entry = document.createElement("a");
        entry.setAttribute("class", "entry");
        entry.setAttribute("href", blogEntries[i]);
        entry.innerHTML = blogNames[i];
        if (i < 5 && (blogEntries[i] != null)) {
            try {
                homepage_list.append(entry);
            } catch {}
        }
    
        if (i == 5) {
            const seemore = document.createElement("a");
            seemore.setAttribute("href", "/blog.html");
            seemore.innerHTML = "See More";
            try {
                homepage_list.append(seemore);
            } catch {}
        }
    
        try {
            entry_list.appendChild(entry);
        } catch {}
    }
}

