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
