import prompt from "prompt-sync"
let read = prompt()

console.log("Qual é o nome do filme?")
let nomeFilme = await(read())

console.log("Qual é a calssifiacação do filme?")
let cassiFilme = Number(await(read()))

console.log("Qual é a idade da primera pessoa?")
let pessoa1 = Number(await(read()))

console.log("Qual é a idade da segunda pessoa?")
let pessoa2 = Number(await(read()))

let daPraAssistir = false

if(cassiFilme == 0){
    daPraAssistir = true

    
}

else{

    if(pessoa1>=cassiFilme && pessoa2>=cassiFilme){

        daPraAssistir = true
    }
}

console.log("Vamos assistir um filme? "+ daPraAssistir)