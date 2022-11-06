function ConverterDolar() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  //var valorDolar = parseFloat(valor)
  const valorDolar = 5.25

  var valorReal = valor * valorDolar
  console.log(valorReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `O resuldado em Real é R$${valorReal.toFixed(2)}`
  elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterEuro() {
  var valorElemento = document.getElementById('valor').value
  const valorEuro = 5.19

  var valorReal = valorElemento * valorEuro
  console.log(valorReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = `O resuldado em Real é R$${valorReal.toFixed(2)}`
  elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterBitcoin() {
  let valor_elemento = document.getElementById('valor').value
  const valor_bitcoin = 98557.74

  let valor_real = valor_elemento * valor_bitcoin

  let elemento_Convertido = document.getElementById('valorConvertido')
  let valor_convertido = `O resuldado em Real é R$${valor_real.toFixed(2)}`

  elemento_Convertido.innerHTML = valor_convertido
}
