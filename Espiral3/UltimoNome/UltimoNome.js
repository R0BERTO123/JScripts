import prompt from "prompt-sync"
let read = prompt()

console.log("digite seu nome completo")
let nome = await(read())

let ultimoNome = nome.split(" ")[2]

console.log("Seja bem-vindo "+ultimoNome)