app = window.app || {}

app.button = function () {
  var button = document.createElement('button')
  button.textContent='asdf'
  button.addEventListener('click', function () {
    button.textContent='clicked'
  })
  document.body.appendChild(button)
  return button
}
