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

// Dependencies

function id(name) {
//    typing "id" is faster
    return document.getElementById(name)
}

// Ship Image

let ship = document.getElementById("homepageShip")
// gets the blank ship element
ship.alt = "Click to Go to homepage"
ship.src = "homepageShip/Base.png"
// sets the data so we have less to put on each page
ship.addEventListener("mouseenter", function() {
    // when the mouse hovers over the ship
    ship.src = "homepageShip/Flying-One.png"
    // changes ship image
    setTimeout(function() {
        // setTimeout(function() {}, 1000) waits 1 second
        ship.src = "homepageShip/Flying-Two.png"
        setTimeout(function() {
            ship.src = "homepageShip/Flying-Three.png"
        }, 1000)
    }, 1000)
})

ship.addEventListener("mouseleave", function() {
    // when the mouse is no longer hovering over the ship
    ship.src = "homepageShip/Base.png"
})

ship.addEventListener("click", function() {
    // when the ship is clicked
    window.location.href = "Stellaris%20Mini%20Wiki%20main%20page.html"
    // redirects to homepage
})