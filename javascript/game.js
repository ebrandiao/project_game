// GAME TETRIS
const blocksList = [];
// criar o tabuleiro 8x8
const tabuleiro = (() => {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
});
// criar a função pricnipal do game
const myGameStart = {
    canvas: document.createElement('canvas'),
    frames: 0,
    tabuleiro();
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },

    stop: function () {
        clearInterval(this.interval);
    },

    score: function () {

    },
};
// mover as peças para baixo
class Pecas {
    constructor(criaLinha, criaeLe, criaQuadrado) {
        this.criaLinha = criaLinha;
        this.criaEle = criaeLe;
        this.criaQuadrado = criaQuadrado;
    }
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
}

shuffleBlocks() { // ajustar
    // ... write your code here
    const valorInincial = 0;
    if (this.Blocks == undefined) {
      return undefined;
    }
    this.Blocks.forEach(() => {
      const valorFinal = this.Blocks.length;
      //embaralhador
      const result = Math.floor(Math.random() * (valorFinal - valorInincial));
      const selectorBlocks = this.Blocks[result];
      //apagar cartas quando errar
      this.Blocks.splice(result, 1);
      // // adiconar cartas numa array quando acertar
      this.Blocks.push(selectorBlocks);
    });
  }

// verificar se as peças finalizaram em linha reta as 8 espaços foram preenchidos

// verifica se as peças colidem entre sim
const check = (() => {
    const crashed = blocksList.some(function (obstacle) {
        return player.crashWith(obstacle);
      });
    
      if (crashed) {
        myGameArea.stop();
      }
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
    myGameStart.clear();


});
// chamar a função principal
myGameStart.start();
