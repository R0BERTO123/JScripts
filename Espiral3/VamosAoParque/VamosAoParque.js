import prompt from"prompt-sync"
let read = prompt()

console.log("Qual é a temperatura?")
let temperatura = Number(await(read()))

let agradavel = temperatura >=23||temperatura<=30

console.log("Vamos ao parque? "+agradavel)