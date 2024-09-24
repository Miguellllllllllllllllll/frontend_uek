let number = Math.floor(Math.random() * 100) + 1; // Zufällige Zahl zwischen 1 und 100
let question;

function guess() {
  // Rate eine Zahl und speichere die Eingabe
  question = parseInt(prompt("Rate eine Zahl von 1 bis 100"), 10);
}

while (question !== number) {
  guess(); // Frage nach einer Zahl

  if (question < number) {
    alert("Zu niedrig!");
  } else if (question > number) {
    alert("Zu hoch!");
  } else {
    alert("Richtig geraten!");
  }
}
