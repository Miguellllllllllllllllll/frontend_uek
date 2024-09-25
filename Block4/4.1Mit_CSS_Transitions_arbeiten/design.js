window.addEventListener("load", (event) => {
  // JavaScript, um die Animation zu starten oder zurückzusetzen
  document
    .getElementById("toggleButton")
    .addEventListener("click", function () {
      var box = document.getElementById("box");
      box.classList.toggle("animate");
    });
});
