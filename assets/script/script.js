const botao = document.querySelector("#botao");
let mensagem = document.querySelector("#mensagem");


    function mostrarMensagem() {
        mensagem.textContent = 'Você é incrível! Continue firme no seu caminho.';
    }
    
    botao.addEventListener("click", mostrarMensagem);