# Wichitge doku für Morgen

1. [Fetch](#Fetch)
   1. [Wie benutze ich einen Fetch?](##how-to-use-fetch)
   2. [Was sind postrequests?](##was-sind-postrequests?)
   3. [Wie zeige ich dieses als html?](##json-to-html)
2. [wie implemetiere ich form/label/input?](#form-label-and-input)
3. [Verwendung](#verwendung)
   1. [Unterpunkt 1](#unterpunkt-1)
   2. [Unterpunkt 2](#unterpunkt-2)
4. [Fazit](#fazit)

# Fetch

## was sind fetch methods?

### POST

- Verwendungszweck: Sendet Daten an den Server, um neue Ressourcen zu erstellen oder Aktionen auszuführen.
- Beispiel:

```
fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Neuer Eintrag',
    description: 'Beschreibung'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

Beschreibung:

- POST wird verwendet, um Daten an den Server zu senden und oft neue Ressourcen zu erstellen (z. B. einen neuen Datenbankeintrag).
  Die Daten werden im Body des Requests übergeben.

### GET

- Verwendungszweck: Ruft Daten vom Server ab, ohne Änderungen am Server vorzunehmen.
  Beispiel:

```
fetch('https://api.example.com/data')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

Beschreibung:

- Diese Methode wird verwendet, um Daten vom Server abzurufen.
  GET-Anfragen haben keinen Body, alle Informationen werden in der URL mitgegeben.

### PUT

- Verwendungszweck: Aktualisiert eine bestehende Ressource auf dem Server.
- Beispiel:

```
fetch('https://api.example.com/data/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Aktualisierter Eintrag',
    description: 'Neue Beschreibung'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

- Beschreibung:
  PUT überschreibt eine gesamte Ressource mit neuen Daten.
  Es wird üblicherweise verwendet, um eine bestehende Ressource vollständig zu aktualisieren.

### PATCH

- Verwendungszweck: Teilweise Aktualisierung einer bestehenden Ressource.
- Beispiel:

```
fetch('https://api.example.com/data/1', {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    description: 'Teilweise aktualisierte Beschreibung'
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));
```

- Beschreibung:
  PATCH wird verwendet, um nur bestimmte Felder einer Ressource zu aktualisieren.
  Anders als bei PUT wird hier nur ein Teil der Daten aktualisiert, ohne die Ressource komplett zu überschreiben.

### DELETE

- Verwendungszweck: Löscht eine Ressource auf dem Server.
- Beispiel:

```
fetch('https://api.example.com/data/1', {
  method: 'DELETE'
})
.then(response => console.log('Resource deleted'))
.catch(error => console.error('Error:', error));
```

- Beschreibung:
  DELETE wird verwendet, um eine bestimmte Ressource (z. B. eine Datenbankzeile) zu entfernen.
  Es gibt in der Regel keinen Body bei einem DELETE-Request.

### HEAD

- Verwendungszweck: Ruft nur die Header-Informationen einer Ressource ab, ohne den Body zu laden.
- Beispiel:

```
fetch('https://api.example.com/data', {
  method: 'HEAD'
})
.then(response => console.log(response.headers))
.catch(error => console.error('Error:', error));
```

- Beschreibung:

HEAD ist ähnlich wie GET, aber es werden nur die Header der Antwort zurückgegeben, ohne den eigentlichen Daten-Body.
Nützlich, um Metadaten zu erhalten, ohne die komplette Ressource zu laden.

### Zusammenfassung mehods

- GET: Zum Abrufen von Daten.
- POST: Zum Erstellen neuer Ressourcen oder Ausführen von Aktionen.
- PUT: Zum vollständigen Ersetzen oder Aktualisieren einer Ressource.
- PATCH: Zum teilweisen Aktualisieren einer Ressource.
- DELETE: Zum Löschen einer Ressource.
- HEAD: Zum Abrufen von Header-Informationen einer Ressource, ohne den Body zu laden.

## how-to-use-fetch

```

const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
// JSON-Daten direkt umwandeln
.then((response) => response.json())
// Daten in der Konsole ausgeben
.then((data) => console.log(data))

```

errorhandling:

```

.catch((error) => console.error("Fehler:", error)); // Fehlerbehandlung

```

## json to html

1. erstelle ein div mit id:

```

<!-- Hier werden die JSON-Daten angezeigt -->
 <div id="posts-container"></div>
```

2. Auf console alle
3. Funktion displayPosts erstellen:

```
// Funktion, die die JSON-Daten in HTML umwandelt und anzeigt
function displayPosts(posts) {

    // Den Container auswählen
    const container = document.getElementById('posts-container');

    posts.forEach(post => {
        // Erstelle ein HTML-Element für jeden Post
        const postElement = document.createElement('div');
        postElement.classList.add('post'); // Optional: Klassenname hinzufügen

        // Füge die Daten des Posts in das HTML ein
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body}</p>
            <hr>
        `;

        // Füge das erstellte Element in den Container ein
        container.appendChild(postElement);
    });
}

```

# form label and input

## theory

### Labels:

- Ein label-Element wird verwendet, um einem Eingabefeld (Input-Feld) eine Bezeichnung (Beschriftung) zu geben. Es verbessert die Benutzerfreundlichkeit, indem es dem Benutzer zeigt, was in das Eingabefeld eingegeben werden soll.

### Input-Felder:

- Das input-Element ermöglicht dem Benutzer, Daten einzugeben. Es gibt verschiedene Typen von Eingabefeldern, wie z.B. Textfelder, Passwortfelder, Checkboxen, Radio-Buttons usw.

## example

```
<form action="/submit" method="post">
        <!-- Name-Eingabe -->
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Gib deinen Namen ein">

        <!-- E-Mail-Eingabe -->
        <label for="email">E-Mail:</label>
        <input type="email" id="email" name="email" placeholder="Gib deine E-Mail ein">

        <!-- Passwort-Eingabe -->
        <label for="password">Passwort:</label>
        <input type="password" id="password" name="password" placeholder="Gib dein Passwort ein">

        <!-- Absenden-Button -->
        <input type="submit" value="Absenden">
    </form>
```

# unterschied frontend/backend

## frontend

1. Frontend (Client-seitiger Teil)

- Beschreibung: Das Frontend ist der Teil einer Webanwendung, den der Benutzer sieht und mit dem er interagiert. Es handelt sich um den sichtbaren Teil der Anwendung, der direkt im Webbrowser des Benutzers läuft.
- Technologien:
- HTML: Struktur und Inhalt der Webseite (Texte, Bilder, etc.).
- CSS: Layout und Design (Farben, Schriftarten, Positionierung).
- JavaScript: Interaktivität und dynamische Funktionalität (z. B. Formularüberprüfung, Navigation, Datenanzeige).
- Frameworks/Bibliotheken: React, Angular, Vue.js (für strukturierte und komplexe Frontend-Entwicklung).
- Aufgaben des Frontends:
  Anzeige von Inhalten.
  Entgegennahme von Benutzereingaben (z. B. in Formularen).
  Senden von Anfragen an das Backend (z. B. via fetch() oder axios).
  Darstellung von Daten, die vom Backend empfangen werden.
  Dynamische Benutzeroberflächen (z. B. durch JavaScript oder Frameworks wie React).
- Beispiel: Die Login-Seite in deinem Beispiel ist Teil des Frontends. Es zeigt das Anmeldeformular und sendet die Benutzereingaben an das Backend.

## backend

2. Backend (Server-seitiger Teil)

- Beschreibung: Das Backend ist der Teil der Webanwendung, der auf einem Server läuft und nicht direkt für den Benutzer sichtbar ist. Es verarbeitet die Logik, speichert Daten und kümmert sich um die Kommunikation zwischen der Datenbank und dem Frontend.
- Technologien:
  Programmiersprachen: Java, Node.js, Python, PHP, Ruby, etc.
- Datenbanken: MySQL, PostgreSQL, MongoDB (zum Speichern von Daten).
- Server: Apache, Nginx (zum Hosten der Backend-Anwendung).
- Frameworks: Express.js (für Node.js), Spring Boot (für Java), Django (für Python).
  Aufgaben des Backends:
  Verarbeitung von Anfragen vom Frontend (z. B. Login-Daten verifizieren, Daten aus der Datenbank abfragen).
  Speicherung und Verwaltung von Daten (z. B. in Datenbanken).
  Bereitstellen von APIs (Application Programming Interfaces), die das Frontend verwenden kann, um Daten abzurufen oder zu senden.
  Verwaltung von Sitzungen, Authentifizierung und Autorisierung.
- Beispiel: In deinem Login-Beispiel wäre das Backend dafür verantwortlich, die Login-Daten zu empfangen, zu prüfen, ob der Benutzer existiert, und ob das Passwort korrekt ist. Bei Erfolg würde es einen Token oder eine Antwort an das Frontend senden, um anzuzeigen, dass der Login erfolgreich war.

## array.find()function

- Die Methode **`array.find()`** in JavaScript wird verwendet, um das **erste Element** in einem Array zu finden, das eine bestimmte Bedingung erfüllt. Sie gibt das gefundene Element zurück, oder **`undefined`**, wenn kein Element die Bedingung erfüllt.

### Syntax

```javascript
array.find(callback(element[, index[, array]])[, thisArg])
```

- callback: Eine Funktion, die für jedes Element im Array ausgeführt wird. Diese Funktion sollte eine Bedingung überprüfen und entweder true (Bedingung erfüllt) oder false (Bedingung nicht erfüllt) zurückgeben.
- element: Das aktuelle Element, das im Array durchlaufen wird.
- index (optional): Der Index des aktuellen Elements.
- array (optional): Das Array, auf dem find() aufgerufen wurde.
- thisArg (optional): Ein Wert, der als this in der callback-Funktion verwendet wird.
- Rückgabewert
  Das erste Element, das die Bedingung erfüllt, oder undefined, wenn kein Element gefunden wird.

## DOM-Manipulation in JavaScript

Die **DOM (Document Object Model)** stellt die Struktur einer HTML-Dokumentens als Baumstruktur dar. Mit JavaScript kannst du auf dieses Modell zugreifen und es verändern, um interaktive Webanwendungen zu erstellen.

## Grundlegende DOM-Methoden

### 1. **Elemente auswählen**

- **`document.getElementById(id)`**

  - Wählt ein Element anhand seiner ID aus.
  - ```javascript
    const element = document.getElementById("myElement");
    ```

- **`document.getElementsByClassName(className)`**

  - Wählt alle Elemente mit einer bestimmten Klasse aus.
  - ```javascript
    const elements = document.getElementsByClassName("myClass");
    ```

- **`document.getElementsByTagName(tagName)`**

  - Wählt alle Elemente eines bestimmten Tags aus.
  - ```javascript
    const elements = document.getElementsByTagName("div");
    ```

- **`document.querySelector(selector)`**

  - Wählt das erste Element aus, das dem angegebenen CSS-Selektor entspricht.
  - ```javascript
    const element = document.querySelector(".myClass");
    ```

- **`document.querySelectorAll(selector)`**
  - Wählt alle Elemente aus, die dem angegebenen CSS-Selektor entsprechen.
  - ```javascript
    const elements = document.querySelectorAll("div.myClass");
    ```

### 2. **Elemente erstellen und einfügen**

- **`document.createElement(tagName)`**

  - Erstellt ein neues Element.
  - ```javascript
    const newDiv = document.createElement("div");
    ```

- **`parentElement.appendChild(childElement)`**

  - Fügt ein Kind-Element zu einem Eltern-Element hinzu.
  - ```javascript
    const parent = document.getElementById("parent");
    parent.appendChild(newDiv);
    ```

- **`parentElement.insertBefore(newElement, referenceElement)`**
  - Fügt ein neues Element vor einem bestimmten Referenz-Element ein.
  - ```javascript
    const reference = document.getElementById("reference");
    parent.insertBefore(newDiv, reference);
    ```

### 3. **Elemente ändern**

- **`element.innerHTML`**

  - Ändert den inneren HTML-Inhalt eines Elements.
  - ```javascript
    element.innerHTML = "<p>Neuer Inhalt</p>";
    ```

- **`element.textContent`**

  - Ändert den Textinhalt eines Elements (ohne HTML).
  - ```javascript
    element.textContent = "Neuer Text";
    ```

- **`element.setAttribute(attribute, value)`**
  - Setzt ein Attribut eines Elements.
  - ```javascript
    element.setAttribute("class", "neueKlasse");
    ```

### 4. **Elemente entfernen**

- **`parentElement.removeChild(childElement)`**

  - Entfernt ein Kind-Element von einem Eltern-Element.
  - ```javascript
    parent.removeChild(child);
    ```

- **`element.remove()`**
  - Entfernt ein Element direkt aus dem DOM.
  - ```javascript
    element.remove();
    ```

### 5. **CSS-Klassen verwalten**

- **`element.classList.add(className)`**

  - Fügt eine Klasse zu einem Element hinzu.
  - ```javascript
    element.classList.add("neueKlasse");
    ```

- **`element.classList.remove(className)`**

  - Entfernt eine Klasse von einem Element.
  - ```javascript
    element.classList.remove("alteKlasse");
    ```

- **`element.classList.toggle(className)`**
  - Fügt eine Klasse hinzu oder entfernt sie, falls sie bereits vorhanden ist.
  - ```javascript
    element.classList.toggle("toggleKlasse");
    ```

## Beispiel für eine einfache DOM-Manipulation

Hier ist ein einfaches Beispiel, das zeigt, wie man ein neues Element erstellt, es zum DOM hinzufügt und einen Button klickt, um ein bestehendes Element zu entfernen:

html

```
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>DOM Manipulation Beispiel</title>
  </head>
  <body>
    <h1>DOM Manipulation</h1>
    <button id="createButton">Element hinzufügen</button>
    <button id="removeButton">Element entfernen</button>
    <div id="container"></div>

    <script>
      const container = document.getElementById("container");

      document.getElementById("createButton").onclick = function () {
        const newElement = document.createElement("p");
        newElement.textContent = "Neues Element";
        container.appendChild(newElement);
      };

      document.getElementById("removeButton").onclick = function () {
        if (container.lastChild) {
          container.removeChild(container.lastChild);
        }
      };
    </script>
  </body>
</html>
```

### Fazit

- Die DOM-Manipulation ermöglicht es dir, das Aussehen und Verhalten deiner Webseite dynamisch zu ändern. Durch die Verwendung der oben genannten Methoden kannst du Elemente hinzufügen, ändern und entfernen, um interaktive Benutzeroberflächen zu erstellen.
