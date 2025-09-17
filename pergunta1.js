// Função para obter o número da pergunta atual da URL
function getNumeroDaPerguntaAtual() {
    const nomeArquivo = window.location.pathname.split("/").pop(); // ex: "pergunta3.html"
    const match = nomeArquivo.match(/pergunta(\d+)\.html/);
    if (match) {
        return parseInt(match[1]);
    }
    return null;
}

// Função para avançar para a próxima pergunta
function avancarParaProximaPergunta() {
    const perguntaAtual = getNumeroDaPerguntaAtual();
    if (perguntaAtual !== null) {
        const proximaPergunta = perguntaAtual + 1;
        window.location.href = `pergunta${proximaPergunta}.html`;
    } else {
        alert("Erro: não foi possível identificar o número da pergunta.");
    }
}

// Seleciona todos os elementos que têm atributo data-correta
const elementosComResposta = document.querySelectorAll('[data-correta]');

elementosComResposta.forEach((elemento) => {
    elemento.addEventListener('click', (event) => {
        // Previne que links com href="javascript:void(0)" causem scroll ou comportamento estranho
        event.preventDefault();

        if (elemento.getAttribute('data-correta') === 'true') {
            avancarParaProximaPergunta();
        } else {
            alert('Resposta incorreta! Tente novamente.');
        }
    });
});
