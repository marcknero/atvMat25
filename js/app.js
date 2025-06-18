const produtos = [
    // Produtos alimentícios
    { id: 1, nome: 'Pão', preco: 0.90, imagem: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: true },
    { id: 2, nome: 'Tomate', preco: 1.50, imagem: 'https://images.unsplash.com/photo-1607305387299-a3d9611cd469?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: true },
    { id: 3, nome: 'Alface', preco: 1.20, imagem: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: true },
    { id: 4, nome: 'Queijo', preco: 5.60, imagem: 'https://images.unsplash.com/photo-1589881133595-a3c085cb731d?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: true },
    { id: 5, nome: 'Ovo', preco: 16.90, imagem: 'https://images.pexels.com/photos/6966599/pexels-photo-6966599.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: true, perecivel: true },
    { id: 6, nome: 'Leite', preco: 5.60, imagem: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: true },
    { id: 7, nome: 'Ketchup', preco: 6.90, imagem: 'https://images.pexels.com/photos/4113834/pexels-photo-4113834.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: true, perecivel: false },
    { id: 8, nome: 'Refrigerante', preco: 5.00, imagem: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: false },
    { id: 9, nome: 'Arroz', preco: 22.90, imagem: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=300&h=300', alimento: true, perecivel: false },
    { id: 10, nome: 'Feijão', preco: 8.75, imagem: 'https://images.pexels.com/photos/8178206/pexels-photo-8178206.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: true, perecivel: false },
    
    // Produtos de limpeza
    { id: 11, nome: 'Detergente', preco: 2.50, imagem: 'https://images.pexels.com/photos/4021983/pexels-photo-4021983.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 12, nome: 'Sabão em Pó', preco: 15.90, imagem: 'https://images.pexels.com/photos/5217945/pexels-photo-5217945.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 13, nome: 'Desinfetante', preco: 8.75, imagem: 'https://images.pexels.com/photos/6213747/pexels-photo-6213747.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 14, nome: 'Amaciante', preco: 12.50, imagem: 'https://images.pexels.com/photos/5217954/pexels-photo-5217954.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 15, nome: 'Água Sanitária', preco: 3.99, imagem: 'https://images.pexels.com/photos/6213742/pexels-photo-6213742.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 16, nome: 'Limpa Vidros', preco: 7.50, imagem: 'https://images.pexels.com/photos/6213756/pexels-photo-6213756.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 17, nome: 'Multiuso', preco: 9.90, imagem: 'https://images.pexels.com/photos/4389665/pexels-photo-4389665.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 18, nome: 'Sabão em Barra', preco: 6.49, imagem: 'https://images.pexels.com/photos/5217962/pexels-photo-5217962.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 19, nome: 'Esponja', preco: 3.25, imagem: 'https://images.pexels.com/photos/6021671/pexels-photo-6021671.jpeg?auto=compress&cs=tinysrgb&w=300&h=300', alimento: false, perecivel: false },
    { id: 20, nome: 'Luvas de Limpeza', preco: 5.75, imagem: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=300&h=300', alimento: false, perecivel: false }
];

let listaProdutos = [];
let carrinhoValor = 0;

function addCarrinho(i) {
    listaProdutos.push(produtos[i].nome);
    showAlert(`${produtos[i].nome} adicionado ao carrinho!`);
    render();
}

function showAlert(mensagem) {
    const alertElement = document.getElementById('alert');
    alertElement.textContent = mensagem;
    alertElement.classList.remove('hidden');
    
    setTimeout(() => {
        alertElement.classList.add('fade-out');
        setTimeout(() => {
            alertElement.classList.add('hidden');
            alertElement.classList.remove('fade-out');
        }, 500);
    }, 2000);
}

function renderProdutos() {
    const container = document.getElementById('products-container');
    container.innerHTML = '';
    
    const div = document.createElement('div');
    
    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        li.className = 'dashboard__items__item';
        li.id = `item-${produto.id}`;
        
        const imgDiv = document.createElement('div');
        imgDiv.className = 'dashboard__item__img';
        
        // Se tiver imagem, adiciona
        if (produto.imagem) {
            const img = document.createElement('img');
            img.src = produto.imagem;
            img.alt = produto.nome;
            img.onerror = function() {
                this.onerror = null;
                this.src = 'https://via.placeholder.com/150/cccccc?text=' + encodeURIComponent(produto.nome);
            };
            imgDiv.appendChild(img);
        }
        
        const nome = document.createElement('p');
        nome.className = 'dashboard__item__name';
        nome.textContent = produto.nome;
        
        const preco = document.createElement('p');
        preco.className = 'dashboard__item__price';
        preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
        
        const btn = document.createElement('button');
        btn.className = 'dashboard__item__button';
        btn.textContent = 'Adicionar';
        btn.onclick = () => addCarrinho(index);
        
        li.appendChild(imgDiv);
        li.appendChild(nome);
        li.appendChild(preco);
        li.appendChild(btn);
        
        div.appendChild(li);
    });
    
    container.appendChild(div);
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
    
    // Mostra/esconde o carrinho baseado se tem itens
    document.querySelector('.dashboard__cart').classList.toggle('disabled', listaProdutos.length === 0);
}

// Função simplificada para calcular similaridade
function calcularSimilaridade(produto1, produto2) {
    // Normalização do preço para escala [0,1]
    const precoMax = Math.max(...produtos.map(p => p.preco));
    
    // Calcular similaridade para cada característica
    const similAlimento = produto1.alimento === produto2.alimento ? 1 : 0;
    const similPerecivel = produto1.perecivel === produto2.perecivel ? 1 : 0;
    
    // Calcular diferença de preço normalizada
    const precoNorm1 = produto1.preco / precoMax;
    const precoNorm2 = produto2.preco / precoMax;
    const similPreco = 1 - Math.abs(precoNorm1 - precoNorm2);
    
    // Pesos para cada característica
    const pesoAlimento = 0.5;    // Alto peso para mesma categoria
    const pesoPerecivel = 0.3;   // Peso médio para perecibilidade
    const pesoPreco = 0.2;       // Peso menor para preço
    
    // Similaridade final ponderada
    const similaridadeTotal = 
        (pesoAlimento * similAlimento) +
        (pesoPerecivel * similPerecivel) +
        (pesoPreco * similPreco);
    
    return similaridadeTotal;
}

// Função simplificada para obter recomendações KNN
function obterRecomendacoesKNN(carrinhoIds, k = 4) {
    // Se o carrinho estiver vazio, retorna produtos aleatórios
    if (carrinhoIds.length === 0) {
        return produtos
            .sort(() => 0.5 - Math.random())
            .slice(0, k);
    }
    
    // Obter produtos no carrinho
    const produtosNoCarrinho = produtos.filter(p => carrinhoIds.includes(p.id));
    
    // Para cada produto que não está no carrinho, calcular similaridade com produtos do carrinho
    const recomendacoes = produtos
        .filter(p => !carrinhoIds.includes(p.id))
        .map(produto => {
            // Calcular similaridade média com todos os produtos no carrinho
            const similaridadeMedia = produtosNoCarrinho.reduce((acc, produtoCarrinho) => {
                return acc + calcularSimilaridade(produto, produtoCarrinho);
            }, 0) / produtosNoCarrinho.length;
            
            return {
                produto: produto,
                similaridade: similaridadeMedia
            };
        })
        .sort((a, b) => b.similaridade - a.similaridade) // Ordenar por similaridade (decrescente)
        .slice(0, k) // Pegar os k mais similares
        .map(item => ({
            ...item.produto,
            similaridade: item.similaridade
        }));
    
    return recomendacoes;
}

function renderSugestoes() {
    const sugestoesDiv = document.getElementById('sugestoes-container');
    sugestoesDiv.innerHTML = "<h3>Recomendados para você:</h3>";
    
    // Extrair IDs dos produtos no carrinho
    const produtosNoCarrinhoIDs = [];
    listaProdutos.forEach(nomeProduto => {
        const produto = produtos.find(p => p.nome === nomeProduto);
        if (produto) produtosNoCarrinhoIDs.push(produto.id);
    });
    
    // Obter sugestões usando KNN simplificado
    const sugeridos = obterRecomendacoesKNN(produtosNoCarrinhoIDs, 4);
    
    if (sugeridos.length === 0) {
        sugestoesDiv.innerHTML += "<p>Não temos mais produtos para sugerir!</p>";
        return;
    }
    
    const ul = document.createElement('ul');
    ul.className = 'sugestoes-lista';
    
    sugeridos.forEach(produto => {
        const prodIndex = produtos.findIndex(p => p.id === produto.id);
        
        const li = document.createElement('li');
        li.className = 'sugestoes-item';
        
        // Imagem do produto
        if (produto.imagem) {
            const img = document.createElement('img');
            img.src = produto.imagem;
            img.alt = produto.nome;
            img.style.width = '70px';
            img.style.height = '70px';
            img.style.objectFit = 'cover';
            img.style.borderRadius = '5px';
            li.appendChild(img);
        }
        
        // Informações do produto
        const info = document.createElement('div');
        info.className = 'sugestoes-info';
        
        const nome = document.createElement('strong');
        nome.textContent = produto.nome;
        info.appendChild(nome);
        
        const preco = document.createElement('span');
        preco.textContent = `R$ ${produto.preco.toFixed(2)}`;
        info.appendChild(preco);
        
        // Badge de compatibilidade simplificado
        if (produtosNoCarrinhoIDs.length > 0) {
            const match = Math.round(produto.similaridade * 100);
            const matchEl = document.createElement('span');
            matchEl.className = 'match';
            matchEl.textContent = `${match}% match`;
            info.appendChild(matchEl);
        }
        
        li.appendChild(info);
        
        // Botão de adicionar ao carrinho
        const btn = document.createElement('button');
        btn.textContent = 'Adicionar';
        btn.className = 'sugestao-btn';
        btn.onclick = () => addCarrinho(prodIndex);
        li.appendChild(btn);
        
        ul.appendChild(li);
    });
    
    sugestoesDiv.appendChild(ul);
}

function updateCartBadge() {
    const cartLink = document.querySelector('.cart-link');
    if (cartLink) {
        const itemCount = listaProdutos.length;
        
        if (itemCount > 0) {
            cartLink.innerHTML = `🛒 Ver Carrinho <span class="cart-badge">${itemCount}</span>`;
        } else {
            cartLink.innerHTML = `🛒 Ver Carrinho`;
        }
    }
}

function render() {
    renderProdutos();
    renderCarrinho();
    renderSugestoes();
    updateCartBadge();
}

// Adicionar estilos para sugestões
const styleEl = document.createElement('style');
styleEl.textContent = `
.sugestoes-lista {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 0;
}

.sugestoes-item {
    display: flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.05);
    border-radius: 6px;
    padding: 8px;
    list-style: none;
}

.sugestoes-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-size: 0.9rem;
}

.match {
    display: inline-block;
    background: #00F4BF;
    color: #111;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 10px;
    margin-top: 4px;
    align-self: flex-start;
}

.sugestao-btn {
    background: rgba(0, 244, 191, 0.2);
    color: #00F4BF;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
}

.sugestao-btn:hover {
    background: rgba(0, 244, 191, 0.4);
}
`;
document.head.appendChild(styleEl);

// Inicializa a interface ao carregar a página
window.onload = render;