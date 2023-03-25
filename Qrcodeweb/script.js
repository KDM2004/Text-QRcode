const convertBtn = document.getElementById("convert-btn");
const qrCodeContainer = document.getElementById("qr-code-container");

convertBtn.addEventListener("click", () => {
  const textInput = document.getElementById("text-input");
  const text = textInput.value;

  if (text) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(text)}`;
    const qrCodeImg = document.createElement("img");
    qrCodeImg.src = qrCodeUrl;
    qrCodeImg.alt = "QR Code";

    qrCodeContainer.innerHTML = "";
    qrCodeContainer.appendChild(qrCodeImg);
  }
});


