let carrinho = [];
let samsung = 0
let motorola = 0
let somaTotal = 0
function Samsung() {
    let qt = produtos.samsung.valor*produtos.samsung.quantidade++;
    samsung=qt;
    adicionaCarrinho(produtos.samsung.nome)
    return samsung;
}

 function diminui() {
    carrinho.forEach(elem => console.log(elem))

    carrinho.splice(0)

    if(carrinho.length ==0){
        alert('carrinho vazio')
    }
   
   
 }

function Motorola() {
    qt = produtos.motorola.quantidade++;
    motorola = produtos.motorola.valor*qt;
    adicionaCarrinho(produtos.motorola.nome)
    return motorola;
}

 function diminuiM() {
    carrinho.forEach(function(item, indice, array){
        console.log(item, indice)
    })
 }
    

function adicionaCarrinho(produtos) {
    texto = document.querySelector("#car");
 

    carrinho.push(produtos);
    somaTotal=samsung+=motorola
    texto.innerHTML = `
    <p>Items no carrinho: ${carrinho}</p>
    <p>Quantidade no carrinho: ${carrinho.length}</p>
    <p>Total: ${somaTotal}</p>
    <p>carrinho: ${somaTotal}</p>`;

    corpo = document.getElementById("bodyCel")
    corpo.style.backDropFilter = "blur"
   
                          
}
