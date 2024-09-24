// Name des Benutzers abfragen
let name = prompt("Wie heißt du?");

// Aktuelle Uhrzeit ermitteln
let currentTime = new Date();
let currentHour = currentTime.getHours();

// Begrüßung je nach Tageszeit
if (currentHour >= 5 && currentHour < 12) {
  alert("Guten Morgen, " + name + "!");
} else if (currentHour >= 12 && currentHour < 18) {
  alert("Guten Tag, " + name + "!");
} else if (currentHour >= 18 && currentHour < 22) {
  alert("Guten Abend, " + name + "!");
} else {
  alert("Gute Nacht, " + name + "!");
}
