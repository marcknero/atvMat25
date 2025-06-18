const produtos = [
    { id: 1, nome: 'Pão', preco: 0.90 },
    { id: 2, nome: 'Tomate', preco: 1.50 },
    { id: 3, nome: 'Alface', preco: 1.20 },
    { id: 4, nome: 'Queijo', preco: 5.60 },
    { id: 5, nome: 'Ovo', preco: 16.90 },
    { id: 6, nome: 'Leite', preco: 5.60 },
    { id: 7, nome: 'Ketchup', preco: 6.90 },
    { id: 8, nome: 'Refrigerante', preco: 5.00 }
];

let listaProdutos = [];
let carrinhoValor = 0;

function addCarrinho(i) {
    listaProdutos.push(produtos[i].nome);
    render();
}

function renderCarrinho() {
    const carrinho = document.getElementById('cart');
    carrinho.innerHTML = '';
    let total = 0;
    listaProdutos.forEach(nome => {
        const produto = produtos.find(p => p.nome === nome);
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        carrinho.appendChild(li);
        total += produto.preco;
    });
    carrinhoValor = total;
    document.getElementById('cart__total').textContent = `Total: R$ ${carrinhoValor.toFixed(2)}`;
    document.querySelector('.dashboard__cart').classList.toggle('disabled', listaProdutos.length === 0);
}

function renderSugestoes() {
    const sugestoesDiv = document.getElementById('sugestoes');
    sugestoesDiv.innerHTML = "<h3>Produtos sugeridos:</h3>";
    const nomesNoCarrinho = new Set(listaProdutos);
    const sugeridos = produtos.filter(p => !nomesNoCarrinho.has(p.nome));
    if (sugeridos.length === 0) {
        sugestoesDiv.innerHTML += "<p>Todos os produtos já estão no carrinho!</p>";
        return;
    }
    const ul = document.createElement('ul');
    ul.style.display = "flex";
    ul.style.flexWrap = "wrap";
    sugeridos.forEach(produto => {
        const li = document.createElement('li');
        li.style.margin = "1rem";
        li.innerHTML = `
            <strong>${produto.nome}</strong><br>
            R$ ${produto.preco.toFixed(2)}<br>
            <button onclick="addCarrinho(${produto.id - 1})">Adicionar</button>
        `;
        ul.appendChild(li);
    });
    sugestoesDiv.appendChild(ul);
}

function render() {
    renderCarrinho();
    renderSugestoes();
}

// Inicializa a interface ao carregar a página
window.onload = render;