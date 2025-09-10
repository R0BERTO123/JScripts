import prompt from "prompt-sync"
let read = prompt()

console.log("digite o termo inicial")
let inicio = Number(await(read()))

console.log("Digite a razão")
let razao = Number(await(read()))

console.log("Digite a posiçao valor")
let posicao = Number(await(read()))

let progressao = inicio*Math.pow(razao,posicao-1)

console.log("O valor do termo na posição "+posicao+" é "+progressao)