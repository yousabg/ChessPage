document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = parseInt(urlParams.get('id'));
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


    fetch("collection.json")
    .then(response => response.json())
    .then(data => {
        const item = data[itemId-1];
        if (item) {
            document.getElementById("item-title").innerText = `Game on ${item.Date}`;
            const moveImage = getMoveImage(item.Accuracy);
            document.getElementById("item-image").src = `images/${moveImage}`;
            document.getElementById("item-description").innerText = `Played at ${item.Location} as ${item.Color}. Result: ${item.Status}.`;

            document.getElementById("item-date").innerText = item.Date;
            document.getElementById("item-time").innerText = item.Time;
            document.getElementById("item-location").innerText = item.Location;
            document.getElementById("item-status").innerText = item.Status;
            document.getElementById("item-end-method").innerText = item["End Method"];
            document.getElementById("item-color").innerText = item.Color;
            document.getElementById("item-accuracy").innerText = item.Accuracy + "%";
            document.getElementById("item-game-rating").innerText = item["Game Rating"];
            document.getElementById("item-opponent-chess-rating").innerText = item["Opponent Rating"];
            document.getElementById("item-opponent-game-rating").innerText = item["Opponent Game Rating"];
            document.getElementById("item-opening-accuracy").innerText = item["Opening Accuracy"] + "%";
            document.getElementById("item-middlegame-accuracy").innerText = item["Middlegame Accuracy"] + "%";
            document.getElementById("item-endgame-accuracy").innerText = item["Endgame Accuracy"] || "N/A";
            document.getElementById("item-opponent-opening-accuracy").innerText = item["Opponent Opening Accuracy"] + "%";
            document.getElementById("item-opponent-middlegame-accuracy").innerText = item["Opponent Middlegame Accuracy"] + "%";
            document.getElementById("item-opponent-endgame-accuracy").innerText = item["Opponent Endgame Accuracy"] || "N/A";
            document.getElementById("item-brilliant").innerText = item["Brilliant Moves"];
            document.getElementById("item-great").innerText = item["Great Moves"];
            document.getElementById("item-best").innerText = item["Best Moves"];
            document.getElementById("item-excellent").innerText = item["Excellent Moves"];
            document.getElementById("item-good").innerText = item["Good Moves"];
            document.getElementById("item-book").innerText = item["Book Moves"];
            document.getElementById("item-innacuracy").innerText = item["Inaccuracy"];
            document.getElementById("item-mistakes").innerText = item["Mistakes"];
            document.getElementById("item-miss").innerText = item["Miss"];
            document.getElementById("item-blunders").innerText = item["Blunder"];

            const jsonLd = {
                "@context": "https://schema.org",
                "@type": "SportsEvent",
                "name": `Chess Game on ${item.Date}`,
                "startDate": `${item.Date}T${item.Time}`,
                "eventStatus": "https://schema.org/EventCompleted",
                "location": {
                    "@type": "Place",
                    "name": item.Location
                },
                "organizer": {
                    "@type": "Organization",
                    "name": "Belmont University"
                },
                "description": `A ${item.Status} played as ${item.Color} ending in ${item["End Method"]}.`,
                "competitor": [
                    {
                        "@type": "Person",
                        "name": "Yousab",
                        "memberOf": {
                            "@type": "Organization",
                            "name": "Belmont University"
                        }
                    },
                    {
                        "@type": "Person",
                        "name": "Opponent",
                        "description": `Rating: ${item["Opponent Rating"]}`
                    }
                ]
            };


            const script = document.createElement("script");
            script.type = "application/ld+json";
            script.textContent = JSON.stringify(jsonLd, null, 2);
            document.head.appendChild(script);
        } else {
            document.getElementById("item-title").innerText = "Game not found.";
        }
    })
.catch(error => console.error("Error loading JSON:", error));
});
