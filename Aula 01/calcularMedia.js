// Calcular Média

function CalcularMedia() {
  var mediaNecessaria = parseFloat(
    document.getElementById('input_mediaNecessaria').value
  )
  var nota1 = parseFloat(document.getElementById('nota1').value)
  var nota2 = parseFloat(document.getElementById('nota2').value)
  var nota3 = parseFloat(document.getElementById('nota3').value)
  var nota4 = parseFloat(document.getElementById('nota4').value)

  const divisor = 4.0

  var media = (nota1 + nota2 + nota3 + nota4) / divisor

  if (media >= mediaNecessaria) {
    var nota_calculada = document.getElementById('resultado')
    var media_calculada = `Aprovado: ${media.toFixed(1)}`
    nota_calculada.innerHTML = media_calculada
  } else if (media < mediaNecessaria) {
    var nota_calculada = document.getElementById('resultado')
    var media_calculada = `Reprovado: ${media.toFixed(1)}`
    nota_calculada.innerHTML = media_calculada
  }
  console.log(media)
}
