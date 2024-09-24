let zahlen = []; // Array, um die Zahlen zu speichern
let eingabe;

do {
  eingabe = prompt("Gib eine Zahl ein (oder drücke Enter, um zu beenden):");

  // Prüfe, ob die Eingabe eine Zahl ist und nicht leer
  if (eingabe !== "" && !isNaN(eingabe)) {
    zahlen.push(Number(eingabe)); // Füge die Zahl zum Array hinzu
  }
} while (eingabe !== ""); // Schleife läuft, bis eine leere Eingabe kommt

// Berechne die Summe der eingegebenen Zahlen
let summe = zahlen.reduce((acc, zahl) => acc + zahl, 0);

// Gib die Summe aus
alert("Die Summe der eingegebenen Zahlen ist: " + summe);
