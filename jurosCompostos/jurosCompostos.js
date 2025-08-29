import prompt from"prompt-sync"
let read = prompt()

console.log("Qual é o valor total da compra?")
let totalCompra =Number(await(read()))

console.log("Qual é o total de parcelas?")
let parcelas = Number(await(read()))

console.log("Qual é a taxa de juros mensal?")
let taxa = Number(await(read()))

let taxaJuros  = taxa/100
let calculo = Math.pow(1+taxaJuros,parcelas)
let valorTotal = totalCompra*calculo
let parcelasTotal = valorTotal/parcelas

console.log("Sua compra ficará R$ "+valorTotal.toFixed(2)+" em "+parcelas+"x de R$ "+parcelasTotal.toFixed(2)+" por mês.")