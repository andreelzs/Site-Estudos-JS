console.log("JavaScript carregado");
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
let itensNoCarrinho = carrinho.length;

window.onload = function () {
    atualizarQuantidadeCarrinho();
    exibirCarrinho();
};

window.onload = function() {
    setTimeout(exibirAlertaPromocao, 3000);
    console.log('aaaaaaaaaa');
};


function atualizarQuantidadeCarrinho() {
    document.getElementById('quantidadeCarrinho').innerText = itensNoCarrinho;
}

function adicionarAoCarrinho(nomeProduto) {
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
        carrinho = [];
        itensNoCarrinho = 0;

        localStorage.setItem('carrinho', JSON.stringify(carrinho));

        atualizarQuantidadeCarrinho();
        exibirCarrinho();
    }
}


function calcularFrete() {
    const cep = document.getElementById('cep').value;
    const valorFrete = document.getElementById('valorFrete');
    
    const cepValido = /^[0-9]{8}$/.test(cep);  // Regex para validar CEP com exatamente 8 dígitos numéricos
    
    if (!cepValido) {
        valorFrete.innerText = 'Por favor, insira um CEP válido (8 dígitos numéricos).';
    } else {

        const valor = Math.random() * 20 + 5;
        valorFrete.innerText = `Frete: R$ ${valor.toFixed(2)}`;
    }
}

function exibirAlertaPromocao() {
    const promoAlert = document.getElementById("promoAlert");
    promoAlert.classList.add("show"); 
}


function fecharAlerta() {
    const promoAlert = document.getElementById("promoAlert");
    promoAlert.classList.remove("show"); 
}

function filtrarProdutos() {
    const input = document.getElementById("barraPesquisa").value.toLowerCase();
    const produtos = document.querySelectorAll(".produto-card");

    produtos.forEach(produto => {
        const titulo = produto.querySelector("h2").textContent.toLowerCase();
        
        if (titulo.includes(input)) {
            produto.style.display = "flex";
        } else {
            produto.style.display = "none";
        }
    });
}

function exibirAlertaCarrinho() {
    const addCarrinho = document.getElementById("addCarrinho");
    addCarrinho.classList.add("show"); 
    setTimeout(() => {
        addCarrinho.classList.remove("show");
    }, 3000);
}

function fecharAlertaCarrinho() {
    const addCarrinho = document.getElementById("addCarrinho");
    addCarrinho.classList.remove("show"); // Remove a classe para ocultar o alerta
}

window.onload = function() {
    carrinho = JSON.parse(localStorage.getItem('carrinho')) || []; 
    itensNoCarrinho = carrinho.length; 
    atualizarQuantidadeCarrinho(); 
    exibirCarrinho(); 
};
