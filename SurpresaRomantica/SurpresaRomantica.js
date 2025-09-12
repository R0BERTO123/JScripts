import prompt from "prompt-sync"
let read = prompt()

console.log("Qual é a data é hora no fuso horario?")
let dataHora = await(read())

let newDate = new Date(dataHora)

let horarioNamorado = newDate.toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})

let dataHoraFormatada = new Date(horarioNamorado)


    let ano = dataHoraFormatada.getFullYear()
    let mes = String(dataHoraFormatada.getMonth()+1).padStart(2,"0")
    let dia = String(dataHoraFormatada.getDay()+1).padStart(2,"0")

    let hora = String(dataHoraFormatada.getHours()).padStart(2,"0")
    let min = String(dataHoraFormatada.getMinutes()).padStart(2,"0")
    let seg = String(dataHoraFormatada.getSeconds()).padStart(2,"0")



console.log(`Avise o hotel em ${ano}-${mes}-${dia} ${hora}:${min}:${seg} de Brasil/SãoPaulo`)