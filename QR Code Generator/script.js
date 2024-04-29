const imageBox = document.querySelector(".image-box");
const qrImage = document.querySelector(".qr-Image");
const qrText = document.querySelector(".qr-Text");
const errorText = document.querySelector(".errorText");

function getQrImage() {
  if (qrText.value.length > 0) {
    qrImage.src =
      " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    // console.log(qrImage.src);
    imageBox.classList.add("showImage");
  } else {
    qrText.classList.add("error");
    qrText.style.border = "1px solid red";
    errorText.classList.add("errorText");
    errorText.innerHTML = "Please enter Text or URL ";

    setTimeout(() => {
      qrText.classList.remove("error");
      qrText.style.border = "1px solid #494eea";
      errorText.innerHTML = "";
    }, 2000);
  }
}
