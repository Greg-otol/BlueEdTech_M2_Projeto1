const elementName = document.getElementById("name");
const elementSituation = document.querySelector("#situation");
const elementImage = document.querySelector("#image");
let elementBtn = document.querySelector("#replace");

elementBtn.addEventListener("click", () => {
  if (elementBtn.value == "first") {
    elementImage.src =
      "./assets/img/friagem.png";
    elementName.innerText = "Friagem";
    elementSituation.innerText = "Alien - Humanoide";
    elementBtn.value = "second";
  } else if (elementBtn.value == "second") {
    elementImage.src =
      "./assets/img/feedback.png";
    elementName.innerText = "Feedback";
    elementSituation.innerText = "Alien - Elétrico";
    elementBtn.value = "Third";
  } else {
    elementImage.src =
      "./assets/img/humano.png";
    elementName.innerText = "Ben 10";
    elementSituation.innerText = "Humano";
    elementBtn.value = "first";
  }
});
