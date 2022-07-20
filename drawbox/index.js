document.addEventListener('DOMContentLoaded', ()=>{

const tela = document.querySelector('#tela');
const contex = tela.getContext('2d');
const btn = document.getElementById('verde');
const btn2 = document.getElementById('amarelo');
const btn3 = document.getElementById('vermelho');
const btn4 = document.getElementById('azul');
const btn5 = document.getElementById('borracha');

btn.onclick = function () {
    contex.strokeStyle = 'rgb(21, 88, 41)'
    contex.lineWidth = 2;
}

btn2.onclick = function () {
    contex.strokeStyle = ' rgb(226, 214, 36)'
    contex.lineWidth = 2;
}

btn3.onclick = function () {
    contex.strokeStyle = 'rgb(150, 37, 37)'
    contex.lineWidth = 2;
}

btn4.onclick = function () {
    contex.strokeStyle = 'rgb(38, 38, 90)'
    contex.lineWidth = 2;
}
btn5.onclick = function () {
    contex.strokeStyle = 'white'
    contex.lineWidth = 400;
    
}



const pincel = {         
    ativo: false,
    movendo: false,         
    posAtual: {x:0, y:0},            //  dentro de obj se usa : ao invés de = || não esquecer da virgula entre os objetos
    posAnt:  null
}

tela.width = 900;
tela.height = 700;

const desenharLinha = (linha) => {

    contex.beginPath();
    contex.moveTo(linha.posAnt.x, linha.posAnt.y);
    contex.lineTo(linha.posAtual.x, linha.posAtual.y);
    contex.stroke();
 }   

tela.onmousedown = (evento) => {pincel.ativo = true};
tela.onmouseup = (evento) =>  {pincel.ativo = false};

tela.onmousemove = (evento) => {
    pincel.posAtual.x = evento.clientX
    pincel.posAtual.y = evento.clientY
    pincel.movendo = true;
}

const circulo = () => {
    if(pincel.ativo && pincel.movendo && pincel.posAnt) {
        desenharLinha({posAtual: pincel.posAtual, posAnt: pincel.posAnt})
        pincel.movendo = false
    }
    pincel.posAnt = {x: pincel.posAtual.x, y: pincel.posAtual.y}

    setTimeout(circulo, 20);
}

circulo()


})

