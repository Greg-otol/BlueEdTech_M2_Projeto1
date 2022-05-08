const elementoNome = document.getElementById("name");
const elementoSituacao = document.querySelector("#situation");
const elementoImg = document.querySelector("#image");
let elementoBtn = document.querySelector("#replace");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src =
      "./assets/img/friagem.png";
    elementoNome.innerText = "Ben 10";
    elementoSituacao.innerText = "Friagem";
    elementoBtn.value = "segundo";
  } else if (elementoBtn.value == "segundo") {
    elementoImg.src =
      "./assets/img/feedback.png";
    elementoNome.innerText = "Ben 10";
    elementoSituacao.innerText = "Feedback";
    elementoBtn.value = "terceiro";
  } else {
    elementoImg.src =
      "./assets/img/humano.png";
    elementoNome.innerText = "Ben 10";
    elementoSituacao.innerText = "Humano";
    elementoBtn.value = "primeiro";
  }
});
