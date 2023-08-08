let texto = '\n keven \n'
//trim tira tudo que não é string, espaço ou \n
console.log(texto.trim())

//padstart adiciona em uma string caracter
let sku = '35'
let pad = sku.padStart(5, "0")
console.log(pad)

//divide uma string pelo espaço e retorna um array
let testandoSplit = 'O melhor lugar do mundo'
let funcao = testandoSplit.split(' ')
console.log(funcao)

//O join junta um astring seja pelo espaço ou por algum caracter
let junta = funcao.join('_')
console.log(junta)