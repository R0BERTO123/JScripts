import prompt from "prompt-sync";
let read = prompt()

function Dobrar1(n1){
     n1 = n1*2
     return n1 
     
}

function Dobrar2(n2){
    n2 = n2*2
    return n2 
    
}
function Dobrar3(n3){
    n3 = n3*2
    return n3 
    
}

console.log("Digite três numeros")
let numero1 = Number(await(read()))
let numero2 = Number(await(read()))
let numero3 = Number(await(read()))

let chamaFunction1 = Dobrar1(numero1)
let chamaFunction2 = Dobrar2(numero2)
let chamaFunction3 = Dobrar3(numero3)

console.log("O dobro de", numero1,"é",chamaFunction1)
console.log("O dobro de", numero2,"é",chamaFunction2)
console.log("O dobro de", numero2,"é",chamaFunction3)
