import prompt from "prompt-sync"
let read = prompt

console.log("digite a data é hora")
let dataHora = await(read())

let newDate = new Date(dataHora)

console.log(newDate.toLocaleDateString("pt-BR"))