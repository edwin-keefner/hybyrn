const dark_mode_button = document.getElementById('darkmode');
let dark_toggle = localStorage.getItem('darkMode') === 'true';
dark_toggle ? dark_mode() : light_mode(); //initializes user value after getting value from storage

dark_mode_button.addEventListener('click', () => {
    dark_toggle = !dark_toggle; 
    localStorage.setItem('darkMode', dark_toggle);
    dark_toggle ? dark_mode() : light_mode();
});

function dark_mode() {
    document.body.classList.remove('dark');
    dark_mode_button.textContent = "BRING ME BACK";
    document.getElementById('home_image').src = "https://web.archive.org/web/20091020182718/http://geocities.com/MissFarnaby/Button-catLittle.gif";
}

function light_mode() {
    document.body.classList.add('dark');
    dark_mode_button.textContent = "Light Mode?";
    document.getElementById('home_image').src = "https://web.archive.org/web/20090829083431/http://geocities.com/the_sonic_universe/skull.gif";
}


    




