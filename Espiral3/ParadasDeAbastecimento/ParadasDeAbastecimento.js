import prompt from "prompt-sync"
let read = prompt()

console.log("Qual é a capacidade do tanque de combustivel?")
let capacidadeTanque = Number(await(read()))

console.log("Qual é o comsumo do veiculo?")
let consumo = Number(await(read()))

console.log("Qual é a distancia da viagem?")
let distancia = Number(await(read()))

let vezesReabastecer = 1

let autonomia = capacidadeTanque*consumo
let daPraChegar = autonomia>=distancia

if(daPraChegar == false){
    vezesReabastecer = Math.ceil(distancia/autonomia)
}

console.log("Você precisará fazer "+vezesReabastecer+" parada(s) para abastecer.")

