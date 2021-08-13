// GAME TETRIS
// criar o tabuleiro 8x8
// criar a função pricnipal do game
const start = ( () => {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
});
const myGameStart = {
    canvas: document.createElement('canvas');
    start();
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    stop: function () {
        clearInterval(this.interval);
    };

    score: function () {

    };
};
// criar as peças (linha, quadrado, eLe)
// linha (2x1, 3x1, 4x1, 5x1) na vertical e na horizontal
const criaLinha = (() => {

});
// quadrado 1, 2x2, 3x3
const criaQuadrado = (() => {

});
// eLe 2x3 na vertical e na horizontal
const criaEle = (() => {

});
// sortear as peças
const sufle = (() => {

    criaQuadrado();
    criaLinha();
    criaEle();
});

// verificar se as peças finalizaram em linha reta as 8 espaços foram preenchidos
const check = (() => {

});

// criar a função de pontuação
const score = (() => {

});

// capturar os movimentos do teclado
document.addEventListener('keydown', (e) => {
    switch (e.keycode) {
        // movimento lateral esquerdo
        case 37:
            player.speedX -= 1;
            break;
        // movimento lateral direito
        case 39:
            player.speedX += 1;
            break;
        }
});
document.addEventListener('keyup', (e) => {
    player.speedX = 0;
});
// criar função para chamar as funções criadas dentro do código
const updateGameStart(() => {

});
// chamar a função principal
myGameStart.start();
