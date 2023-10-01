const navbar = () => {
    const navbarBurguer = document.querySelector('.navbar-burguer');
    const navbarLinks = document.querySelector('.navbar-items');
    const navbarUniqueLinks = document.querySelectorAll('.navbar-items li');
    const navbarLinksItems = document.querySelectorAll('.navbar-link');
    const navbarSocialLinks = document.querySelectorAll('.navbar-social')

    navbarBurguer.addEventListener('click', () => {

        // on click, enable 'navbar-burguer-active' class
        navbarLinks.classList.toggle('navbar-burguer-active');

        // change the links color
        navbarLinksItems.forEach((link) => {
            link.style.color = "black";
        })

        // animate links
        navbarUniqueLinks.forEach((link, index) => { // 'index' is used to select each link id
            if (link.style.animation) { // if animation is set, do nothing else, apply config --> this checks if navbar is open or not
                link.style.animation = '';
            } else {
                link.style.animation = `navbarFade 0.5s ease forwards ${index / 2 + 1}s`; // divide index by 5 to add a delay in the fade
            }
        });

        navbarSocialLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navbarFade 0.5s ease forwards ${index / 2 + 1}s`;
            }
        });

        // switch to close sign
        navbarBurguer.classList.toggle('toggle');

    });

}

navbar();

// Sticky Navbar
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbarSticky = document.querySelector('.navbar');

// Get the offset position of the navbar
var sticky = navbarSticky.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        navbarSticky.classList.add("navbar-shadow")
    } else if (window.pageYOffset == sticky) {
        navbarSticky.classList.remove("navbar-shadow")
    }
}