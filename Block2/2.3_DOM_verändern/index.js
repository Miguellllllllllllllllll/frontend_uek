window.addEventListener("load", function () {
  // Ändern Sie die Hintergrundfarbe des body auf eine Farbe ihrer Wahl
  document.body.style.backgroundColor = "orange";

  // Ändern Sie den Text des h1 auf ihren Namen
  document.body.getElementsByTagName("h1")[0].innerHTML = "Miguel Sousa";

  // Füge der Klasse 'large' zu jedem <p>-Element hinzu
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((paragraph) => {
    paragraph.classList.add("large");
  });

  // Fügen Sie dem ul-Element ein weiteres li-Element inkl. Text hinzu
  const ul = document.getElementsByTagName("ul")[0];
  const newLi = document.createElement("li");
  newLi.textContent = "Yeil"; // Hier kannst du den gewünschten Text angeben
  ul.appendChild(newLi);

  //
  const ull = document.getElementsByTagName("ul")[0];
  const deleteli = ull.getElementsByTagName("li")[1];
  if (deleteli) {
    // löschen
    ull.removeChild(deleteli);
  }

  const img = document.createElement("img");
  const h1 = document.getElementsByTagName("h1")[0];

  // Setze die Attribute für das <img>-Element
  img.src =
    "https://art.ngfiles.com/images/1762000/1762545_cootiegirl_starring-pico-and-friends.gif?f1618963325"; // URL des Bildes
  img.alt = "Platzhalterbild"; // Alternativtext
  img.style.width = "200px"; // Optional: Breite des Bildes
  // Füge das <img>-Element nach dem <h1>-Element ein
  h1.insertAdjacentElement("afterend", img);
});
