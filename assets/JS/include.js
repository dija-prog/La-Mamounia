// assets/js/include.js
document.addEventListener("DOMContentLoaded", () => {
  // Charger le header
  fetch("components/header.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("header").innerHTML = data;
    });

  // Charger le footer (si tu en as un)
  fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
});
