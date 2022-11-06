const url = ' https://economia.awesomeapi.com.br/last/'
const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

function consumirAPI() {
  fetch(url + moedas)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      const valorDolar = data.USDBRL
      const valorEuro = data.EURBRL
      const valorBitcoin = data.BTCBRL
      console.log(valorDolar.high)
      ConverterDolar(data)
      ConverterDolar()
    })
}

consumirAPI()

function ConverterDolar() {
  let valorReal = parseFloat(document.getElementById('valor').value)
  let cotacaoDolar = valorReal * valorDolar.high

  let ElementoValorConvertido = document.getElementById('valorConvertido')
  ElementoValorConvertido.innerHTML = cotacaoDolar
}
