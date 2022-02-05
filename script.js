// DEFININDO AS VARIÁVEIS GLOBAIS

let numberOfCards = 4; // TIRAR O "= 8" NO FINAL!!!!!!!!!!!!!!!!

let numberOfMoves;
let numberOfRightMoves;
let rounds;

askGameSize();

// while (numberOfRightMoves < numberOfCards/2) {

// }

// -----------------------------------------------------------------------
// CRIANDO AS FUNÇÕES

function askGameSize() { // Função para perguntar com quantas cartas o jogador quer jogar
    numberOfMoves = 0;
    numberOfRightMoves = 0;
    rounds = [];
    // numberOfCards = parseInt(prompt("Com quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
    
    while(true) {
        if(isNaN(numberOfCards)) {
            numberOfCards = parseInt(prompt("Você não digitou um número.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
        } else if (numberOfCards>14) {
            numberOfCards = parseInt(prompt("Você digitou um número maior do que 14.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
        } else if (numberOfCards<4) {
            numberOfCards = parseInt(prompt("Você digitou um número menor do que 4.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
        } else if (numberOfCards%2==1) {
            numberOfCards = parseInt(prompt("Você digitou um número ímpar.\nTente novamente!\n\nCom quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
        } else if (numberOfCards%2==0) {
            setTable();
            break;
        }
    }
}

function setTable() { // Função para organizar o tabuleiro de cartas
    const section = document.querySelector("main *"); // Seleciona a section com o tabuleiro
    main = section.parentNode;
    section.remove();
    main.innerHTML = main.innerHTML + `<section></section>`;
    const table = document.querySelector("section");
    const parrotTypes = ['unicornparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot'];
    
    let chosenParrots = parrotTypes.slice(0,numberOfCards/2);
    chosenParrots = chosenParrots.concat(chosenParrots);
    chosenParrots = chosenParrots.sort(comparador); // Embaralha
    console.log(chosenParrots)
    
    for (let i = 0; i < chosenParrots.length; i++) { // Populando o tabuleiro
        table.innerHTML = table.innerHTML + `
            <article class="${chosenParrots[i]}" onclick="chooseCard(this)" data-identifier="card">
                <div class="card back" data-identifier="back-face">
                    <img src="media/front.png" alt="Parrot">
                </div>
                <div class="card front hidden" data-identifier="front-face">
                    <img src="media/${chosenParrots[i]}.gif" alt="GIF do ${chosenParrots[i]}">
                </div>
            </article>
        `
    }
}

function chooseCard(chosenCard) { // Função para virar a carta escolhida
    const card = chosenCard.querySelectorAll(".card");

    card[0].classList.add("hidden");
    card[1].classList.remove("hidden");

    const roundId = numberOfMoves/2>>0;

    if (numberOfMoves%2==0) {
        rounds.push({id:roundId,firstCard:"",secondCard:""});
        rounds[roundId].firstCard = chosenCard.className;
    } else {
        rounds[roundId].secondCard = chosenCard.className;
    }
    numberOfMoves++;
    console.log(numberOfMoves)
    if (rounds[roundId].firstCard === rounds[roundId].secondCard) {
        numberOfRightMoves++;
        setTimeout(checkEndGame,1);
    }
    console.log(numberOfRightMoves)
    console.log(rounds)
}

function checkEndGame() {
    if (numberOfRightMoves === numberOfCards/2) {
        alert("Você ganhou em " + numberOfMoves + " jogadas!")
        const askRestartGame = prompt("Você gostaria de jogar novamente? (s/n)")
        if (askRestartGame==="s") {askGameSize()}
    }
}

function comparador() { // Função fornecida para embaralhar array
    return Math.random() - 0.5;
}