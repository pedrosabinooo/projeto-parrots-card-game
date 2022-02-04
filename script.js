// Variáveis Globais
let numberOfMoves = 0;


// Função para perguntar com quantas cartas o jogador quer jogar
function askGameSize() {
    let numberOfCards = 8; // TIRAR NO FINAL!!!!!!!!!!!!!!!!

    // let numberOfCards = parseInt(prompt("Com quantas cartas você quer jogar?\nDigite um número par entre 4 e 14."))
    
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
            setTable(numberOfCards);
            break;
        }
    }
}

// Função para organizar o tabuleiro de cartas 
function setTable(numberOfCards) {
    const table = document.querySelector(".table"); // Seleciona a section com o tabuleiro
    const parrotTypes = ['unicornparrot', 'bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'revertitparrot', 'tripletsparrot'];
    
    let chosenParrots = parrotTypes.slice(0,numberOfCards/2);
    chosenParrots = chosenParrots.concat(chosenParrots);
    chosenParrots = chosenParrots.sort(comparador); // Embaralha
    console.log(chosenParrots);

    for (let i = 0; i < chosenParrots.length; i++) { // Populando o tabuleiro
        table.innerHTML = table.innerHTML + `
        <article class="${chosenParrots[i]}" onclick="chooseCard(this)" data-identifier="card">
            <div class="card back" data-identifier="back-face">
                <img src="media/front.png" alt="Parrot">
            </div>
            <div class="card front hidden" data-identifier="front-face">
                <img src="media/${chosenParrots[i]}.gif" alt="${chosenParrots[i]}">
            </div>
        </article>
        `
    }
}

function chooseCard(chosenCard) {
    // console.log(chosenCard.className);
    const back_front = chosenCard.querySelectorAll(".card");
    // console.log(back_front);
    back_front[0].classList.add("hidden");
    back_front[1].classList.remove("hidden");
    return chosenCard.className;

}

function theGame() {
    let equal = false;
    while (!equal) {
        firstMove = chooseCard(chosenCard)
        numberOfMoves++;

    }
}












// Função comparador
function comparador() {
	return Math.random() - 0.5;
}

// Chamando as funções
askGameSize();
