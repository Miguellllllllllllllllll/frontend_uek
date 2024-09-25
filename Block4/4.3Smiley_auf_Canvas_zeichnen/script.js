window.addEventListener("load", () => {
  const canvas = document.getElementById("smiley");
  const context = canvas.getContext("2d");

  // Kopf zeichnen
  //fillRect(x, y, width, height)

  // Augen zeichnen (hier kannst du später die Logik hinzufügen)
  context.fillStyle = "dark";
  context.fillRect(100, 30, 10, 10);
  context.fillRect(75, 30, 10, 10);
  // Mund zeichnen (hier kannst du später die Logik hinzufügen)
  context.beginPath();

  context.arc(95, 50, 40, 0, 2 * Math.PI);
  context.stroke();
});
