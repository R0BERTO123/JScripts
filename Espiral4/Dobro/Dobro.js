import prompt from "prompt-sync";
let read =prompt()

function Dobrar(n1){
    let dobro = n1 *2
    return dobro
}

console.log("digite um numero")
let numero = Number(await(read()))

let retornarFunc = Dobrar(numero)

console.log("O dobro de",numero,"é",retornarFunc)