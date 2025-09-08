import prompt from "prompt-sync"
let read = prompt()

console.log("CPF")
let cpf = await(read())

cpf = cpf.replaceAll(" ","").replaceAll(".","").replaceAll("-","")

console.log(cpf)

cpf = cpf.substring(0,3)+"."+cpf.substring(3,6)+"."+cpf.substring(6,9)+"-"+cpf.substring(9,11)

console.log(cpf)