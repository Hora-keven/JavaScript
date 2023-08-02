let nomes = ['Keven', 'Da', 'Hora', 'Santos']


//Varrendo a array
nomes.forEach((e, i) => {
    console.log(e+"\n"+i )})


let nome = document.querySelector('#n').value
let cep = document.querySelector('#c').value
let email = document.querySelector('#e').value
let telefone = document.querySelector('#t').value

//Objetos em Javascript
let Usuario = {
    Nome:nome,
    Email:email,
    Cep:cep,
    Telefone:telefone
}

let cachorro = {
    patas:4,
    nome:'Shark',
    latir:function(){
        console.log('AUAUAUAU')
    },
    doente:function(n){
        if(n == true){
            console.log('SEU CACHORRO ESTÁ DOENTE!')
        }else{
            console.log('Seu cachorro não esta doente!')
        }
    }
}

let url = `https://viacep.com.br/ws/${cep}/json/`
fetch(url).then(function(response){
    response.json().then(function(data){
        console.log(data)
    })
})

let texto = document.querySelector('#texto')
texto.innerHTML=`<p>Seu nome é ${Usuario.Nome}<br>
Seu email é: ${Usuario.Email}<br>
Seu Cep é: ${Usuario.Cep}<br>
Seu telefone é: ${Usuario.Telefone}</p>`;

function mostraEndereco(dados){
    texto.innerHTML+=`<p>Seu endereço é: <br>
    Rua: ${dados.logradouro}<br</p>`
}

let estilo = texto.style
estilo.color = 'blue'
estilo.fontSize = '20px'
estilo.justifyContent = 'center'
estilo.alignItems = 'center'
estilo.flex = 1



