// Responsive Navbar
let hamburger = document.querySelector(".hamburger");
let navLinks = document.querySelector(".nav-links");
let links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
});

// Visibility of back-to-top button
window.addEventListener('scroll', function () {
    let backToTopButton = document.querySelector('.back-to-top-button');
    let windowPosition = window.scrollY > 50;
    backToTopButton.classList.toggle('scrolling-active', windowPosition);
})

// Disabled submit button until the checkbox is checked
let checkbox = document.getElementById('terms-and-conditions-checkbox');
let submitButton = document.getElementById('submitButton');

checkbox.addEventListener('change', function () {
    submitButton.disabled = !this.checked;
});

checkbox.addEventListener('change', () => {
    if (this.checked) {
        submitButton.classList.toggle("button-enabled");
    }
    else {
        submitButton.classList.toggle("button-disabled");
    }
});

// Fuction to disable right click and to show snackbar to user
function disableRightclick() {
    document.addEventListener('contextmenu', e => e.preventDefault());

    let snackbar = document.getElementById("snackbar");

    snackbar.className = "show";

    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

// Registration form to google sheet
let scriptURL = 'https://script.google.com/macros/s/AKfycby7WYMH46OmNxAjjbWwl65FiFvi_VAQof7fM8B5vAbnyOV4ILNJgU06TuVoNLjQ12VBiw/exec';
let form = document.forms['registration-form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => console.log('Registration form submitted!'))
        .catch(error => console.error(error.message));
});