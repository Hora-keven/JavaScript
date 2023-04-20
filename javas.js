function hello(){
    alert("SEJA BEM VINDO A CALCULADORA NO JAVASCRIPT!");
}
function soma(){
    alert("SEJA BEM VINDO A CALCULADORA NO JAVASCRIPT");
    var n1 = parseInt(prompt("Digite um numero: "))
    var n2 = parseInt(prompt("Digite um numero: "))
    alert(n1+n2)
  
}
function parIMpar(){
    var n1 = parseInt(prompt("Digite um numero: "))
    var container = document.getElementById("caixa")
   if(n1 % 2 == 0){
    container.innerText = "Par"
   }else{
    container.innerText = "IMPAR"
   }
}
function tabuada(){
    let n1 = document.getElementById("TABUADA ").value;
    var caixaDiv = document.getElementById("caixa")

    for(var contador =0; contador)
}