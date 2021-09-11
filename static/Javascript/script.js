// Responsive Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

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

    var snackbar = document.getElementById("snackbar");

    snackbar.className = "show";

    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}