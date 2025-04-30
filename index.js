const clock = document.getElementById('time');
const dark_mode_button = document.getElementById('darkmode');
const sidebar = document.querySelector('.sidebar');
const table = document.querySelector('.table');
const sidebar_button = document.getElementById('sidebar_button');
let dark_toggle = localStorage.getItem('darkMode') === 'true';
dark_toggle ? dark_mode() : light_mode(); //initializes user value 

let sidebar_toggle = true;
sidebar_button.addEventListener('click', () => {
    if(sidebar_toggle) {
        sidebar.style.width = '0';
        table.style.width = '100%';
        sidebar_button.style.right = '10px';
    } else {
        sidebar.style.width = '20%';
        table.style.width = '80%';
        sidebar_button.style.right = 'calc(20% + 10px)';
    }
    sidebar_toggle = !sidebar_toggle;
});

dark_mode_button.addEventListener('click', () => {
    dark_toggle = !dark_toggle; 
    localStorage.setItem('darkMode', dark_toggle);
    dark_toggle ? dark_mode() : light_mode();
});

function dark_mode() {
    document.body.classList.add('dark');
    dark_mode_button.textContent = "BRING ME BACK";
    document.getElementById('home_image').src = "https://web.archive.org/web/20090829083431/http://geocities.com/the_sonic_universe/skull.gif";
}

function light_mode() {
    document.body.classList.remove('dark');
    dark_mode_button.textContent = "Dark Mode?";
    document.getElementById('home_image').src = "https://web.archive.org/web/20091020182718/http://geocities.com/MissFarnaby/Button-catLittle.gif";
}


    




