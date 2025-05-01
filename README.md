# 5 Minute Chess.com Games Website

A website showing the 5 Minute Chess.com games I played from January 15, 2025 to April 9, 2025.  
Chess.com provides 1 free game rating per day, and using that I was able to collect metadata on the games.

## Attributes Collected:

- **id**: Auto-incremented id for each game.
- **Date**: The date the game was played.
- **Time**: The hour in which the game was played (for example, if played at 12:53 PM, it will be 12:00 PM).
- **Location**: The location where I initiated the game.
- **Opponent Rating**: The opponent's Chess.com 5 Minute matches rating at the time the game started.
- **Opponent Game Rating**: The arbitrary number given by Chess.com describing the opponent's moves.
- **Game Rating**: The arbitrary number given by Chess.com describing my moves.
- **Status**: Whether I won or lost the game.
- **Color**: The color I played as in the game.
- **End Method**: The way the game ended.
- **Accuracy**: The Chess.com given accuracy score of my moves.
- **Opening Accuracy**: The Chess.com given accuracy score of my opening moves.
- **Middlegame Accuracy**: The Chess.com given accuracy score of my moves during the middle of the game.
- **Endgame Accuracy**: The Chess.com given accuracy score of my moves near the end of the game.
- **Opponent Opening Accuracy**: The Chess.com given accuracy score of my opponent's opening moves.
- **Opponent Middlegame Accuracy**: The Chess.com given accuracy score of my opponent's moves during the middle of the game.
- **Opponent Endgame Accuracy**: The Chess.com given accuracy score of my opponent's moves near the end of the game.
- **Brilliant Moves**: The number of Chess.com defined brilliant moves played by me during the game.
- **Great Moves**: The number of Chess.com defined great moves played by me during the game.
- **Best Moves**: The number of Chess.com defined best moves played by me during the game.
- **Excellent Moves**: The number of Chess.com defined excellent moves played by me during the game.
- **Good Moves**: The number of Chess.com defined good moves played by me during the game.
- **Book Moves**: The number of Chess.com defined book moves played by me during the game.
- **Inaccuracies**: The number of Chess.com defined inaccuracies played by me during the game.
- **Mistakes**: The number of Chess.com defined mistakes played by me during the game.
- **Misses**: The number of Chess.com defined misses played by me during the game.
- **Blunders**: The number of Chess.com defined blunders played by me during the game.

## Files in GitHub:

- **images directory**: Directory of images used on the website.
- **.DS_Store**: Computer-generated file (can ignore).
- **collection.json**: A JSON of all the games played.
- **index.html**: Defining the homepage.
- **item-template.html**: Defining the page that shows a game's data.
- **item.js**: A script that generates the data for every page to be loaded on item-template.html.
- **script.js**: A script that generates an item for every game on the homepage.
- **styles.css**: Defining the designs of the homepage and item pages.
