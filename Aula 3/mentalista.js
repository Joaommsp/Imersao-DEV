var numeroSecreto = parseInt(Math.random() * 11)
console.log(numeroSecreto)

function Chutar() {
  let chute = parseInt(document.getElementById('valor').value)

  let elemento_resultado = document.getElementById('resultado')

  if (chute == numeroSecreto) {
    elemento_resultado.innerHTML = `Você acertou!!`
  } else if (chute > 10 || chute < 0) {
    elemento_resultado.innerHTML = 'Você deve digitar um número entre 0 e 10 '
  } else {
    elemento_resultado.innerHTML = 'Você errou!!'
  }
}
