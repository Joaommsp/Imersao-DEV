var palmeiras = {
  escudo: 'https://logodetimes.com/times/palmeiras/logo-palmeiras-512.png',
  nome: 'Palmeiras',
  vitorias: 2,
  empates: 1,
  derrotas: 1,
  pontos: 0
}

var internacional = {
  escudo:
    'https://logodetimes.com/times/internacional/logo-internacional-512.png',
  nome: 'Internacional',
  vitorias: 1,
  empates: 1,
  derrotas: 2,
  pontos: 0
}

function calcularPontos(time) {
  let pontos = time.vitorias * 3 + time.empates
  return pontos
}

palmeiras.pontos = calcularPontos(palmeiras)
internacional.pontos = calcularPontos(internacional)

console.log(palmeiras)
console.log(internacional)

var times = [palmeiras, internacional]

function adicionarTime() {
  var novoTime = document.getElementById('input_nome').value
  var novoEscudo = document.getElementById('input_escudo').value
  console.log(novoEscudo)
  console.log(novoTime)
  novoTime = {
    escudo: novoEscudo,
    nome: novoTime,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  times.push(novoTime)
  exibirTimes(times)
  console.log(novoTime)
}

function exibirTimes(times) {
  var elemento = ''

  for (var i = 0; i < times.length; i++) {
    elemento += '<tr>'
    elemento += '<td><img src=' + times[i].escudo + '></td>'
    elemento += '<td>' + times[i].nome + '</td>'
    elemento += '<td>' + times[i].vitorias + '</td>'
    elemento += '<td>' + times[i].empates + '</td>'
    elemento += '<td>' + times[i].derrotas + '</td>'
    elemento += '<td>' + times[i].pontos + '</td>'
    elemento +=
      '<td><button onClick="adicionarVitoria(' + i + ')">Vitória</button></td>'
    elemento +=
      '<td><button onClick="adicionarEmpate(' + i + ')">Empate</button></td>'
    elemento +=
      '<td><button onClick="adicionarDerrota(' + i + ')"">Derrota</button></td>'
    elemento += '</tr>'
  }
  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = elemento
}

exibirTimes(times)

function adicionarVitoria(i) {
  var time = times[i]
  time.vitorias++
  time.pontos = calcularPontos(time)
  exibirTimes(times)
}

function adicionarEmpate(i) {
  var time = times[i]
  time.empates++
  time.pontos = calcularPontos(time)
  exibirTimes(times)
}

function adicionarDerrota(i) {
  var time = times[i]
  time.derrotas++
  exibirTimes(times)
}
