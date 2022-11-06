const url =
  'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=your-app-token'

console.log('JavaScript code starting...')

function consumirAPI() {
  let url =
    'http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=your-app-token'
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      console.log(data)
      mostrarTela(data)
    })
  })
}

consumirAPI()
