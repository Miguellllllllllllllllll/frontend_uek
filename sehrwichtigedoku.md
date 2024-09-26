# Wichitge doku für Morgen

1. [Fetch](#Fetch)
   1. [Wie benutze ich einen Fetch?](##how-to-use-fetch)
   2. [Wie zeige ich dieses als html?](##json-to-html)
2. [Installation](#installation)
3. [Verwendung](#verwendung)
   1. [Unterpunkt 1](#unterpunkt-1)
   2. [Unterpunkt 2](#unterpunkt-2)
4. [Fazit](#fazit)

# Fetch

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
