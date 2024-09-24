// Wähle alle Spiele im Bereich "Neuveröffentlichungen" aus.
document.getElementsByTagName("ul")[0];
// ODER
document.querySelector(".New Releases");

// Wähle das zweite Spiel im Bereich "Bestseller" aus.
const gamesLists = document.querySelectorAll("ul.games");

// The second 'ul' with class 'games' is the 'Top Sellers' list, so access it by index 1
const topSellersList = gamesLists[1];

// Get the second item in the 'Top Sellers' list, which is GTA (index 1, as it's zero-based)
const gtaItem = topSellersList.getElementsByTagName("li")[1];

console.log(gtaItem.innerHTML); // This will log 'Grand Theft Auto V'

//3. Wähle das letzte Spiel im Bereich "Kostenlos spielen" aus.
// The second 'ul' with class 'games' is the 'Top Sellers' list, so access it by index 1
const freetoplay = gamesLists[2];

// Get the second item in the 'Top Sellers' list, which is GTA (index 1, as it's zero-based)
const lastgame = topSellersList.getElementsByTagName("li")[3];

console.log(gtaItem.innerHTML); // This will log 'Grand Theft Auto V'

// 4. Wähle alle Listenelemente im Bereich "Bestseller" aus.

const Bestseller = gamesLists[1];

// Get the second item in the 'Top Sellers' list, which is GTA (index 1, as it's zero-based)
const Bestsellerlist = topSellersList.getElementsByTagName("li");

console.log(Bestsellerlist.innerHTML); // This will log

// 5. Wähle das h1-Element aus.

document.getElementsByTagName("h1");

// 6. Wähle das game-of-the-day aus
document.getElementById("game-of-the-day");
// ODER
document.querySelector("#game-of-the-day");

// 7. Wähle alle Spiele aus, die im Sale sind
const salelist = document.querySelectorAll(".sale");
