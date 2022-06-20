

const refrigerante = parseFloat(prompt("Qual o valor do refrigerante?"))
const macarrao = parseFloat(prompt("Qual o valor do macarrão?"))
const ervilha = parseFloat(prompt("Qual o valor da ervilha"))
const arroz = parseFloat(prompt("Qual o valor do arroz?"))
const feijao = parseFloat(prompt("Qual o valor do feijão?"))
const vinho = parseFloat(prompt("Qual o valor do vinho?"))

let valorReferigerante = parseInt(prompt("Quantas Unidades de refrigerante?")) * refrigerante;
let valorMacarrao = parseInt(prompt("Quantas Unidades de macarrão?")) * macarrao;
let valorErvilha = parseInt(prompt("Quantas Unidades de ervilha?")) * ervilha;
let valorArroz = parseInt(prompt("Quantas Unidades de arroz?")) * arroz;
let valorFeijao = parseInt(prompt("Quantas Unidades de feijão?")) * feijao;
let valorVinho = parseInt(prompt("Quantas Unidades de vinho?")) * vinho;
let metadeVinho = (valorVinho / 2);
let valor_total = valorFeijao + valorArroz + valorErvilha + valorMacarrao + valorReferigerante;
    
if((valor_total * 100) % 2 == 0){
    alert("PARABÉNSSS o valor da compra é par portanto o bêbado paga: " + currency((valor_total/2) + valorVinho ) + " o santo paga: " + currency(valor_total/2))
    console.log(`O valor total da compra é ${valor_total}`)
}else{
    alert('Que pena, total impar, a amizade prevalesce cada um paga: ' + currency((valor_total+valorVinho)/2))
    console.log(`O valor total da compra é ${valor_total}`)
}

