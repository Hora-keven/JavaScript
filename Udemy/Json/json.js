//Json = javascript Object Notation 
//utilzado para comunicacao de front-end com back-end
//tipo de dado padronizado que lembra objetos do javascript


const car = {
    'brand':'bmw',
    'wheels':4,
    'doors':2,
    'type':'Sedan'
}
let Stringjson = JSON.stringify(car)
console.log(Stringjson)
let jsonString = JSON.parse(Stringjson)
console.log(jsonString)