function adicionarFilme() {
  let filmeFavorito = document.getElementById('filme').value

  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmes(filmeFavorito)
  } else {
    console.error('Formato de imagem inválido')
  }

  document.getElementById('filme').value = ''
}

function listarFilmes(filme) {
  console.log(filme)
  let elementofilmeFavorito = '<img src=' + filme + '>'
  let elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementofilmeFavorito
}
