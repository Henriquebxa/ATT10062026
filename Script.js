window.addEventListener('scroll', function () {
    const header = document.querySelector('.Cima');
    const isDark = document.body.classList.contains('dark');

    if (window.scrollY > 600) {
        header.style.backgroundColor = isDark ? '#4a3b32' : '#4a3b32';
        header.style.boxShadow = '0 2px 10px #4a3b32';
    } else {
        header.style.backgroundColor = 'transparent';
        header.style.boxShadow = 'none';
    }
});

const carrinho = [];
const botoesAdicionar = document.querySelectorAll('.btn-add');
const listaCarrinho = document.getElementById('itens-carrinho');
const txtTotal = document.getElementById('valor-total');
const btnFinalizar = document.getElementById('btn-finalizar');

botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const nome = botao.getAttribute('data-nome');
        const preco = parseFloat(botao.getAttribute('data-preco'));

        adicionarAoCarrinho(nome, preco);
    });
});

function adicionarAoCarrinho(nome, preco) {
    const itemExistente = carrinho.find(item => item.nome === nome);

    if (itemExistente) {
        itemExistente.quantidade += 1;
    } else {
        carrinho.push({ nome, preco, quantidade: 1 });
    }

    atualizarInterfaceCarrinho();
}

function atualizarInterfaceCarrinho() {
    listaCarrinho.innerHTML = '';

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<li class="carrinho-vazio">Seu carrinho está vazio.</li>';
        txtTotal.innerText = 'R$ 0,00';
        btnFinalizar.disabled = true;
        return;
    }

    let totalGeral = 0;

    carrinho.forEach(item => {
        const subtotal = item.preco * item.quantidade;
        totalGeral += subtotal;

        const li = document.createElement('li');
        li.innerHTML = `
  <span><strong>${item.quantidade}x</strong> ${item.nome}</span>
  <span>R$ ${subtotal.toFixed(2).replace('.', ',')}</span>
`;
        listaCarrinho.appendChild(li);
    });

    txtTotal.innerText = `R$ ${totalGeral.toFixed(2).replace('.', ',')}`;
    btnFinalizar.disabled = false;
}

btnFinalizar.addEventListener('click', () => {
    alert('Pedido enviado com sucesso! Obrigado por escolher o Café Aroma. ☕');
    carrinho.length = 0; 
    atualizarInterfaceCarrinho();
});