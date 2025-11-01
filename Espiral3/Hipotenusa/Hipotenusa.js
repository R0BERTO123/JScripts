import prompt from"prompt-sync";
let ler = prompt();

console.log("Digite o valor do cateto1")
let cateto1 =Number(await(ler()))

console.log("Digite o valor do cateto2")
let cateto2 = Number(await(ler()))

let hipotenusa = Math.sqrt(Math.pow(cateto1,2)+Math.pow(cateto2,2))

console.log("A hipotenusa é "+hipotenusa.toFixed(1))