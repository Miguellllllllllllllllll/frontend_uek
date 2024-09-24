// Alben und ihre Tracks
const albums = {
  "FNF Vol. 01": ["Track 1", "Track 2", "Track 3"],
  "FNF Vol. 02": ["Track 4", "Track 5", "Track 6"],
  "FNF Vol. 03": ["Track 7", "Track 8", "Track 9"],
  Doom: ["Track 10", "Track 11", "Track 12"],
  DBZ: ["Track 13", "Track 14", "Track 15"],
};

// Funktion zum Anzeigen der Trackliste
function showTracklist(album) {
  const tracklistDiv = document.getElementById("tracklist");
  tracklistDiv.innerHTML = `<h3>Trackliste für ${album}</h3><ul>${albums[album]
    .map((track) => `<li onclick="playSong('${track}')">${track}</li>`)
    .join("")}</ul>`;
}

// Funktion zum Abspielen eines Songs
function playSong(track) {
  document.getElementById(
    "current-song"
  ).innerText = `Currently playing: ${track}`;
}

// Randomizer-Funktion
function randomizeAlbums() {
  const albumNames = Object.keys(albums);
  const randomized = albumNames.sort(() => Math.random() - 0.5);
  const albumGrid = document.querySelector(".album-grid");
  albumGrid.innerHTML = randomized
    .map(
      (name) =>
        `<img class="album-cover" src="/pics/${name}.jpg" alt="${name}" onclick="showTracklist('${name}')" />`
    )
    .join("");
}

// Event Listener für den Randomizer-Button
document.getElementById("more").addEventListener("click", randomizeAlbums);
