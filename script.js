// Inicializando o carrinho a partir do localStorage
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

// Atualiza o número de itens no carrinho
let itensNoCarrinho = carrinho.length;
atualizarQuantidadeCarrinho();

function atualizarQuantidadeCarrinho() {
    document.getElementById('quantidadeCarrinho').innerText = itensNoCarrinho;
}

function adicionarAoCarrinho(nomeProduto) {
    // Adiciona o produto ao carrinho
    carrinho.push(nomeProduto);

    // Incrementa o contador de itens no carrinho
    itensNoCarrinho++;

    // Atualiza o número de itens no carrinho
    atualizarQuantidadeCarrinho();

    // Salva o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Exibe o carrinho no console para teste
    console.log('Carrinho:', carrinho);
}

function exibirCarrinho() {
    const carrinhoContainer = document.getElementById('carrinhoContainer');
    carrinhoContainer.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoContainer.innerHTML = '<p>O carrinho está vazio.</p>';
    } else {
        carrinho.forEach((produto, index) => {
            const item = document.createElement('div');
            item.className = 'carrinho-item';
            item.innerHTML = `
                <p>${produto}</p>
                <button onclick="removerDoCarrinho(${index})">Remover</button>
            `;
            carrinhoContainer.appendChild(item);
        });
    }
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    itensNoCarrinho--;
    atualizarQuantidadeCarrinho();
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

function alertaConcluirCompra(){
    alert("Sua compra foi concluída com sucesso")
}