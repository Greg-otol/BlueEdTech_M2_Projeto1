const elementoNome = document.getElementById("name");
const elementoSituacao = document.querySelector("#situation");
const elementoImg = document.querySelector("#image");
let elementoBtn = document.querySelector("#replace");

elementoBtn.addEventListener("click", () => {
  if (elementoBtn.value == "primeiro") {
    elementoImg.src =
      "https://i0.wp.com/cebolaverde.com.br/wp-content/uploads/2020/08/c1e4790d9c17aae19aff0e492fbfaa31.jpg?w=640&ssl=1";
    elementoNome.innerText = "Ben 10";
    elementoSituacao.innerText = "Friagem";
    elementoBtn.value = "segundo";
  } else if (elementoBtn.value == "segundo") {
    elementoImg.src =
      "https://i0.wp.com/cebolaverde.com.br/wp-content/uploads/2020/08/FEFM2.jpg?resize=770%2C433&ssl=1";
    elementoNome.innerText = "Ben 10";
    elementoSituacao.innerText = "Feedback";
    elementoBtn.value = "terceiro";
  } else {
    elementoImg.src =
      "https://i0.wp.com/quartelgeneral.com/wp-content/uploads/2020/05/5207175-ben-10-wallpaper-752x440-1.jpg?resize=640%2C374&ssl=1";
    elementoNome.innerText = "Ben 10";
    elementoSituacao.innerText = "Humano";
    elementoBtn.value = "primeiro";
  }
});
