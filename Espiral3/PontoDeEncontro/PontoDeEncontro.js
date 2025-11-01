import prompt from "prompt-sync"
let read = prompt()

console.log("Digite a data e hora do ponto");
let dataHora = await read();

console.log("Qual é o fuso horário da pessoa 1?");
let pessoaFuso1 = Number(await read());

console.log("Quais são as horas para a pessoa 1 chegar no ponto de encontro?");
let pessoaHorasChegada1 = Number(await read());

console.log("Qual é o fuso horario da pessoa 2?");
let pessoaFuso2 = Number(await read());

console.log("Quais são as horas para a pessoa 2 chegar no ponto de encontro?");
let pessoaHorasChegada2 = Number(await read());

let newDate = new Date(dataHora);


let mPessoa1 = newDate.getTime() + (pessoaFuso1 * 60 * 60 * 1000);
mPessoa1 -= pessoaHorasChegada1 * 60 * 60 * 1000;
let horaSaidaPessoa1 = new Date(mPessoa1);



let mPessoa2 = newDate.getTime() + (pessoaFuso2 * 60 * 60 * 1000);
mPessoa2 -= pessoaHorasChegada2 * 60 * 60 * 1000;
let horaSaidaPessoa2 = new Date(mPessoa2);

function formatarData(d) {
  return d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0") + " " +
    String(d.getHours()).padStart(2, "0") + ":" +
    String(d.getMinutes()).padStart(2, "0") + ":" +
    String(d.getSeconds()).padStart(2, "0");
}

console.log("A primeira pessoa deve sair em " + formatarData(horaSaidaPessoa1));
console.log("A segunda pessoa deve sair em " + formatarData(horaSaidaPessoa2));

