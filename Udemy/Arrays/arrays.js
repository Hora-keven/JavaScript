let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
for(let i = 0; i < number.length; i++){
    console.log(number[i])
    
}
// pop remove o ultimo index da lista
let pessoas = ['Keven', 'Rosimeire', 'Rosana', 'Alexandre']
console.log(pessoas.pop())

//push adiciona em uma lista (no final)
pessoas.push('Keven', 'Maria', 'Rosimeire')
console.log(pessoas)

 //shift remove o primeiro elemento de um array
pessoas.shift()
console.log(pessoas)

 //Unshift adiciona no inicio de um array
pessoas.unshift('Keven')
console.log(pessoas)

//Busca o index especifico de algo no array
console.log(pessoas.indexOf('Rosimeire'))

//Retorna o último indice que um certo elemento pode ser encontrado 
// no array, ou -1 se não tiver

console.log( pessoas.lastIndexOf('Rosimeire'))

//slice recebe dois parametros de inicio e fim da array que voce quer cortar
// ou apenas pegar o que deseja
//se colocar em negativo ele pega do final da array
console.log(pessoas.slice(0,2))

//varre a array pega o elemento e a posição, atraves de uma função
//anonima
pessoas.forEach((num,i) =>{
    console.log(`O nome é: ${num}\n e a sua posição é: ${i}`)
})

//includes serve para verificar se um array tem um determinado 
//elemento, se tiver ele retorna um boolean

if(pessoas.includes("Maria") == true){
    console.log('Encontramos essa pessoa aqui!!')
}else{
    console.log('Não encontramos!')
}

// reverse serve para reverter um array do fim ao inicio
console.log(pessoas.reverse())

