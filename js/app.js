<<<<<<< HEAD
const produtos = [
    { id: 1, nome: 'Pão', preco: 0.90 },
    { id: 2, nome: 'Tomate', preco: 1.50 },
    { id: 3, nome: 'Alface', preco: 1.20 },
    { id: 4, nome: 'Queijo', preco: 5.60 },
    { id: 5, nome: 'Ovo', preco: 16.90 },
    { id: 6, nome: 'Leite', preco: 5.60 },
    { id: 7, nome: 'Ketchup', preco: 6.90 },
    { id: 8, nome: 'Refrigerante', preco: 5.00 }];

const listaProdutos = [];
var carrinhoContado = [];
var carrinhoValor = 0;

function addCarrinho(i) {
    const produto = produtos[i];
    const carrinho = document.getElementById('cart');
    const carrinhoLabel = document.querySelector('.dashboard__cart');

    listaProdutos.push(produto.nome);

    carrinhoLabel.classList.remove("disabled");

    console.log(`Produto adicionado: ${produto.nome}`);
    console.log(listaProdutos);

    const contagens = listaProdutos.reduce((acumulador, elemento) => {
    acumulador[elemento] = (acumulador[elemento] || 0) + 1;
    return acumulador;
    }, {});
    console.log("Contagens de cada elemento:", contagens);
    carrinhoContado = contagens;

    carrinhoValor = carrinhoValor + produto.preco;
    console.log(`Valor total do carrinho: R$ ${carrinhoValor.toFixed(2)}`);

    const li = document.createElement('li');
    li.textContent = produto.nome + ' - R$ ' + produto.preco.toFixed(2);
    carrinho.appendChild(li);
    document.getElementById('cart__total').textContent = `Total: R$ ${carrinhoValor.toFixed(2)}`;
=======
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
>>>>>>> 63b3322f35d20c1cc2ab8ee74db6fae43b3b0240
}