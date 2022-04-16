const prompt = require("prompt-sync")();

let namePlayer = prompt("Qual o seu nome? ");

console.log(`
Jokenpô - Pedra, papel e tesoura.
>>>>> ATENÇÃO! <<<<<
Digite 0 para PEDRA
Digite 1 para PAPEL
Digite 2 para TESOURA
        `);

loopExterno: while (true) {
  let rounds = +prompt(`Olá ${namePlayer}, quantas rodadas quer jogar? `);
  let sumRounds = 0;
  let playerSum = 0;
  let computerSum = 0;
  let tiedSum = 0;

  loopInterno1: while (sumRounds < rounds) {
    sumRounds++;
    const jogadas = ["PEDRA", "PAPEL", "TESOURA"];

    let computer = Math.round(Math.random() * 2);

    console.log(`
Escolha sua jogada:
[0] PEDRA
[1] PAPEL
[2] TESOURA
        `);

    let play = "";

    loopInterno2: while (true) {
      play = +prompt(`Qual a sua jogada ${namePlayer}? `);
      if (play !== 0 && play !== 1 && play !== 2) {
        console.log("Opção inválida, digite 0, 1 ou 2!");
      } else {
        break;
      }
    }

    console.log();

    console.log(`O computador jogou ${jogadas[computer]}`);
    console.log(`${namePlayer} jogou ${jogadas[play]}`);

    if (computer == 0) {
      if (play == 0) {
        tiedSum++;
        console.log(`A ${sumRounds}ª rodada deu Empate`);
      } else if (play == 1) {
        playerSum++;
        console.log(`${namePlayer} venceu a ${sumRounds}ª rodada!`);
      } else if (play == 2) {
        computerSum++;
        console.log(`O computador venceu a ${sumRounds}ª rodada!`);
      }
    } else if (computer == 1) {
      if (play == 0) {
        computerSum++;
        console.log(`O computador venceu a ${sumRounds}ª rodada!`);
      } else if (play == 1) {
        tiedSum++;
        console.log(`A ${sumRounds}ª rodada deu Empate`);
      } else if (play == 2) {
        playerSum++;
        console.log(`${namePlayer} venceu a ${sumRounds}ª rodada!`);
      }
    } else if (computer == 2) {
      if (play == 0) {
        playerSum++;
        console.log(`${namePlayer} venceu a ${sumRounds}ª rodada!`);
      } else if (play == 1) {
        computerSum++;
        console.log(`O computador venceu a ${sumRounds}ª rodada!`);
      } else if (play == 2) {
        tiedSum++;
        console.log(`A ${sumRounds}ª rodada deu Empate`);
      }
    }
  }

  if (playerSum > computerSum) {
    console.log(`
De ${sumRounds} rodada(s):
O computador ganhou ${computerSum} rodada(s)
${namePlayer} ganhou ${playerSum} rodada(s)
E teve ${tiedSum} empate

${namePlayer} é o CAMPEÃO com ${playerSum} rodada(s)!
        `);
  } else if (computerSum > playerSum) {
    console.log(`
De ${sumRounds} rodada(s):
${namePlayer} ganhou ${playerSum} rodada(s)
O computador ganhou ${computerSum} rodada(s)
E teve ${tiedSum} empate

O computador é o CAMPEÃO com ${computerSum} rodada(s)!
        `);
  } else if (playerSum === computerSum) {
    console.log(`
De ${sumRounds} rodada(s):
${namePlayer} ganhou ${playerSum} rodada(s)
O computador ganhou ${computerSum} rodada(s)
E teve ${tiedSum} empate

Jogo EMPATADO!`);
  }

  console.log();

  let playAgain = "";

  loopInterno3: while (playAgain !== "S" && playAgain !== "N") {
    playAgain = prompt(
      `${namePlayer}, deseja jogar novamente? S/N: `
    ).toUpperCase();
    if (playAgain !== "S" && playAgain !== "N") {
      console.log("Opção inválida, digite S ou N!");
    }
  }

  if (playAgain === "S") {
    continue;
  } else {
    break;
  }
}
