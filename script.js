// Get all navigation links
const navLinks = document.querySelectorAll("nav a");

// Add click effect
navLinks.forEach(link => {
    link.addEventListener("click", function () {
        console.log("Navigating to: " + this.textContent);
    });
});


// Welcome message when the website loads
window.addEventListener("load", function () {
    console.log("Welcome to my portfolio!");
});