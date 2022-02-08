const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}

const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")

}


const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const playTo = document.querySelector("#playTo");



let winScore = 3;
let gameOver = false;


function updateScores(player, opponent) {
    if (player.score !== winScore && !gameOver) {
        player.score++;
        player.display.textContent = player.score;
        if (player.score === winScore) {
            gameOver = true;
            player.display.classList.add("winner");
            opponent.display.classList.add("loser");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }

}

p1Button.addEventListener("click", function () {

    updateScores(p1, p2);

})

p2Button.addEventListener("click", function () {

    updateScores(p2, p1);

})

resetButton.addEventListener("click", function () {
    reset();
})

playTo.addEventListener("change", function () {

    winScore = parseInt(this.value);
    reset();

})

function reset() {
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.classList.remove("winner", "loser");
        p.button.disabled = false;
        p.display.textContent = p.score;
    }

    gameOver = false;


}
