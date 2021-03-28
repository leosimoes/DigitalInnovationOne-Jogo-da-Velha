let jogador = '';
let vencedor = null;

const jogadorSelecionado = document.getElementById("jogador-selecionado");
const vencedorSelecionado = document.getElementById("vencedor-selecionado");
const quadrados = document.getElementsByClassName('quadrado');
const retas = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

reiniciar();

function reiniciar(){
    // Configurações do jogador
    jogador = 'X';
    jogadorSelecionado.innerHTML = 'Jogador da vez: ' + jogador;

    // Configurações do vencedor
    vencedor = null;
    vencedorSelecionado.innerHTML = "O vencedor: - ";
    // Remover valores 'X' e 'O' dos quadrados e restaura suas cores
    for(let q of quadrados){
        q.innerHTML = '-';
        q.style.background = '#f0ffff';
    }
    // Remover classes 'X' e 'O' dos quadrados
    Array.from(document.getElementsByClassName('X')).map(e=> e.classList.remove('X'));
    Array.from(document.getElementsByClassName('O')).map(e=> e.classList.remove('O'));
}


function escolherQuadrado(id) {
    if(vencedor != null){
        return;
    }

    let quadrado = document.getElementById(id);
    if(quadrado.innerHTML === 'X' || quadrado.innerHTML === 'O')
        return;
    
    quadrado.innerHTML = jogador;
    quadrado.classList.add(jogador);
    checarReta();
    mudarJogador();
}

function mudarJogador(){
    if(vencedor != null)
        return;

    if(jogador === 'X'){
        jogador = 'O';
    }else{
        jogador = 'X';
    }
    jogadorSelecionado.innerHTML = 'Jogador da vez: ' + jogador;
}

function checarReta(){
    let marcados = Array.from(document.getElementsByClassName(jogador)).map(e=> parseInt(e.id));
    for(reta of retas){
        if(reta.every(e => marcados.includes(e))){
            definirVencedor();
            marcarReta(reta);
            return;
        }
    }
}

function definirVencedor(){
    vencedorSelecionado.innerHTML = 'O vencedor foi ' + jogador + '.';
    jogadorSelecionado.innerHTML = 'Não há mais jogadas.';
    vencedor = jogador;
}

function marcarReta(reta){
    for(let id of reta){
        let quadrado = document.getElementById(id.toString());
        quadrado.style.backgroundColor = '#00ff00';
    }
}