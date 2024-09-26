// Variablen für Formular und Eingabefelder definieren
const passwordForm = document.getElementById("passwordForm");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const password1Error = document.getElementById("password1Error");
const password2Error = document.getElementById("password2Error");

// Formular-Ereignislistener beim Absenden
passwordForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Verhindert das Neuladen der Seite

  let isValid = true; // Variable zur Überprüfung, ob das Formular korrekt ist

  // 1. Überprüfung von Passwort 1 (Anforderungen: Muster und Länge)
  if (!password1.checkValidity()) {
    password1Error.style.display = "block"; // Zeige Fehlermeldung
    isValid = false;
  } else {
    password1Error.style.display = "none"; // Verberge Fehlermeldung
  }

  // 2. Überprüfung, ob Passwort 1 und Passwort 2 übereinstimmen
  if (password1.value !== password2.value) {
    password2Error.style.display = "block"; // Zeige Fehlermeldung
    isValid = false;
  } else {
    password2Error.style.display = "none"; // Verberge Fehlermeldung
  }

  // 3. Wenn alle Validierungen erfolgreich sind, dann Formular absenden
  if (isValid) {
    alert("Passwort erfolgreich registriert!"); // Erfolgsmeldung
    passwordForm.submit(); // Formular absenden
  }
});
