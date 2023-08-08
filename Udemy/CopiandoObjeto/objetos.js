let carro = {
    rodas: 4,
    motor:'2.0',
    portas:2,
    portamalas:'300L'
}

let complemento ={
    tetosolar:true,
    elétrico:false,
    giroRodas:'360°'
}

//Object assign copia propiedades de outro objetos
Object.assign(carro, complemento)
console.log(carro.giroRodas)

//Objeto keys serve para ver as chaves do objeto
console.log(Object.keys(carro))

//Mutação ou mutability, serve para mutar
complemento = carro

let casa = {
    portas:5,
    comodos:6,
    piscina:true,
    qtAndar:3,

}

carro.rodas='6'
console.log(complemento.rodas)
