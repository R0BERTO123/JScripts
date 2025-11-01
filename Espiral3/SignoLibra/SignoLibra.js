import prompt from "prompt-sync"
let read = prompt()

console.log("Digite o seu mês")
let mes = await(read())
mes = mes.toUpperCase()

console.log("Qual é o dia que vc naceu?")
let dia = Number(await(read()))

let eDeLibra = false

if(mes=="SETEMBRO" && dia>=23){

    eDeLibra = true
}

if(mes=="OUTUBRO" && dia<=22){

    eDeLibra = true
}

console.log("É do signo de Libra? "+ eDeLibra)