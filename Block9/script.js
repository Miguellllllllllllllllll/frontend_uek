const url = "http://localhost/tasks";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    PrintTask(data);
  })
  .catch((error) => console.error("Error:", error));

function PrintTask(posts) {
  posts.forEach((data) => {
    const postElement = document.createElement("div");
    postElement.classList.add("data");

    postElement.innerHTML = `
          <h2>${data.id}</h2>
          <p>Title: ${data.title}</p>
          <p>Completed: ${data.completed}</p>
          <button class="DeleteTaskButton" data-id="${data.id}">Delete</button>
          <button class="UpdateTaskButton" data-id="${data.id}">Update</button>
          <hr>
        `;

    document.body.appendChild(postElement);

    const deleteBtn = postElement.querySelector(".DeleteTaskButton");
    deleteBtn.addEventListener("click", () => deleteTask(data.id));

    const updateBtn = postElement.querySelector(".UpdateTaskButton");
    updateBtn.addEventListener("click", () => updateTask(data.id));
  });
}

function createTask() {
  const title = document.getElementById("title").value;
  const completed = false; // Standardwert, wenn keine Checkbox vorhanden ist

  const newTask = { title, completed };
  const url = "http://localhost/tasks"; // API-URL hinzufügen

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(`Task created successfully with id: ${data.id}`);
      location.reload();
    })
    .catch((error) => {
      console.error("Fehler beim Erstellen der Aufgabe:", error);
    });
}

function deleteTask(taskId) {
  const deleteURL = `http://localhost/task/${taskId}`; // Korrekte Verwendung von Template-Literals
  fetch(deleteURL, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        console.log(`Task mit ID ${taskId} erfolgreich gelöscht.`);
        location.reload();
      } else {
        console.error("Fehler beim Löschen:", response.statusText);
      }
    })
    .catch((error) => console.error("Netzwerkfehler:", error));
  window.reload();
}

function updateTask(taskId) {
  const newTitle = prompt("Gib den neuen Titel ein:");
  const newCompleted = prompt("Ist die Aufgabe abgeschlossen? (true/false)");

  if (newTitle !== null && newCompleted !== null) {
    const updatedTask = {
      title: newTitle,
      completed: newCompleted.toLowerCase() === "true", // Boolescher Wert
    };

    // PATCH (oder PUT, je nach API) Anfrage
    fetch(`${url}/${taskId}`, {
      method: "PATCH", // Ändere zu 'PUT', falls erforderlich
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`Aufgabe mit ID ${taskId} wurde aktualisiert:`, data);
        location.reload(); // Seite aktualisieren, um die Änderungen anzuzeigen
      })
      .catch((error) => console.error("Fehler beim Aktualisieren:", error));
  }
}
