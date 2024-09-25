window.addEventListener("load", (event) => {
  // Hole das Canvas-Element und den 2D-Zeichnungs-Kontext
  const canvas = document.getElementById("watch");
  const context = canvas.getContext("2d");

  // Erstelle ein neues Bild-Objekt und lade das Bild der Armbanduhr
  const watchImage = new Image();
  watchImage.src = "watch.jpg"; // Stelle sicher, dass die URL des Bildes korrekt ist

  // Funktion, um die Uhrzeit zu zeichnen
  function drawTime() {
    // Lösche das Canvas, um es für die neue Zeit neu zu zeichnen
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Zeichne das Bild der Uhr
    context.drawImage(watchImage, 0, 0, canvas.width, canvas.height);

    // Hole die aktuelle Uhrzeit
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    // Setze die Schriftart, Größe und Textausrichtung
    context.font = "bold 50px 7Segment"; // Verwende die 7Segment-Schriftart
    context.fillStyle = "black"; // Textfarbe
    context.textAlign = "center";

    // Zeichne die Uhrzeit auf das Canvas (Position anpassen je nach Bild)
    context.fillText(
      `${hours}:${minutes}:${seconds}`,
      canvas.width / 2,
      canvas.height / 2 + 20
    );
  }

  // Sobald das Bild geladen ist, starte die Zeitaktualisierung
  watchImage.onload = () => {
    // Aktualisiere die Anzeige der Uhr im Sekundentakt
    setInterval(drawTime, 1000);
  };
});
