const produtos = [
    { id: 1, nome: 'Pão', preco: 0.90 },
    { id: 2, nome: 'Tomate', preco: 1.50 },
    { id: 3, nome: 'Alface', preco: 1.20 },
    { id: 4, nome: 'Queijo', preco: 5.60 },
    { id: 5, nome: 'Ovo', preco: 16.90 },
    { id: 6, nome: 'Leite', preco: 5.60 },
    { id: 7, nome: 'Ketchup', preco: 6.90 },
    { id: 8, nome: 'Refrigerante', preco: 5.00 }];

var carrinho = [];
const listaProdutos = [];
var carrinhoContado = [];

function addCarrinho(i) {
    const produto = produtos[i];
    listaProdutos.push(produto.nome);

    console.log(`Produto adicionado: ${produto.nome}`);
    console.log(listaProdutos);

    const contagens = listaProdutos.reduce((acumulador, elemento) => {
    acumulador[elemento] = (acumulador[elemento] || 0) + 1;
    return acumulador;
    }, {});
    console.log("Contagens de cada elemento:", contagens);
    carrinhoContado = contagens;

    carrinho = document.getElementById('cart');
    carrinho.array.forEach(item => {
        const li = document.createElement('li');
        li.textContent = carrinhoContado[item];
        carrinho.appendChild(li);
    });
}