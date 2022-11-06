const url = ' https://economia.awesomeapi.com.br/last/'
const moedas = 'USD-BRL,EUR-BRL,BTC-BRL'

function ConsumindoAPI() {
  fetch(url + moedas)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      const cotacaoDolar = data.USDBRL
      const cotacaoEuro = data.EURBRL
      const cotacaoBitcoin = data.BTCBRL

      let dataAtualDolar = new Date(cotacaoDolar.create_date)
      let dataAtualEuro = new Date(cotacaoEuro.create_date)
      let dataAtualBitcoin = new Date(cotacaoBitcoin.create_date)

      let elementoCotacaoDolar = document.getElementById('DolarDiv')
      elementoCotacaoDolar.innerHTML =
        '<h2 style="color: #06283D ;" >' +
        cotacaoDolar.name +
        '</h2>' +
        '<p>Código: ' +
        cotacaoDolar.code +
        '</p>' +
        '<p  style="color: blue ;"> Atual: ' +
        parseFloat(cotacaoDolar.ask).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p style="color: #125C13;"> Máxima: ' +
        parseFloat(cotacaoDolar.high).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p style="color: red;"> Mínima: ' +
        parseFloat(cotacaoDolar.low).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p> Data: ' +
        dataAtualDolar.toLocaleString('pt-br') +
        '</p>'

      let elementoCotacaoEuro = document.getElementById('EuroDiv')
      elementoCotacaoEuro.innerHTML =
        '<h2 style="color: #06283D ;" >' +
        cotacaoEuro.name +
        '</h2>' +
        '<p>Código: ' +
        cotacaoEuro.code +
        '</p>' +
        '<p style="color: blue ;"> Atual: ' +
        parseFloat(cotacaoEuro.ask).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p style="color: #125C13;"> Máxima: ' +
        parseFloat(cotacaoEuro.high).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p style="color: red;"> Mínima: ' +
        parseFloat(cotacaoEuro.low).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p> Data: ' +
        dataAtualEuro.toLocaleString('pt-br') +
        '</p>'

      let elementoCotacaoBitcoin = document.getElementById('BitDiv')
      elementoCotacaoBitcoin.innerHTML =
        '<h2 style="color: #06283D ;" >' +
        cotacaoBitcoin.name +
        '</h2>' +
        '<p>Código: ' +
        cotacaoBitcoin.code +
        '</p>' +
        '<p style="color: blue ;"> Atual: ' +
        parseFloat(cotacaoBitcoin.ask).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p style="color: #125C13;"> Máxima: ' +
        parseFloat(cotacaoBitcoin.high).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p style="color: red;"> Mínima: ' +
        parseFloat(cotacaoBitcoin.low).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>' +
        '<p> Data: ' +
        dataAtualBitcoin.toLocaleString('pt-br') +
        '</p>'
    })
}

// DOLAR //
/*ask
: 
"5.1916"
bid
: 
"5.1886"
code
: 
"USD"
codein
: 
"BRL"
create_date
: 
"2022-10-10 17:32:40"
high
: 
"5.217"
low
: 
"5.1632"
name
: 
"Dólar Americano/Real Brasileiro"
pctChange
: 
"-0.18"
timestamp
: 
"1665433960"
varBid
: 
"-0.0095"
*/

ConsumindoAPI()

function ConverterDolar() {
  fetch(url + moedas)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      const valorDolar = data.USDBRL
      // const valorEuro = data.EURBRL
      // const valorBitcoin = data.BTCBRL
      console.log(valorDolar.high)
      var valorReal = parseFloat(document.getElementById('valor').value)
      let cotacaoDolar = valorReal * valorDolar.ask

      var ElementoValorSolicitado = document.getElementById('valorSolicitado')
      ElementoValorSolicitado.innerHTML =
        '<p>Conversão de: REAL/BRL </p>' +
        '<p>Valor a converter: ' +
        parseFloat(valorReal).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>'

      var ElementoValorConvertido = document.getElementById('ValorConvertido')
      ElementoValorConvertido.innerHTML =
        '<p>Para: ' +
        valorDolar.code +
        '</p>' +
        '<p>Valor Convertido:' +
        parseFloat(cotacaoDolar.toFixed(2)).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'USD'
        }) +
        '</p>'
    })
}

function ConverterEuro() {
  fetch(url + moedas)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      const valorEuro = data.EURBRL
      // const valorBitcoin = data.BTCBRL
      console.log(valorEuro.high)
      var valorReal = parseFloat(document.getElementById('valor').value)
      let cotacaoEuro = valorReal * valorEuro.ask

      var ElementoValorSolicitado = document.getElementById('valorSolicitado')
      ElementoValorSolicitado.innerHTML =
        '<p>Conversão de: REAL/BRL </p>' +
        '<p>Valor a converter: ' +
        parseFloat(valorReal).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>'

      var ElementoValorConvertido = document.getElementById('ValorConvertido')
      ElementoValorConvertido.innerHTML =
        '<p>Para: ' +
        valorEuro.code +
        '</p>' +
        '<p> Resultado da conversão:' +
        parseFloat(cotacaoEuro.toFixed(2)).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'EUR'
        }) +
        '</p>'
    })
}

function ConverterBitcoin() {
  fetch(url + moedas)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      const valorBitcoin = data.BTCBRL
      console.log(valorBitcoin.high)
      var valorReal = parseFloat(document.getElementById('valor').value)
      let cotacaoBitcoin = valorReal * valorBitcoin.ask

      var ElementoValorSolicitado = document.getElementById('valorSolicitado')
      ElementoValorSolicitado.innerHTML =
        '<p>Conversão de: REAL/BRL </p>' +
        '<p>Valor a converter: ' +
        parseFloat(valorReal).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL'
        }) +
        '</p>'

      var ElementoValorConvertido = document.getElementById('ValorConvertido')
      ElementoValorConvertido.innerHTML =
        '<p> Para: ' +
        valorBitcoin.code +
        '</p>' +
        '<p> Resultado da conversão: ' +
        parseFloat(cotacaoBitcoin.toFixed(2)).toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BTC'
        }) +
        '</p>'
    })
}
