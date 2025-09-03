import prompt from "prompt-sync"
let read = prompt()

console.log("Digite uma cor")
let cor  = await(read())
cor = cor.toUpperCase()

let primaria = cor ==="AMARELO" || cor ==="VERMELHO" || cor === "AZUL"

console.log("É cor primária? "+primaria)