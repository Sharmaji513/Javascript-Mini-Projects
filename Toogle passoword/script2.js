// To optimize this code, we can:

// Use event delegation instead of attaching an event listener to each element.
// Cache DOM selections outside of event handlers for better performance.
// Optimize event handling to reduce function calls.
// Simplify conditions and reduce redundancy.

// optimize version
const input = document.querySelector(".input");
const eyeImg = document.querySelector(".img-input");
const msg = document.querySelector(".passLength");
const str = document.querySelector("#strength");
const inputBox = document.querySelector(".container");

// Toggle password visibility
eyeImg.addEventListener("click", () => {
  input.type = input.type === "password" ? "text" : "password";
  eyeImg.src = input.type === "password" ? "eye-close.png" : "eye-open.png";
});

// Update strength and message
input.addEventListener("input", () => {
  const length = input.value.length;

  msg.style.display = length > 0 ? "block" : "none";

  if (length < 4) {
    updateStrength("weak", "red");
  } else if (length < 8) {
    updateStrength("medium", "yellow");
  } else {
    updateStrength("strong", "green");
  }
});

// Reset styles on blur
input.addEventListener("blur", () => {
  inputBox.style.border = "none";
  msg.style.display = "none";
});

function updateStrength(strengthText, color) {
  str.innerHTML = strengthText;
  msg.style.color = color;
  inputBox.style.border = `2px solid ${color}`;
}
