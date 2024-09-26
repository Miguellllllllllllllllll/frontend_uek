window.addEventListener("load", () => {
  let zahlen = []; // Array, um die eingegebenen Zahlen zu speichern

  // Funktion, um die Summe der Zahlen zu berechnen
  function berechneSumme() {
    return zahlen.reduce((acc, zahl) => acc + zahl, 0);
  }

  // Event Listener für das Formular
  document
    .getElementById("numberForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Verhindert das Neuladen der Seite

      // Hole die Benutzereingabe und konvertiere sie in eine Zahl
      let eingabe = parseInt(document.getElementById("number").value, 10);

      // Füge die Zahl dem Array hinzu
      if (!isNaN(eingabe)) {
        zahlen.push(eingabe);

        // Berechne die Summe
        let summe = berechneSumme();

        // Zeige die Summe und die eingegebenen Zahlen an
        document.getElementById(
          "output"
        ).textContent = `Die Summe der eingegebenen Zahlen ist: ${summe}`;
        document.getElementById(
          "numbersList"
        ).textContent = `Eingegebene Zahlen: ${zahlen.join(", ")}`;
      }

      // Leere das Eingabefeld
      document.getElementById("number").value = "";
    });
});
