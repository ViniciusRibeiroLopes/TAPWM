const icons = {
  pedra: "fa-solid fa-hand-back-fist",
  papel: "fa-solid fa-hand",
  tesoura: "fa-solid fa-hand-scissors",
};

let playerScore = 0,
  computerScore = 0,
  drawScore = 0;

// Fase 1: Escutador de clique nas escolhas
document.querySelectorAll(".choice-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = btn.dataset.choice;

    // Fase 2: Escolha do Computador (Math.random)
    const rnd = Math.random();
    const computer = rnd < 0.33 ? "pedra" : rnd < 0.66 ? "papel" : "tesoura";

    // Exibe as escolhas no HTML
    document.getElementById("playerIcon").className = icons[player];
    document.getElementById("computerIcon").className = icons[computer];
    document.getElementById("battleDisplay").classList.add("show");

    const outcomeText = document.getElementById("outcomeText");

    // Fase 3: Determina vencedor e pontuação
    if (player === computer) {
      outcomeText.textContent = "Empate!";
      outcomeText.className = "outcome-text show draw";
      document.getElementById("drawScore").textContent = ++drawScore;
    } else if (
      (player === "pedra" && computer === "tesoura") ||
      (player === "papel" && computer === "pedra") ||
      (player === "tesoura" && computer === "papel")
    ) {
      outcomeText.textContent = "Você Venceu!";
      outcomeText.className = "outcome-text show win";
      document.getElementById("playerScore").textContent = ++playerScore;
    } else {
      outcomeText.textContent = "Você Perdeu!";
      outcomeText.className = "outcome-text show lose";
      document.getElementById("computerScore").textContent = ++computerScore;
    }
  });
});
