window.addEventListener("load", () => {
  let number = Math.floor(Math.random() * 100) + 1; // Zufällige Zahl zwischen 1 und 100
  let attempts = 0;

  // Funktion, um die Benutzereingabe zu prüfen
  function checkGuess(guess) {
    attempts++;
    if (guess < number) {
      return "Zu niedrig!";
    } else if (guess > number) {
      return "Zu hoch!";
    } else {
      return `Richtig geraten! Die Zahl war ${number}. Du hast ${attempts} Versuche gebraucht.`;
    }
  }

  // Event Listener für das Formular
  document
    .getElementById("guessForm")
    .addEventListener("submit", function (event) {
      // Verhindert das Neuladen der Seite
      event.preventDefault();

      let userGuess = parseInt(document.getElementById("guess").value, 10);
      let outputMessage = checkGuess(userGuess);

      // Ergebnis auf der Webseite anzeigen
      document.getElementById("output").textContent = outputMessage;

      // Anzahl der Versuche anzeigen
      document.getElementById("attempts").textContent = `Versuche: ${attempts}`;

      // Wenn die richtige Zahl erraten wurde, Formular deaktivieren
      if (userGuess === number) {
        document.getElementById("guessForm").style.display = "none";
      }
    });
});
