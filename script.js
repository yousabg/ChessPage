let gamesData = [];

document.addEventListener("DOMContentLoaded", function () {
    fetch("collection.json")
    .then(response => response.json())
    .then(data => {
        gamesData = data;
        renderGames(gamesData);
    })
    .catch(error => console.error("Error loading JSON:", error));

    document.getElementById("sortButton").addEventListener("click", function () {
        const sortedData = [...gamesData].sort((a, b) => b.Accuracy - a.Accuracy);
        renderGames(sortedData);
    });
});

function renderGames(data) {
    const container = document.getElementById("collection");
    container.innerHTML = "";

    data.forEach(item => {
        let moveImage = getMoveImage(item.Accuracy);

        let div = document.createElement("div");
        div.classList.add("game-card");
        div.innerHTML = `
            <p><strong>Accuracy:</strong> ${item.Accuracy}%</p>
            <p><img src="images/${moveImage}" alt="Move Type" class="move-icon-large"></p>
            <h2>${item.Date}</h2>
            <p>${item.Location}</p>
            <a href="item-template.html?id=${item.id}">View More</a>
        `;
        container.appendChild(div);
    });
}

function getMoveImage(accuracy) {
    if (accuracy >= 90.00) {
        return "Brilliant.png";
    } else if (accuracy >= 85.00) {
        return "Great.png";
    } else if (accuracy >= 80.00) {
        return "Book.png";
    } else if (accuracy >= 70.00) {
        return "Best.png"; 
    } else if (accuracy >= 65.00) {
        return "Excellent.png";
    } else if (accuracy >= 60.00) {
        return "Good.png"; 
    } else if (accuracy >= 55.00) {
        return "Mistake.png";
    } else if (accuracy >= 50.00) {
        return "Inaccuracy.png";
    } else if (accuracy >= 45.00) {
        return "Miss.png";
    } else {
        return "Blunder.png";
    }
}