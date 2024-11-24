let h1 = document.querySelector('h1');
h1.innerHTML = 'Escolha um número';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = '1: Tamanho da Lista <br>2: Inserir Elemento <br>3: Apagar Elemento <br>4: Apagar Último Elemento <br>5: Mostrar Lista'

let listaAleatoria = ['Java', 'Kotlin', 'C#', 'C++', 'Python', 'Maria'];


function verificarValor() {
    let opcao = document.querySelector('input').value;
    /*if (opcao < 1 || opcao >5){
        opcao = document.querySelector('input');
        opcao.value = '';
        opcao = document.querySelector('input');
        opcao.placeholder = 'Escolha um número entre 1 e 5'
    }*/

    if (opcao == 1) {
        saberTamanhoDaLista();
    } if (opcao == 2) {
        inserirElementoNaLista();
    }   if (opcao == 3) {
        apagarElementoDaLista();
        } if (opcao == 4) {
            apagarUltimoElementoDaLista();
            } else {
                mostrarLista();
            }
}
//1
function saberTamanhoDaLista () {
    let paragrafo = document.querySelector('p');
    paragrafo.innerHTML = 'Tamanho da lista: ' + listaAleatoria.length + 
                            '<br><br>Itens da Lista: ' + listaAleatoria;
    responsiveVoice.speak(paragrafo, 'Brazilian Portuguese Female', {rate: 1.2});
}
//2
function inserirElementoNaLista () {
    listaAleatoria.push('novo elemento');
    saberTamanhoDaLista();
}
//3
function apagarElementoDaLista () {
    //return listaAleatoria.length;
}
//4
function apagarUltimoElementoDaLista () {
    listaAleatoria.pop();
    saberTamanhoDaLista();
}
//5
function mostrarLista () {
    saberTamanhoDaLista();
}
