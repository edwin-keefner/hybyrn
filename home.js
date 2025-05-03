const clock = document.getElementById('time');
const sidebar = document.querySelector('.sidebar');
const grid_container = document.querySelector('.grid_container');
const sidebar_button = document.getElementById('sidebar_button');

//entries from newest to oldest
const socentries = [ 
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
        sidebar_button.style.right = '10px';
    } else {
        sidebar.style.width = '20%';
        grid_container.style.width = '80%';
        sidebar_button.style.right = 'calc(20% + 10px)';
    }
    sidebar_toggle = !sidebar_toggle;
});

