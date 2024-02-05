// Sticky Navbar
// When the user scrolls the page, execute shadowFunction
window.onscroll = function() {shadowFunction()};

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function shadowFunction() {
    // Get the navbar
    var navbarSticky = document.querySelector('.navbar');

    // Get the offset position of the navbar
    var sticky = navbarSticky.offsetTop;

    if (window.scrollY > sticky) {
        navbarSticky.classList.add("navbar-shadow")
    } else {
        navbarSticky.classList.remove("navbar-shadow")
    }
}