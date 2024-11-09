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


function calcularFrete() {
    const cep = document.getElementById('cep').value;
    const valorFrete = document.getElementById('valorFrete');
    
    // Validação do formato do CEP
    const cepValido = /^[0-9]{8}$/.test(cep);  // Regex para validar CEP com exatamente 8 dígitos numéricos
    
    if (!cepValido) {
        valorFrete.innerText = 'Por favor, insira um CEP válido (8 dígitos numéricos).';
    } else {
        // Simulando cálculo de frete
        const valor = Math.random() * 20 + 5; // Valor fictício de frete entre 5 e 25
        valorFrete.innerText = `Frete: R$ ${valor.toFixed(2)}`;
    }
}


// let indiceAtual = 0;
// const imagens = document.querySelectorAll('.imagens-carrossel img');
// const totalImagens = imagens.length;

// function mostrarImagem(indice) {
//   const deslocamento = -indice * 100;
//   document.querySelector('.imagens-carrossel').style.transform = `translateX(${deslocamento}%)`;
// }

// function proximaImagem() {
//   indiceAtual = (indiceAtual + 1) % totalImagens;
//   mostrarImagem(indiceAtual);
// }

// function imagemAnterior() {
//   indiceAtual = (indiceAtual - 1 + totalImagens) % totalImagens;
//   mostrarImagem(indiceAtual);
// }

// setInterval(proximaImagem, 3000); // Muda a imagem a cada 3 segundos


document.addEventListener('DOMContentLoaded', () => {
    let indiceAtual = 0;
    const imagens = document.querySelectorAll('.imagens-carrossel img');
    const totalImagens = imagens.length;
  
    function mostrarImagem(indice) {
      const deslocamento = -indice * 100;
      document.querySelector('.imagens-carrossel').style.transform = `translateX(${deslocamento}%)`;
    }
  
    window.proximaImagem = function () {
      indiceAtual = (indiceAtual + 1) % totalImagens;
      mostrarImagem(indiceAtual);
    }
  
    window.imagemAnterior = function () {
      indiceAtual = (indiceAtual - 1 + totalImagens) % totalImagens;
      mostrarImagem(indiceAtual);
    }
  
    setInterval(proximaImagem, 3000); // Muda a imagem a cada 3 segundos
  });
  

