// Funktion zum Berechnen der Begrüßung basierend auf der Tageszeit
function getGreeting(name) {
  let currentTime = new Date();
  let currentHour = currentTime.getHours();
  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Guten Morgen, " + name + "!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greeting = "Guten Tag, " + name + "!";
  } else if (currentHour >= 18 && currentHour < 22) {
    greeting = "Guten Abend, " + name + "!";
  } else {
    greeting = "Gute Nacht, " + name + "!";
  }

  return greeting;
}

// Event Listener für das Formular
document
  .getElementById("greetingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das Neuladen der Seite
    let name = document.getElementById("name").value;

    // Berechne die Begrüßung
    let greetingMessage = getGreeting(name);

    // Begrüßung im HTML-Element anzeigen
    document.getElementById("greeting").textContent = greetingMessage;
  });
