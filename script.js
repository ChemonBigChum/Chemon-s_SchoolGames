function openGame(game) {

    // Hide the game selection
    document.getElementById("games").style.display = "none";

    // Show the game window
    document
        .getElementById("gameWindow")
        .classList.remove("hidden");

    // Load the game into the iframe
    document
        .getElementById("gameFrame")
        .src = game;
}


function closeGame() {

    // Stop the game
    document
        .getElementById("gameFrame")
        .src = "";

    // Hide the game window
    document
        .getElementById("gameWindow")
        .classList.add("hidden");

    // Show the game selection again
    document.getElementById("games").style.display = "grid";
}