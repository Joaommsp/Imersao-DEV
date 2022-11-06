function ConverterFarenheit() {
  var temperatura_graus = parseFloat(document.getElementById('valor').value)
  //multiplicar a temperatura em graus Celsius por 1,8 e somar 32.

  const mult = 1.8
  const soma = 32
  let temperatura_farenheit = temperatura_graus * mult + soma

  let temperatura_convetida = document.getElementById('valorConvertido')
  let temperatura_resultado = `${temperatura_farenheit.toFixed(1)}° farenheite`
  temperatura_convetida.innerHTML = temperatura_resultado
}

function ConverterKelvin() {
  var temperatura_graus = parseFloat(document.getElementById('valor').value)
  const soma_kelvin = 273

  let temperatura_kelvin = temperatura_graus + soma_kelvin

  let local_resultado = document.getElementById('valorConvertido')
  let resultado_final = `${temperatura_kelvin} Kelvin`
  local_resultado.innerHTML = resultado_final
}
