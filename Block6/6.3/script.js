const form = document.getElementById("addressForm");
const summaryDiv = document.getElementById("summary");

// Eventlistener für das Formular
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite

  // Daten aus dem Formular erfassen
  const firstname = document.getElementById("firstname").value;
  const lastname = document.getElementById("lastname").value;
  const street = document.getElementById("street").value;
  const postalcode = document.getElementById("postalcode").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const duSie = document.getElementById("duSie").checked ? "Ja" : "Nein";
  const relation = document.getElementById("relation").value;

  // Erstellte Zusammenfassung der Daten
  const summary = `
    <h2>Zusammenfassung der eingegebenen Daten:</h2>
    <p><strong>Name:</strong> ${firstname} ${lastname}</p>
    <p><strong>Adresse:</strong> ${street}, ${postalcode} ${city}</p>
    <p><strong>E-Mail:</strong> ${email}</p>
    <p><strong>Duzen:</strong> ${duSie}</p>
    <p><strong>Bekanntschaft:</strong> ${
      relation.charAt(0).toUpperCase() + relation.slice(1)
    }</p>
  `;

  // Zusammenfassung in den entsprechenden Bereich einfügen und anzeigen
  summaryDiv.innerHTML = summary;
  summaryDiv.style.display = "block";
});
