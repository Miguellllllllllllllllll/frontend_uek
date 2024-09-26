let zips = [];

// Lädt die Daten aus places.json
fetch("./places.json")
  .then((res) => res.json())
  .then((data) => {
    zips = data; // Speichert die Daten in der zips-Variable
  })
  .catch((error) => console.error("Fehler beim Laden der Datei:", error));

// Event-Listener für das Eingabefeld der Postleitzahl
document.getElementById("postal-code").addEventListener("blur", function () {
  const postalCode = this.value;

  // Sucht den Ort basierend auf der Postleitzahl
  const foundPlace = zips.find((place) => place.zipcode === postalCode);

  if (foundPlace) {
    document.getElementById("city").value = foundPlace.community; // Setzt den Ort
  } else {
    document.getElementById("city").value = ""; // Leert das Feld, wenn kein Ort gefunden wird
    alert("Ort nicht gefunden für die eingegebene Postleitzahl."); // Hinweis für den Benutzer
  }
});
