import prompt from "prompt-sync"
let read = prompt()

console.log("Qual é a data é hora?")
let dataHora = await(read())

console.log("Quantas horas de viagem?")
let horasViagem = Number(await(read()))

console.log("Qual é o fuso?")
let fuso = Number(await(read()))


let newDate = new Date(dataHora)

let addHora = newDate.getTime()

addHora += horasViagem * 60 * 60 * 1000

let fusoDestino = addHora + fuso * 60 * 60 * 1000

let chegada = new Date(fusoDestino)

let horaDeChegada = chegada.toISOString().replace("T"," ").replace("Z","").replace(".000","")


console.log("Você chegará em "+horaDeChegada)

