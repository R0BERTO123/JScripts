import prompt from "prompt-sync"
let read = prompt()

console.log("Qual é o nome do autor?")
let nomeAutor= await(read())

console.log("Qual é o nome da obra?")
let obra = await(read())

console.log("Qual é o nome da cidade?")
let cidade = await(read())

console.log("Qual é a editora?")
let editora = await(read())

console.log("Qual é o ano de lançamento")
let anoLancamento =  Number(await(read()))

let ultimoNome = nomeAutor.split(" ") [2]
ultimoNome =ultimoNome.toUpperCase()

let primeraLetra = nomeAutor.charAt(0)
primeraLetra =primeraLetra.toUpperCase()


console.log(ultimoNome+","+primeraLetra+"."+obra+"."+cidade+":"+editora+","+anoLancamento+".")
//nome do autor, obra, cidade, editora e ano de lançamento.