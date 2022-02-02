// let numeroCartas = parseInt(prompt("Com quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
let numeroCartas = 12;
let numeroJogadas = 0;
console.log(numeroCartas);

while(true) {
    if(isNaN(numeroCartas)) {
        numeroCartas = parseInt(prompt("Você não digitou um número.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
    } else if (numeroCartas>14) {
        numeroCartas = parseInt(prompt("Você digitou um número maior do que 14.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
    } else if (numeroCartas<4) {
        numeroCartas = parseInt(prompt("Você digitou um número menor do que 4.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
    } else if (numeroCartas%2==1) {
        numeroCartas = parseInt(prompt("Você digitou um número ímpar.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
    } else if (numeroCartas%2==0) {
        break;
    }
}

function chooseCard(chosenCard) {
    console.log(chosenCard);
    const back_front = chosenCard.querySelectorAll(".card");
    console.log(back_front);
    back_front[0].classList.add("hidden");
    back_front[1].classList.remove("hidden");
}
