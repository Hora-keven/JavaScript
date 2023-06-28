let valor = 0;
va = document.querySelector('#valor')

function mensage(){
    texto = document.querySelector('#msg')
    texto.innerHTML = '<p>FUNCIONOU! Testando</p>'
    texto.style.background = "black"
    texto.style.color = 'white'
    texto.style.marginTop = '10px'
    texto.style.width = '50%'
    texto.style.marginLeft = '25%'


    bod = document.querySelector('body')
    bod.style.background = 'black'
}

function adiciona(){
    v = document.querySelector('#mais')
    valor++;
    va.innerHTML = `<p>${valor}</p>`;
    if(valor == 40){
        va.style.color = 'green'
    }
 
}
function diminui(){
    vn = document.querySelector("#menos")
    let negativo = valor--;
    va.innerHTML = `<p>${negativo}</p>`;

}
