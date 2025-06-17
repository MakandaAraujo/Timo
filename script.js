// Referências para os elementos
const modal = document.getElementById("modal");
const main = document.getElementById("main");
const startBtn = document.getElementById("start-btn");

let audio = null;

startBtn.addEventListener("click", () => {
  // Cria o áudio se ainda não existir
  if (!audio) {
    audio = new Audio('https://media.vocaroo.com/mp3/1aEdIiVBEurr');
    audio.loop = true;
  }
  audio.play();

  // Esconde modal e mostra tela principal
  modal.style.display = "none";
  main.style.display = "block";
});
