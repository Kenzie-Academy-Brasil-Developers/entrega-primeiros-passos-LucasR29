const currency = function(number){
    return new Intl.NumberFormat('pt-BR', {style: 'currency',currency: 'BRL', minimumFractionDigits: 2}).format(number);
};

let definir_valores = prompt("Desaja definir novos valores aos produtos?")

if (definir_valores == "sim" || "Sim"){
    let refrigerante = parseFloat(prompt("Qual o valor do refrigerante?"))
    let macarrao = parseFloat(prompt("Qual o valor do macarrão?"))
    let ervilha = parseFloat(prompt("Qual o valor da ervilha"))
    let arroz = parseFloat(prompt("Qual o valor do arroz?"))
    let feijao = parseFloat(prompt("Qual o valor do feijão?"))
    let vinho = parseFloat(prompt("Qual o valor do vinho?"))

    let valorReferigerante = parseInt(prompt("Quantas Unidades de refrigerante?")) * refrigerante;
    let valorMacarrao = parseInt(prompt("Quantas Unidades de macarrão?")) * macarrao;
    let valorErvilha = parseInt(prompt("Quantas Unidades de ervilha?")) * ervilha;
    let valorArroz = parseInt(prompt("Quantas Unidades de arroz?")) * arroz;
    let valorFeijao = parseInt(prompt("Quantas Unidades de feijão?")) * feijao;
    let valorVinho = parseInt(prompt("Quantas Unidades de vinho?")) * vinho;
    let metadeVinho = (valorVinho / 2);
    let valor_total = valorVinho + valorFeijao + valorArroz + valorErvilha + valorMacarrao + valorReferigerante;
    
    if((valor_total * 100) % 2 == 0){
        alert("PARABÉNSSS o valor da compra é par portanto o bêbado paga: " + currency(((valor_total/2) + metadeVinho)) + " o santo paga: " + currency(((valor_total/2) - metadeVinho)))
        console.log(`O valor total da compra é ${valor_total}`)
    }else{
        alert('Que pena, total impar, a amizade prevalesce cada um paga: ' + currency((valor_total/2)))
        console.log(`O valor total da compra é ${valor_total}`)
    }

}else{
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
        console.log(`O valor total da compra é ${valor_total}`)
    }else{
        alert('Que pena, total impar, a amizade prevalesce cada um paga: ' + currency((valor_total/2)))
        console.log(`O valor total da compra é ${valor_total}`)
    }
}

