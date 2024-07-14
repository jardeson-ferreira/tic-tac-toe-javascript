let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box');
let buttons = document.querySelectorAll('#buttons-container button');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message p');
let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

// Adicionando o evento de click aos boxes
for (let i = 0; i < boxes.length; i++) {

    // Quando alguém clicar na caixa
    boxes[i].addEventListener('click', function () {

        let el = checkEl(player1, player2);

        // Verificar se já tem x ou o
        if (this.childNodes.length === 0) {
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl);

            // Computar jogada
            if (player1 === player2) {
                player1++;
            } else {
                player2++;
            }
        }

    });
}

// Ver quem vai jogar
function checkEl(player1, player2) {

    if (player1 === player2) {
        el = x;
    } else {
        el = o;
    }

    return el;

}