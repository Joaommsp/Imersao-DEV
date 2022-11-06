/*var listaDeFilmes = ['Yesterday', 'A Chegada', 'Escola de Rock']

var filme1 = 'Yesterday'
var filme2 = 'A Chegeda'
var filme3 = 'Escola de Rock'
listaDeFilmes.push('Harry Potter')
listaDeFilmes.push('Harry Potter 2')
listaDeFilmes.push('Star Wars 3')

for (let i = 0; i < listaDeFilmes.length; i++) {
  document.write('<p>' + listaDeFilmes[i] + '</p>')
}*/

var listaDeFilmes2 = [
  'https://upload.wikimedia.org/wikipedia/pt/7/79/Yesterday_%282019%29_poster.jpg',
  'https://cineclick-static.flixmedia.cloud/480/69/1080x1620_1600955756.jpg',
  'https://vertentesdocinema.com/wp-content/uploads/2017/01/Star-Wars-O-Despertar-da-Forca-2-scaled.jpg',
  'https://www.cafecomfilme.com.br/media/k2/items/cache/3957749059ba282bcc0f2396e42e4755_XL.jpg?t=20210624_154041'
]
let catalogo = document.getElementById('catalogo')

for (let i = 0; i < listaDeFilmes2.length; i++) {
  document.write('<img src=' + listaDeFilmes2[i] + '>')
}
