import prompt from"prompt-sync"
let read = prompt()

console.log("Qual é a data e hora?");
let dataHora = await(read());

console.log("Qual é o fuso local?");
let fusoLocal = Number(await(read()));

console.log("Qual é a cidade destino?");
let cidade = await(read());

console.log("Qual é o fuso da cidade?");
let fusoCidade = Number(await(read()));

let baseDate = new Date(dataHora.replace(" ", "T"));


let destino = new Date(baseDate.getTime() + (fusoCidade - fusoLocal) * 60 * 60 * 1000);

let jaEAnoNovo = destino.getMonth() + 1 === 1 && destino.getDate() === 1;




console.log("Já é Ano Novo em "+cidade+"? "+jaEAnoNovo)

