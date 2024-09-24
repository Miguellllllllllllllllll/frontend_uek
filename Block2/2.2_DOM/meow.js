//1. Benutzen Sie getElementsByClassName und innerText, um den Namen der Hauptstadt auszugeben. javascript Code kopieren
// Wähle das Element mit der
//Klasse 'capital' und gib den Textinhalt aus const capital =
document.getElementsByClassName("capital")[0];
console.log(capital.innerText);

//2. Zählen Sie, wie viele Regionen es gibt, indem Sie getElementsByClassName und length verwenden. javascript Code kopieren
// Wähle alle Elemente mit der Klasse 'region' und zähle, wie viele es gibt
const regions = document.getElementsByClassName("region");
console.log("Anzahl der Regionen: " + regions.length);

//3. Geben Sie alle Namen "Klasse: p-name" der Einträge mit dem Attribut data-group="nature" auf der Konsole aus. Verwenden Sie querySelectorAll und forEach.
// Wähle alle Elemente mit der Klasse 'p-name' und dem Attribut 'data-group="nature"'
const natureItems = document.querySelectorAll(".p-name[data-group='nature']");

// Iteriere durch die ausgewählten Elemente und gib ihre Texte aus
natureItems.forEach((item) => {
  console.log(item.innerText);
});

//4. Geben Sie die Fläche von Bulgarien mit nur einem querySelector und innerText zurück.

// Wähle das Element, das die Fläche von Bulgarien enthält, und gib den Textinhalt aus
const bulgariaArea = document.querySelector(".area-bulgaria");
console.log(bulgariaArea.innerText);
