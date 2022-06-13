function resultadoNumeros(num1, num2) {
    const fraseInicial = comparaNumeros(num1, num2);
    const fraseIntermediaria = comparaSoma(num1, num2)

    return `${fraseInicial}. ${fraseIntermediaria}`
}

function comparaNumeros(num1, num2) {
  msg = `Os números ${num1} e ${num2} `;

  num1 === num2 ?
    msg += `são iguais` : msg += `não são iguais`
  
    return msg;
}

function comparaSoma(num1, num2){
    soma = num1 + num2
    
    msg = `Sua soma é ${soma}, que é `   
    
    compara10 = soma > 10 ? `maior que 10` : `menor que 10.`
    compara20 = soma > 20 ? `maior que 20` : `menor que 20.`

    msg += `${compara10} e ${compara20}`

    return msg
}

console.log(resultadoNumeros(11,2))