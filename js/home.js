const sidebar = document.querySelector('.sidebar');
const grid_container = document.querySelector('.grid_container');
const sidebar_button = document.getElementById('sidebar_button');
//const footer = document.querySelector('footer');
const bar1 = document.getElementById('gif1');
const bar2 = document.getElementById('gif2');

//entries from newest to oldest
const socentries = [
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

//adds bulletin entries to sidebar
for (let i = 0; i < socentries.length; i++) {
    const entry = document.createElement("div");
    entry.setAttribute("class", "bulletin");
    entry.innerHTML = socentries[i];
    sidebar.appendChild(entry);
}

//hide sidebar button code
let sidebar_toggle = true;
sidebar_button.addEventListener('click', () => {
    if(sidebar_toggle) {
        sidebar.style.width = '0';
        grid_container.style.width = '100%';
        //footer.style.width = '100%';
        sidebar_button.style.right = '10px';
        bar1.style.width = '100vw';
        bar2.style.width = '100vw';
    } else {
        sidebar.style.width = '20%';
        grid_container.style.width = '80%';
        //footer.style.width = '80%';
        sidebar_button.style.right = 'calc(20% + 10px)';
        bar1.style.width = '80vw';
        bar2.style.width = '80vw';
    }
    sidebar_toggle = !sidebar_toggle;
});


