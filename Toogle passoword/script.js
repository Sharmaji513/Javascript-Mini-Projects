const input = document.querySelector(".input");
const eyeImg = document.querySelector(".img-input");
const msg = document.querySelector(".passLength");
const str = document.querySelector("#strength");
const inputBox = document.querySelector(".container");


eyeImg.onclick = function () {
  if (input.type == "password") {
    eyeImg.src = "eye-open.png";
    input.type = "text";
  } else {
    input.type = "password";
    eyeImg.src = "eye-close.png";
  }
};

input.addEventListener("input", () => {

  if (input.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  if (input.value.length < 4) {
    str.innerHTML = "weak";
    msg.style.color = 'red'
    inputBox.style.border = '2px solid #ff5925'
    
  } else if (input.value.length >= 4 && input.value.length < 8) {
    str.innerHTML = "medium";
    msg.style.color = 'yellow'
    inputBox.style.border = '2px solid yellow'
  } else if (input.value.length >= 8) {
    str.innerHTML = "strong";
    msg.style.color = 'green'
    inputBox.style.border = '2px solid green'
  }
});


input.addEventListener('blur' , ()=>{
    inputBox.style.border = 'none'
    msg.style.display = "none";

})