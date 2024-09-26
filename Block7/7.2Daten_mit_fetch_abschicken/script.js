const url = "https://jsonplaceholder.typicode.com/posts";
const postsList = document.getElementById("posts-list");
const postForm = document.getElementById("post-form");

// Alle Posts laden und anzeigen
function loadPosts() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      postsList.innerHTML = ""; // Vorherige Posts entfernen
      data.forEach((post) => {
        displayPost(post);
      });
    })
    .catch((error) =>
      console.error("Es gab ein Problem beim Laden der Posts:", error)
    );
}

// Post in der Liste anzeigen und Löschknopf hinzufügen
function displayPost(post) {
  const listItem = document.createElement("li");
  listItem.setAttribute("data-id", post.id);
  listItem.innerHTML = `
        <strong>${post.title}</strong>: ${post.body}
        <button onclick="deletePost(${post.id})">Löschen</button>
    `;
  postsList.appendChild(listItem);
}

// Neuen Post erstellen
postForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite

  const title = document.getElementById("title").value;
  const body = document.getElementById("body").value;

  const newPost = {
    title: title,
    body: body,
    userId: 1, // Beispielbenutzer-ID
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(newPost),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netzwerkantwort war nicht ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Post erstellt:", data);
      displayPost(data); // Neuen Post in der Liste anzeigen
      postForm.reset(); // Formular zurücksetzen
    })
    .catch((error) =>
      console.error("Es gab ein Problem beim Erstellen des Posts:", error)
    );
});

// Post löschen
function deletePost(postId) {
  fetch(`${url}/${postId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        const postElement = document.querySelector(`li[data-id="${postId}"]`);
        postElement.remove(); // Post aus der Liste entfernen
      } else {
        throw new Error("Fehler beim Löschen des Posts");
      }
    })
    .catch((error) =>
      console.error("Es gab ein Problem beim Löschen des Posts:", error)
    );
}

// Lade die Posts, wenn die Seite geladen wird
loadPosts();
