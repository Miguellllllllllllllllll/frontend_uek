window.onload = function () {
  const alertbutton = document.getElementsByTagName("button")[0];

  if (alertbutton) {
    alertbutton.onclick = function () {
      alert("du dumme siech");
    };
  }
  // Zähler 1
  document.getElementById("button1").onclick = function () {
    const counter1 = document.getElementById("counter1");
    let currentValue = parseInt(counter1.textContent);
    counter1.textContent = currentValue + 1;
  };

  // Zähler 2
  document.getElementById("button2").onclick = function () {
    const counter2 = document.getElementById("counter2");
    let currentValue = parseInt(counter2.textContent);
    counter2.textContent = currentValue + 1;
  };

  // Ball springen lassen
  document.getElementById("ballContainer").onclick = function (event) {
    const ball = document.getElementById("ball");
    const rect = ballContainer.getBoundingClientRect();

    // Berechne die neue Position für den Ball
    const x = event.clientX - rect.left - ball.offsetWidth / 2;
    const y = event.clientY - rect.top - ball.offsetHeight / 2;

    // Setze die neue Position
    ball.style.transform = `translate(${x}px, ${y}px)`;
  };
};
