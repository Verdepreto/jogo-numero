let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function buttonConsole(){
    console.log("O botão foi clicado.");
}
function alerta(){
    alert("Eu amo JS")
}
function pergunta(){
    let cidade = prompt("Digite uma cidade do brasil.");
    alert(`Estive em ` + cidade + ` e lembrei de você.`);
}
function soma(){
    let num1 = parseInt(prompt("Digite um numero"));
    let num2 = parseInt(prompt("Digite um número"));
    alert(`A soma dos números digitados é `+ (num1+num2)+`!`) 
}
