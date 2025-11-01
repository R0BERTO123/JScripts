import prompt from "prompt-sync"
let read = prompt()

console.log("nome completo")
let nomeCompleto = await(read())

console.log("CPF")
let cpf = await(read())

console.log("numero de telefone")
let numero =  await(read())

let primeraLetraNome = nomeCompleto.charAt(0)
let sobrenome = nomeCompleto.split(" ")[2]
let primeraLetraSobrenome = sobrenome.charAt(0)

let cpfTres = cpf.substring(0,3)

let numeroDois = numero.substring(6,8)

console.log("Senha criada: "+primeraLetraNome+primeraLetraSobrenome+cpfTres+numeroDois )