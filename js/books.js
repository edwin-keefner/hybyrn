const blogList = document.getElementById("blog_list");

fetchBlogData();
fetchBookListData();

async function fetchBlogData() {
    try {
        const blogEntries = await fetchJson('./js/json/bookblogentries.json');
        const blogNames = await fetchJson('./js/json/bookblognames.json');
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

async function fetchBookListData() {
    try {
        const bookInfoList = await fetchJson('./js/json/bookinfo.json');
        addBookInfo(bookInfoList);
    } catch (error) {
        console.error("Error fetching book data: ", error);
    }
}

const addBookInfo = (bookInfoList) => {
    const readingList = document.getElementById("reading_list");

    for (let i = 0; i < bookInfoList.length; i++) {
        const bookEntry = document.createElement("div");
        const bookTitle = document.createElement("div");
        const bookInfo = document.createElement("div");
        const bookAuthor = document.createElement("p");
        const bookRead = document.createElement("p");
        const bookComment = document.createElement("p");

        bookEntry.setAttribute("class", "book");
        bookTitle.setAttribute("id", "title");
        bookInfo.setAttribute("id", "info");
        
        bookTitle.innerHTML = bookInfoList[i]["title"];
        bookAuthor.innerHTML = "Author: " + bookInfoList[i]["author"];
        bookRead.innerHTML = "Read: " + bookInfoList[i]["read"];
        bookComment.innerHTML = bookInfoList[i]["comments"];

        bookInfo.append(bookAuthor); 
        bookInfo.append(bookRead);
        bookInfo.append(bookComment);
        bookEntry.append(bookTitle);
        bookEntry.append(bookInfo);
        readingList.append(bookEntry);
    }
}
