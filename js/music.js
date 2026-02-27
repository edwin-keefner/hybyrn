const blogList = document.getElementById("blog_list");

fetchBlogData();

async function fetchBlogData() {
    try {
        const blogEntries = await fetchJson('./js/json/musicblogentries.json');
        const blogNames = await fetchJson('./js/json/musicblognames.json');
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
        const message = document.createElement("p");
        message.innerHTML = "nothing here..";
        blogList.append(message);
    } else {
        for (let i = 0; i < blogEntries.length; i++) {
            const entry = document.createElement("a");
            entry.setAttribute("class", "blog_entry");
            entry.setAttribute("href", blogEntries[i]);
            entry.innerHTML = blogNames[i];
            blogList.append(entry);
        }
    }
}
