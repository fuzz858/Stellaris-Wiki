function toggleMenu() {
    var menu = document.getElementById("vertical-menu");
    var mainContent = document.getElementById("main-content");

    if (menu.classList.contains("menu-hidden")) {
        // Show the menu and push content
        menu.classList.remove("menu-hidden");
        // Adjust main content margin to match menu width for a "push" effect
        mainContent.style.marginLeft = "200px";
    } else {
        // Hide the menu and bring content back
        menu.classList.add("menu-hidden");
        mainContent.style.marginLeft = "0";
    }
}
