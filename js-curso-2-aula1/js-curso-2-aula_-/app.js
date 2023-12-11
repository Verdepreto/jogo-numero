let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function exibirTextoReniciar() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 5');
}
exibirTextoReniciar();

function verificarChute() {
    let chute = document.querySelector('input').value;
 

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativa = tentativas > 1 ?'tentativas':'tentativa';
        let mensagemTentivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela('p',mensagemTentivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número secreto e menor');
        }else{
            exibirTextoNaTela('p','O número secreto e maior');
        }
        tentativas++;
        limparCampo();
        
    }
  
}

function gerarNumeroAleatorio(){
   let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

   if(quantidadeDeElementosNaLista == numeroLimite){

    listaDeNumerosSorteados = [];

   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
   }

function limparCampo() {
    chute = document.querySelector('input');
    chute.value= '';
    chute.focus();
}
function novoJogo() {
        numeroSecreto = gerarNumeroAleatorio();
        limparCampo();
        tentativas = 1;
        exibirTextoReniciar(); 
}



//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

/* function calculo(altura, peso) {
    imc = peso / (altura*altura);
}

calculo(1.86, 96);
console.log(`IMC É ${imc}`);
//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function fatorial(n) {

}

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
cambio = 0;
function dolarXreal(dolar){
    cambio = dolar * 4.80;
    console.log("valor convertido "+ "R$:" + cambio);
    return cambio;
   
}
dolarXreal(8);
//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function areaPerimetro(l,a) {
    let area = 2*(l+a);   
    console.log(`altura ${area}`)
}
areaPerimetro(5.8, 10.7);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function prerimetroCircular(raio) {
    let perimetro = (raio * raio)*3.14;
    console.log(`perimetro do circulo é ${perimetro}`);
}

prerimetroCircular(6);
//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function numeroTabuada(num){
    for(let i = 1; i <= 10; i++){
        let resultado = num * i;
        console.log(num + " x " + i + " = " + resultado);
    }
}

numeroTabuada(8); */



/* 
//Crie uma lista vazia, com o nome listaGenerica.

let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.

let linguagensDeProgramacao = ['JajaScript', 'C', 'C++', 'Kotlin', 'Python'];
console.log (linguagensDeProgramacao);

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.

linguagensDeProgramacao.push('java', 'Ruby', 'GoLang');
console.log(linguagensDeProgramacao);

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.

let timesFutebol = ['Vasco', 'Cruzeiro', 'Santos'];
console.log(timesFutebol[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.

let nomeFeio = ['Jurema', 'Ariosvaldo', 'Hmenon'];
console.log(nomeFeio[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.

let listaNomeCarros = ['Onix', 'Prisma', 'Celta'];
console.log(listaNomeCarros[2]); */