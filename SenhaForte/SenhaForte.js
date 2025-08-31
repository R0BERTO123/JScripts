import prompt from "prompt-sync"
let read = prompt()

console.log("digite uma senha")
let senha = await(read())

let maisQ = senha.length >=6

let forte  =   senha.includes("*")|| senha.includes("(") || senha.includes(")") || senha.includes("@")
|| senha.includes("!") || senha.includes("#") || senha.includes("$") || senha.includes("%") || senha.includes("^") || senha.includes("&") || senha.includes("_")

let senhaForte = maisQ == true && forte == true

console.log("A senha cumpre os requisitos? "+senhaForte)