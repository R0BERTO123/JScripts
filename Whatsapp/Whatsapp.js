import prompt from "prompt-sync"
let read = prompt()

console.log("digite seu numero?")
let numero = await(read())



numero = numero.replaceAll("(","").replaceAll(")","").replaceAll("+","").replaceAll("-","").replaceAll(" ","")

console.log("https://api.whatsapp.com/send?phone="+numero)