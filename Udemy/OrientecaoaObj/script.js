const cachorro = {
    raca:'Pug',
    uivar:function(){
        console.log('AUuuuUuUuuUuUuUUUuuUuUu')
    },
    rosnar:function(){
        console.log('GRRRRRRRRR')
    },
    setRaca:function(raca){
        this.raca = raca
    },
    getRaca: function(){
        return "A raça é:"+this.raca
    }
}
//Prototypes
console.log(cachorro.hasOwnProperty('rosnar'))
//Criando objeto com a classe mãe
let cachorroNovo = Object.create(cachorro)
cachorroNovo.setRaca('Pastor alemao')
console.log(cachorroNovo.getRaca())
console.log(Object.getPrototypeOf(cachorroNovo) == cachorro)


let pessoa = {
    nome:'Maria',
    cpf:5455451380,
    rg:12121212,
    genero:'Feminino',
    filhos:'não'
}
//criar objetos atraves de funcao
function criarPessoa(nome, cpf, rg, genero){
    let pessoa1 = Object.create(pessoa)
    pessoa1.nome = nome
    pessoa1.cpf = cpf
    pessoa1.rg = rg
    pessoa1.genero = genero
    pessoa1.filhos = function(filhos){
        if(filhos == 'sim'){
            console.log('Você tem filhos')
        }else if(filhos == 'não'){
            console.log('Você não tem filhos')
        }else console.log('Escreva algo certo')

    }

    return pessoa1;
}
let Keven = criarPessoa('Keven',1313131313,34344354, 'Masculino')
Keven.filhos('não')

//Construtor com new
//MANEIRA MAIS CORRETA PRA CRIAR UMA CLASSE EM JAVASCRIPT (APOS SAIR A VERSAO DO E6 OUTRO JEITO DE CRIAR UMA CLASSE SURGIU)
function Pessoa(nome, idade, rg){
    this.nome = nome
    this.idade = idade,
    this.rg = rg

}
Pessoa.prototype.carro = function(){
    console.log('POOOOBRE')
}
let Mario = new Pessoa('Mario',14,54545454)
console.log(Mario)
Mario.carro()

//ABAIXO É O JEITO, com isso nao precisamos mais criar uma classe por intermedio de uma function
class Pessoas {
    constructor(nome, rg){
        this.nome = nome
        this.rg = rg
    }
    filhos(filhos){
        if(filhos == 'sim'){
            console.log('Você tem filhos')
        }else if(filhos == 'não'){
            console.log('Você não tem filhos')
        }else console.log('Escreva algo certo')
    }
}
let idade = Symbol()
Pessoas.prototype[idade] = 56

let maria = new Pessoas('Maria',89898998)

console.log(Pessoas.prototype[idade])
console.log(maria)
maria.filhos('sim')