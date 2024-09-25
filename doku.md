# Doku für LB A

## alerts

### direkt beim laden:

**inline:**

```
<script>
      alert("Hallo Welt");
</script>
```

**outline:**

html:

```
<script src="alertbox_outline.js"></script>
```

js:

```
alert("Hallo Welt");
```

### als Button:

**inline:**
html:

```
<script>
      function showMessage() {
        alert("Hallo Welt");
      }
    </script>

 <button onclick="showMessage()">Klicke mich</button>
```

andere variante:
js

```
 const alertbutton = document.getElementsByTagName("button")[0];

  if (alertbutton) {
    alertbutton.onclick = function () {
      alert("du dumme siech");
    };
  }
```

## Dev Tools

## Breakpoint setzen

1. Entiwckler tools öffnen
2. Quellen öffnen
3. File auswählen
4. Linke Seite roten Punkt drücken.

## Breakpoint setzen um eine Variable zu verändern (z. B. result)

### Variable überprüfen

```
Name;
```

### Neue Variable

```
Let Name = wert;
```

### Neuen Logpoint

1. Quellen Öffnen
2. recht klick auf der linken Seiter drücken

## Begrüßung basierend auf Tageszeit

**outline:**

html

```
<script src="hallo.js"></script>
```

js

```
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

```

## so lange zahl eingefügt wird kommt alertbox

**outline:**

html:

```
  <script src="/while.js"></script>
```

js:

```
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

```

## Document(DOM)

### how to select ul w all its lists

```
document.getElementsByTagName("ul")//welches ul z.b [0];
```

or if it has a css class:

```
document.querySelector(".klassennamen");
```

### Zweite spiel in einer ul liste

```
// Wähle das zweite Spiel im Bereich "Bestseller" aus.
const gamesLists = document.querySelectorAll("ul.games");

// The second 'ul' with class 'games' is the 'Top Sellers' list, so access it by index 1
const topSellersList = gamesLists[1];

// Get the second item in the 'Top Sellers' list, which is GTA (index 1, as it's zero-based)
const gtaItem = topSellersList.getElementsByTagName("li")[1];
```

## last il in a ul

```
//3. Wähle das letzte Spiel im Bereich "Kostenlos spielen" aus.
// The second 'ul' with class 'games' is the 'Top Sellers' list, so access it by index 1
const gamesLists = document.querySelectorAll("ul.games");
const freetoplay = gamesLists[2];
const lastgame = freetoplay.getElementsByTagName("li")[3];
```

### all li in a ul

```
// 4. Wähle alle Listenelemente im Bereich "Bestseller" aus.
const gamesLists = document.querySelectorAll("ul.games");
const Bestseller = gamesLists[1];
```

### select h1

```
// 5. Wähle das h1-Element aus.

document.getElementsByTagName("h1");
```

### get something w an id

```
document.getElementById("idname");
```

OR w as css class:

```
document.querySelector("#idname");
```

### all things w a specific class

```
document.querySelectorAll(".classname");
```

### read smt in console out:

```
//Klasse 'capital' und gib den Textinhalt aus const capital =
document.getElementsByClassName("capital")[0];
console.log(capital.innerText);
```

### count smt in conlsole out:

```
// Wähle alle Elemente mit der Klasse 'region' und zähle, wie viele es gibt
const regions = document.getElementsByClassName("region");
console.log("Anzahl der Regionen: " + regions.length);
```

### give all name w class p-name and attribut data-group="nature"

```
const natureItems = document.querySelectorAll(".p-name[data-group='nature']");
// Iteriere durch die ausgewählten Elemente und gib ihre Texte aus
natureItems.forEach((item) => {
  console.log(item.innerText);
});
```

### give out info from with class name

```
const bulgariaArea = document.querySelector(".area-bulgaria");
console.log(bulgariaArea.innerText);
```

### Hintergrundfarbe ändern

```
document.body.style.backgroundColor = "gewünschte farbe z.B orange";
```

### change the content inside a tag (for example h1)

```
  document.body.getElementsByTagName("h1")[0].innerHTML = "Miguel Sousa";
```

### add a class to tag (for example class "large" to tag "p")

```
 const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add("large");
  });
```

### add a li inside ul w text

```
  const ul = document.getElementsByTagName("ul")[0];
  const newLi = document.createElement("li");
  newLi.textContent = "Yeil"; // Hier kannst du den gewünschten Text angeben
  ul.appendChild(newLi);
```

### delete a il inside ul

```
 const ull = document.getElementsByTagName("ul")[0];
  const deleteli = ull.getElementsByTagName("li")[1];
  if (deleteli) {
    // löschen
    ull.removeChild(deleteli);
  }
```

### add a image/gif (after the h1)

```
const img = document.createElement("img");
  const h1 = document.getElementsByTagName("h1")[0];

  // Setze die Attribute für das <img>-Element
  img.src =
    "https://art.ngfiles.com/images/1762000/1762545_cootiegirl_starring-pico-and-friends.gif?f1618963325"; // URL des Bildes
  img.alt = "Platzhalterbild"; // Alternativtext
  img.style.width = "200px"; // Optional: Breite des Bildes
  // Füge das <img>-Element nach dem <h1>-Element ein
  h1.insertAdjacentElement("afterend", img);
```

### Counter 1

```
document.getElementById("button1").onclick = function () {
    const counter1 = document.getElementById("counter1");
    let currentValue = parseInt(counter1.textContent);
    counter1.textContent = currentValue + 1;
  };
```

### Counter 2

```
document.getElementById("button2").onclick = function () {
    const counter2 = document.getElementById("counter2");
    let currentValue = parseInt(counter2.textContent);
    counter2.textContent = currentValue + 1;
  };
```

### ball tghat jumps on click

html

```
<div id="ballContainer">
      <div id="ball"></div>
    </div>
```

js

```
// Ball springen lassen
  document.getElementById("ballContainer").onclick = function (event) {
    const ball = document.getElementById("ball");
    const rect = ballContainer.getBoundingClientRect();

    // Berechne die neue Position für den Ball
    const x = event.clientX - rect.left - ball.offsetWidth / 2;
    const y = event.clientY - rect.top - ball.offsetHeight / 2;

    // Setze die neue Position
    ball.style.transform = `translate(${x}px, ${y}px)`;
  };
```

## Trouble

### Window.load reintuhen:

```
window.addEventListener("load", (event) => {
// hier dein code
});
```

OR

```
document.addEventListener("DOMContentLoaded", () => {
// hier dein code
});
```

## Animns

html:

```
 <!-- Quadrat-Element -->
    <div id="box"></div>

    <!-- Button -->
    <button id="toggleButton">Animieren</button>
```

css:

```
/* Stil für das Quadrat */
#box {
  width: 100px;
  height: 100px;
  background-color: blue;
  position: relative;
  transition: background-color 1s ease, width 2s ease, transform 2s ease;
}

/* Endwerte für die Animation */
#box.animate {
  background-color: red;
  width: 200px;
  transform: translateX(200px) rotate(45deg);
}
```

js:

```
window.addEventListener("load", (event) => {
  // JavaScript, um die Animation zu starten oder zurückzusetzen
  document
    .getElementById("toggleButton")
    .addEventListener("click", function () {
      var box = document.getElementById("box");
      box.classList.toggle("animate");
    });
});
```

### Scroll animation

html:

```<section class="hidden">
      <h2>Sektion 1</h2>
      <p>Diese Sektion erscheint, wenn du hierhin scrollst.</p>
    </section>
```

css:

```
/* Basis-Stile */
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  padding: 20px;
}

section {
  margin: 50px 0;
  padding: 20px;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  opacity: 0; /* Sektionen sind am Anfang unsichtbar */
  transform: translateY(50px); /* Anfangsposition */
  transition: opacity 1s ease-out, transform 1s ease-out;
}

/* Klasse, die hinzugefügt wird, wenn die Sektion sichtbar ist */
section.visible {
  opacity: 1;
  transform: translateY(0); /* Endposition, wenn sichtbar */
}
```

js:

```
window.addEventListener("load", (event) => {
  // Alle Sektionen auswählen, die beobachtet werden sollen
  const sections = document.querySelectorAll("section");

  // IntersectionObserver-Callback-Funktion
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Wenn die Sektion sichtbar ist, füge die Klasse 'visible' hinzu
          entry.target.classList.add("visible");
          // Optional: Sobald die Sektion sichtbar ist, hört der Observer auf, sie zu beobachten
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  ); // Schwellenwert: 10% der Sektion müssen sichtbar sein

  // Jede Sektion dem Observer hinzufügen
  sections.forEach((section) => {
    observer.observe(section);
  });
});
```

### smiley zeichnen

html:

```
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SVG Smiley</title>
    <style>
      /* Stil für das SVG-Element */
      svg {
        display: block;
        margin: 50px auto;
        background-color: #f0f0f0;
      }
      /* Optional: Anpassung der Farben */
      circle {
        stroke: black;
        stroke-width: 4px;
      }
    </style>
  </head>
  <body>
    <h1>SVG Smiley</h1>

    <!-- SVG-Element für den Smiley -->
    <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <!-- Kopf des Smileys -->
      <circle cx="100" cy="100" r="80" fill="yellow" stroke="black" />

      <!-- Linkes Auge -->
      <circle cx="70" cy="70" r="10" fill="black" />

      <!-- Rechtes Auge -->
      <circle cx="130" cy="70" r="10" fill="black" />

      <!-- Mund mit path -->
      <path
        d="M 60 120 Q 100 160, 140 120"
        fill="transparent"
        stroke="black"
        stroke-width="5"
      />
    </svg>
  </body>
</html>

```

function init() {
document.getElementById("about").style.color = 'blue';
}
