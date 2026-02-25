const book_list = document.getElementById("entries");
const book_homepage_list = document.getElementById("book-head");

fetchBookData();

async function fetchBookData() {
    try {
        const bookEntries = await fetchJson('./js/json/bookentries.json');
        const bookNames = await fetchJson('./js/json/booknames.json');
        addBookEntries(bookEntries, bookNames);
    } catch (error) {
        console.error("Error fetching book blog data:", error);
    }
}

async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

function addBookEntries(bookEntries, bookNames) {
    if (bookEntries.length === 0) {
        const entry = document.createElement("p");
        entry.innerHTML = "nothing here...";
        entry.style.fontSize = "2rem";
        entry.style.opacity = "0.5";
        try {
            book_list.appendChild(entry);
        } catch {}
        try {
            book_homepage_list.appendChild(entry);
        } catch {}
    }
    
    for (let i = 0; i < bookEntries.length; i++) {
        const entry = document.createElement("a");
        entry.setAttribute("class", "entry");
        entry.setAttribute("href", bookEntries[i]);
        entry.innerHTML = bookNames[i];
        if (i < 5 && (bookEntries[i] != null)) {
            try {
                book_homepage_list.append(entry);
            } catch {}
        }
    
        if (i == 5) {
            const seemore = document.createElement("a");
            seemore.setAttribute("href", "/book.html");
            seemore.innerHTML = "See More";
            try {
                book_homepage_list.append(seemore);
            } catch {}
        }
    
        try {
            book_list.appendChild(entry);
        } catch {}
    }
}
