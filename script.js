let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let itensNoCarrinho = carrinho.length;

window.onload = function () {
    atualizarQuantidadeCarrinho();
    exibirCarrinho();
};

function atualizarQuantidadeCarrinho() {
    document.getElementById('quantidadeCarrinho').innerText = itensNoCarrinho;
}

function adicionarAoCarrinho(nomeProduto) {
    // Adiciona o produto ao carrinho
    carrinho.push(nomeProduto);

    itensNoCarrinho++;

    atualizarQuantidadeCarrinho();
    
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

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

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    itensNoCarrinho--;
    atualizarQuantidadeCarrinho();
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    exibirCarrinho();
}

function concluirCompra() {
    if (itensNoCarrinho === 0) {
        alert("Compra não concluída, seu carrinho está vazio.");
    } else {
        alert("Compra concluída com sucesso!");

        // Esvaziar o carrinho
        carrinho = [];
        itensNoCarrinho = 0;

        // Atualizar localStorage
        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        // Atualizar interface
        atualizarQuantidadeCarrinho();
        exibirCarrinho();
    }
}
