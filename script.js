// Inicializando o número de itens no carrinho e o carrinho
let itensNoCarrinho = 0;
let carrinho = [];

// Função para atualizar o número de itens no carrinho no botão de carrinho
function atualizarQuantidadeCarrinho() {
    document.getElementById('quantidadeCarrinho').innerText = itensNoCarrinho;
}

// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    // Adiciona o produto ao carrinho
    carrinho.push(nomeProduto);

    // Incrementa o contador de itens no carrinho
    itensNoCarrinho++;

    // Atualiza o número de itens no carrinho
    atualizarQuantidadeCarrinho();

    // Exibe o carrinho no console para teste
    console.log('Carrinho:', carrinho);
}
