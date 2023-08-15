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

let cachorroNovo = Object.create(cachorro)
cachorroNovo.setRaca('Pastor alemao')
console.log(cachorroNovo.getRaca())
console.log(Object.getPrototypeOf(cachorroNovo) == cachorro)
