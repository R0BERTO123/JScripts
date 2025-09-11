import prompt from "prompt-sync"
let read = prompt()

console.log("Qual é a data é hora atual?")
let dataHoraAtual = await(read())

console.log("Qual é o fuso?")
let fuso = Number(await(read()))

let newDate = new Date(dataHoraAtual)

newDate.setHours(newDate.getUTCHours()+ fuso)

let formataDataHora = newDate.toISOString().replace("T"," ").replace("Z","")

console.log("Horário local: "+formataDataHora)