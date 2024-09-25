const stars = document.querySelectorAll(".star");
const ratingValue = document.getElementById("rating-value");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    const rating = index + 1; // Index beginnt bei 0, daher +1

    // Entferne die ausgewählte Klasse von allen Sternen
    stars.forEach((s) => s.classList.remove("selected"));

    // Füge die ausgewählte Klasse zum geklickten Stern und allen vorherigen hinzu
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("selected");
    }

    // Aktualisiere den Wert der Bewertung
    ratingValue.textContent = rating;
  });
});
