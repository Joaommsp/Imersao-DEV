var carta1 = {
  nome: 'Chevrolet Camaro ',
  imagem: './cartas/chevroletCamaro.jpg',
  atributos: {
    velocidade: 7,
    aceleracao: 7,
    potencia: 6
  }
}

var carta2 = {
  nome: 'Ford Mustang',
  imagem: './cartas/fordMustang.jpg',
  atributos: {
    velocidade: 7,
    aceleracao: 8,
    potencia: 7
  }
}

var carta3 = {
  nome: 'Dodge HellCat',
  imagem: './cartas/dodgeHellcat.jpg',
  atributos: {
    velocidade: 9,
    aceleracao: 10,
    potencia: 9
  }
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)

  cartaMaquina = cartas[numeroCartaMaquina]

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaMaquina == numeroCartaJogador) {
    var numeroCartaJogador = parseInt(Math.random() * 3)
  }

  function exibirCarta() {
    var elementoCartaJogador = document.getElementById('cartaJogador')
    var elementoCartaMaquina = document.getElementById('cartaMaquina')

    elementoCartaJogador.innerHTML =
      '<img class="imagem" src=' + cartas[numeroCartaJogador].imagem + '>'
    elementoCartaMaquina.innerHTML =
      '<img class="imagem" src=' + cartas[numeroCartaMaquina].imagem + '>'
  }

  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false

  exibirAtributos()
  exibirCarta()
}

function exibirAtributos() {
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ''

  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      '<input type="radio" name="atributo" checked value="' +
      atributo +
      '">' +
      atributo
  }
  opcoes.innerHTML = opcoesTexto
}

function obterAtributoSelecionado() {
  var radioAtributos = document.getElementsByName('atributo')

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value
    }
  }
}

function jogar() {
  var atributoSelecionado = obterAtributoSelecionado()
  var elementoResultado = document.getElementById('resultado')
  var valorCartaJogador = cartaJogador.atributos[atributoSelecionado]
  var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]

  if (valorCartaJogador > valorCartaMaquina) {
    elementoResultado.innerHTML = '<p>Você venceu</p>'
  } else if (valorCartaMaquina > valorCartaJogador) {
    elementoResultado.innerHTML = '<p>Você perdeu</p>'
  } else {
    elementoResultado.innerHTML = 'Empatou'
  }
  console.log(valorCartaMaquina)
}
