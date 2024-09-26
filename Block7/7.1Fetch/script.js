const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Netzwerkantwort war nicht ok");
    }
    return response.json();
  })
  .then((data) => {
    const postsList = document.getElementById("posts-list");
    data.forEach((post) => {
      // Erstelle ein neues Listenelement für jeden Post
      const listItem = document.createElement("li");
      listItem.innerHTML = `<strong>${post.title}</strong>: ${post.body}`;
      postsList.appendChild(listItem);
    });
  })
  .catch((error) =>
    console.error("Es gab ein Problem mit dem Fetch-Vorgang:", error)
  );
