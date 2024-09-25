# Basierend auf probe test

### Welche Aussagen sind zutreffend im Bezug auf die Benutzung von JavaScript in einem modernen Browser

- JavaScript wird vom Browser ausgeführt.

- Im Gegensatz zu HTML und CSS, kann mit JavaScript programmiert werden.

- Unter Inline-JavaScript ist die Verwendung von JavaScript innerhalb eines HTML-Attributes gemeint.

### Wie kann sichergestellt werden, dass bei der Ausführung von JavaScript der DOM schon geladen ist?

- Einbinden des externen JavaScripts mit <script src="script.js" defer></script>

- Einbinden des externen JavaScripts am Ende des Inhalts vom Body-Element mit <script src="script.js"></script>

- Einbinden des externen JavaScript mit <script src="script.js"></script>, wobei document.addEventListener("DOMContentLoaded", () => {}); verwendet wird

### Wie kann aus jeder ungeordneten Liste der erste Eintrag selektiert werden?

```
document.querySelectorAll("ul li:first-child")
```

ODER

```
document.querySelectorAll("ul li:nth-child(1)")
```

### Wie kann man alle sachen mit eine klasse selektiert werden?

```
document.getElementsByClassName('klassenname')
```

ODER

```
document.querySelectorAll('.klassenname')
```

### Wie können alle sachen selektiert werden, wofür keine klasse definiert ist, sprich, das Attribut 'class' fehlt?

```
document.querySelectorAll('li:not([class])')
```

ODER man testet es mit allen klassen die es gibt

```
document.querySelectorAll('li:not(.gruen):not(.rot)')
```

### Wie können alle li-Elemente mit einer Id selektiert werden?

```
document.querySelectorAll('#idname + ul li')
```

ODER

```
document.getElementById('idname').nextElementSibling.getElementsByTagName('li')
```

### Wie können alle Kindelemente von der letzten ungeordneten Liste ausgegeben werden?

```
// nich so schön
document.getElementsByTagName('ul')[nummer von liste].children
```

ODER

```
document.querySelector('ul:last-of-type').children
```

ODER

```
const ul = document.getElementsByTagName('ul');
ul[ul.length - 1].children
```

### wie können alle sachen mit eine Spezifischen klasse entfernt werden?

```
document.querySelectorAll(".klassen name").forEach(n => n.remove())
```

### Wie kann dem "Kürbis" (ein li) die Farbe orange als CSS Klasse hinzugefügt werden?

```
const gemuese = document.getElementsByTagName('li');
for(let g of gemuese) {
  if(g.innerText === "Kürbis") {
    g.classList.add('orange');
  }
}
```

ODER

```
const gemuese = document.querySelectorAll('li');
for(let g of gemuese) {
  if(g.innerText === "Kürbis") {
    g.classList.add('orange');
  }
}
```

### Wie kann der Liste mit einer spezifischen id ein li hinzugefügt werden?

```
const fruehlingsListe = document.querySelector('#idname + ul');
const spargel = document.createElement('li');
spargel.innerText = 'textinhalt';
fruehlingsListe.appendChild(spargel);
```

### unterschied zu DOM verstekcen und entfernen

- Entfernen

```
const sommerTitel = document.getElementById('sommer');
sommerTitel.remove();
```

- verstecken, aber der PLatz bleibt bestehen und nix verrrutscht

```
const sommerTitel = document.getElementById('sommer');
sommerTitel.style.visibility = 'hidden';
```

- Verstecken, der platz wird nicht behalten und nachfolgende elemente rutschen nach.

```
const sommerTitel = document.getElementById('sommer');
sommerTitel.style.display = 'none';
```

### was ist ein dialog feld?

- Ein modaler Dialog ist ein UI-Element, das eine Benutzeraktion erfordert, bevor die Anwendung fortgesetzt werden kann. Er öffnet sich als Pop-up und blockiert die restliche Anwendung. Typischerweise enthält er eine Nachricht und Schaltflächen zum Bestätigen oder Abbrechen.

- Modal-Dialoge werden verwendet, um Aktionen wie das Löschen oder Speichern von Daten zu bestätigen und zusätzliche Informationen anzuzeigen. Sie können mit JavaScript, CSS und HTML erstellt werden, oft unterstützt von Frameworks wie Bootstrap oder Material UI.
