const currency = function(number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(number);
};


let valorReferigerante = parseInt(prompt("Quantas Unidades de refrigerante?")) * 11.99;
let valorMacarrao = parseInt(prompt("Quantas Unidades de macarrão?")) * 6.99;
let valorErvilha = parseInt(prompt("Quantas Unidades de ervilha?")) * 6.99;
let valorArroz = parseInt(prompt("Quantas Unidades de arroz?")) * 22.99;
let valorFeijao = parseInt(prompt("Quantas Unidades de feijão?")) * 11.89;
let valorVinho = parseInt(prompt("Quantas Unidades de vinho?")) * 70.00;
let metadeVinho = (valorVinho / 2);
let valor_total = valorVinho + valorFeijao + valorArroz + valorErvilha + valorMacarrao + valorReferigerante;


if((valor_total * 100) % 2 == 0){
    alert("PARABÉNSSS o valor da compra é par portanto o bêbado paga: " + currency(((valor_total/2) + metadeVinho)) + "o santo paga: " + currency(((valor_total/2) - metadeVinho)))

}else{
    alert('Que pena, total impar, a amizade prevalesce cada um paga: ' + currency((valor_total/2))) 
}