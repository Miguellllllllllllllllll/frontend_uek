window.addEventListener("load", () => {
  // Wähle das Ziel-Button-Element aus
  const button = document.getElementById("choose");

  // Funktion zum zufälligen Auswählen eines Landes
  function chooseRandomCountry() {
    // Alle li-Elemente innerhalb der Liste abrufen
    const destinations = document.querySelectorAll("#destinations li");

    // Eine zufällige Zahl zwischen 0 und der Anzahl der Länder (destinations.length) erzeugen
    const randomIndex = Math.floor(Math.random() * destinations.length);

    // Zuerst alle vorherigen Hervorhebungen entfernen
    destinations.forEach((li) => li.classList.remove("highlight"));

    // Das zufällig ausgewählte Land hervorheben
    destinations[randomIndex].classList.add("highlight");
  }

  // Event-Listener hinzufügen, der die Funktion beim Klicken auf den Button auslöst
  button.addEventListener("click", chooseRandomCountry);
});
