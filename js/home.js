const recentBlog = document.getElementById("recent_blog");
const soc = document.getElementById('soc');

//entries from newest to oldest
const socentries = [
    "3/1/26 7:58pm: my camera i bought off of ebay in an impulse purchase comes in the mail tomorrow im so excited",
    "2/28/26 1:01am: im feeling very overwhelmed. comparison is the thief of joy? probably . or i just need to actually put my mind to something",
    "2/28/26 12:14am: oh my god im so tired antiprofit leftist bookstore save me",
    "2/16/25 10:59am: hi!",
    "9/27/25 4:52pm: we just got killed #geese #cameronwinter",
    "7/1/25 6:13pm: god im so hungry",
    "7/1/25 1:18am: i dont want 2 be cigarettes",
    "6/27/25 11:09pm: life is too short to be getting mad at red lights. it's like kind of chill to just sit there",
    "6/6/25 2:54pm: oops sorry i was doing something",
    "5/22/25 12:29am: ill have 1 woke hold the based",
    "5/11/25 3:36am: happy mother's day",
    "5/10/25 11:38pm: a miniature version of rei ayanami is literally sitting on the border of my title this is literally the coolest thing ever",
    "5/10/25 4:45am: i need more gifs of pixel characters sitting they're so chill",
    "5/10/2025 1:10am: the peak of the curve",
    "5/7/2025 8:38pm: something about node.js made me feel like i was doing something very wrong so i saved my wellbeing and removed it",
    "5/6/2025 2:04am: i really have no idea how anything to do with nodejs works now it feels like i have a bunch of bloat, but i hope i actually learn how to use it",
    "5/6/2025 2:24am: so ready to bomb another test tomorrow",
    "5/2/2025 11:05pm: jojo mayer is a beautiful man with beautiful words",
    "5/1/25 2:21am: it's broke thursday",
    "5/1/25 1:49am: i like how the website is coming along this is so cool",
    "4/30/25 1:51am: bedtime",
    "4/30/25 1:50am: cannot wait to get everything (the blog) working so i can type !! whatever i want!!",
    "4/29/25 11:25pm: get to work",
    "4/18/25 4:07am: ok i like it better when he's wide sorry",
    "4/18/25 4:04am: in regards to the \"why he like that\" post i think i figured it out",
    "4/18/25 3:42am: i dont know how javascript works and this will be an issue",
    "4/18/25 2:41am: why he like that how do i fix that",
    "4/18/25 2:36am: check this out<center><img src=\"/images/me-breathing-i-am-a-little-freak-dog.gif\" class=\"bulletinimg\"></center>",
    "4/18/25 2:24am: i wanted three entries",
    "4/18/25 2:20am: i wanted two entries",
    "4/18/25 2:20am: panoply is a good word"
]  

//adds bulletin entries to soc div
for (let i = 0; i < socentries.length; i++) {
    const entry = document.createElement("div");
    entry.setAttribute("class", "bulletin");
    entry.innerHTML = "<p>" + socentries[i] + "</p>";
    soc.appendChild(entry);
}

fetchBlogData();

async function fetchBlogData() {
    try {
        const blogEntries = await fetchJson('./js/json/blogentries.json');
        const blogNames = await fetchJson('./js/json/blognames.json');
        addRecentBlog(blogEntries, blogNames);
    } catch (error) {
        console.error("Error fetching blog data:", error);
    }
}

async function fetchJson(url) {
    const response = await fetch(url);
    return await response.json();
}

function addRecentBlog(blogEntries, blogNames) {
    if (blogEntries.length === 0) {
        recentBlog.innerHTML = "<i>Recent Blog:</i> No Blogs Found"
    } else {
        const blogLink = document.createElement("a");
        recentBlog.innerHTML = "<i>Recent Blog: </i>";
        blogLink.setAttribute("href", blogEntries[0]);
        blogLink.innerHTML = blogNames[0];
        recentBlog.append(blogLink);
    }
}



