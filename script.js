// JavaScript for hamburger menu functionality
document.getElementById("hamburger").onclick = function() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("active"); // Toggle the active class on the nav links
};
