const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
  .then((response) => response.json()) // JSON-Daten direkt umwandeln
  .then((data) => console.log(data)); // Daten in der Konsole ausgeben
// .catch((error) => console.error("Fehler:", error)); // Fehlerbehandlung
