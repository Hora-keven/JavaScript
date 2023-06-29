

function aumenta(){
    
    let n = valor++;
    mensagemS()
}
function diminui(){
    let n = valor--;
    if(n==0){
        alert('Carrinho vazio')
    }
    mensagemS()
    
}
function aumentaM(){
    
    let n = valor++;
    mensagemM()
}
function diminuiM(){
    let n = valor--;
    if(n==0){
        alert('Carrinho vazio')
    }
    mensagemM()
    
}
function mensagemS(){
    valor-1
    texto = document.querySelector('#car')
    texto.innerHTML = `
    <p>Quantidade no carrinho: ${valor}
    Total: ${valor*produtos.samsung.valor}</p>`
    
}
function mensagemM(){
    valor-1
    texto = document.querySelector('#car')
    texto.innerHTML = `
    <p>Quantidade no carrinho: ${valor}
    Total: ${valor*produtos.motorola.valor}</p>`
    
}


