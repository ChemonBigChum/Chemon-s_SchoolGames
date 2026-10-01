function openGame(url, gameName = "Game") {
    const gameWindow = document.getElementById("gameWindow");
    const gameFrame = document.getElementById("gameFrame");
    const currentGame = document.getElementById("currentGame");

    gameFrame.src = url;
    currentGame.textContent = gameName;

    gameWindow.classList.remove("hidden");

    document.body.style.overflow = "hidden";
}


function closeGame() {
    const gameWindow = document.getElementById("gameWindow");
    const gameFrame = document.getElementById("gameFrame");

    gameWindow.classList.add("hidden");

    gameFrame.src = "";

    document.body.style.overflow = "";
}


/* ==============================
   SEARCH
============================== */

const search = document.getElementById("search");
const gameCards = document.querySelectorAll(".game-card");
const noResults = document.getElementById("noResults");
const gameCount = document.getElementById("gameCount");

search.addEventListener("input", function () {

    const query = search.value.toLowerCase().trim();

    let visibleGames = 0;

    gameCards.forEach(card => {

        const name = card.dataset.name.toLowerCase();

        if (name.includes(query)) {

            card.style.display = "";

            visibleGames++;

        } else {

            card.style.display = "none";

        }

    });

    gameCount.textContent = visibleGames;

    if (visibleGames === 0) {
        noResults.style.display = "block";
    } else {
        noResults.style.display = "none";
    }

});