// criar tabuleiro 4x4
const tableArrays = [];
const tr1 = document.querySelector('#row-1').children;
const tr2 = document.querySelector('#row-2').children;
const tr3 = document.querySelector('#row-3').children;
const tr4 = document.querySelector('#row-4').children;
tableArrays.push(tr1, tr2, tr3, tr4);

// selecionar o click
const button = document.getElementById('show-hint');
const eventType = 'click';

const teste = document.querySelector('td').innerText;
console.log(teste)

const tds = document.querySelectorAll('td');

// criar for para onclick, onde todos os quadradinhos deverao ter evento de clik
const pegarClick = ((tableArrays) => {
    // let click = '';
    for (let i = 0; i < tableArrays.length; i ++){
        click = tableArrays[i].querySelector('td').innerText;
    }
    console.log(click);
});


pegarClick();
// dentro do primeiro for / função deverá ter uma função para fazer as verificações do game

// encontrar o quadrado clicado e vazio, encontrando as
const game = (() => {
    const check = (() => {

    });
    const empty = (()=> {

    });
    // chegar se as laterais estao vazias

    // mover o objeto
    const moverObjeto = (() => {

    });

    // verificar se o jogo acabou
    const end = (() => {

    });
});
console.log(tableArrays);












// // 1 - selecionar o elemento
// const button = document.getElementById('show-hint');
// // 2 - definir o tipo de evento
// const eventType = 'click';
// // 3 - o que vai acontecer quando o evento for "listened"
// // (Obs.: event é o param que meu passo 3 pode receber para manipular as infos sobre o evento que acabou de acontecer)
// const whatIsGonnaHappen = () => {
//   const hint = document.querySelector('.hint');
//   hint.classList.add('active')
// }
// // 4 - juntar tudo (1.addEventListener(2, 3))
// button.addEventListener(eventType, whatIsGonnaHappen);

// // ===================== pseudo-codigo do jojinho =====================
// // prestar atencao no click e onde clicou
// const tds = document.querySelectorAll('td');

// // const eventType = 'click'; // ja fizemos ali em cima

// const game = (event) => {

//   // encontrar o quadrado clicado e encontrar posicoes
//   const clicado = event.currentTarget;
//   const ccol = clicado.cellIndex;
//   const crow = clicado.parentElement.rowIndex;

//   // encontrar o quadrado vazio e encontrar posicoes
//   const vazio = document.querySelector('.empty');
//   const vcol = vazio.cellIndex;
//   const vrow = vazio.parentElement.rowIndex;

//   // checar se esta a direita ou a esquerda (cell_index -1 ou +1)
//   if ( (ccol - vcol === -1 || ccol - vcol === 1) && crow === vrow || // uma distancia de coluna e estar na mesma linha
//        (crow - vrow === -1 || crow - vrow === 1) && ccol === vcol) { // uma distancia de linha e estar na mesma coluna

//     // mover o objeto (trocar de posicao)

//     vazio.innerText = clicado.innerText;
//     clicado.innerText = '';

//     // - trocar as classes
//     clicado.classList.add('empty');
//     vazio.classList.remove('empty');

//   }

//   const currentOrder = document.querySelectorAll('td');
//   // verificar se o jogo acabou

//   let won = true;
//   currentOrder.forEach((td, ind)=>{
//     // - checar se o texto daquele elemento e igual ao indice dele + 1
//     if ( ind != 15 && parseInt(td.innerText, 10) != ind + 1 ){
//       won = false;
//     }
//   })

//   if (won){
//     setTimeout(() => {
//       alert('yaaay! You won :D');
//     }, 50);
//   }

// }

// tds.forEach((td) => {
//   td.addEventListener(eventType, game);
// })
