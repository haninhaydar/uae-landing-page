const toggle = document.getElementById("mode-toggle");
const body = document.body;

toggle.addEventListener("change", () => {
  body.classList.toggle("dark-mode");
});