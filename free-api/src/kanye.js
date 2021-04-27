const quote = document.getElementById("quote")
const another = document.getElementById("another")

const biriyani = document.getElementById('biriyani')
const newBiriyani = document.getElementById('newBiriyani')

newQuote = () => {
  fetch('https://api.kanye.rest')
  .then(response => response.json())
  .then(data => {
    quote.innerHTML = data.quote
  })
}

newQuote()

another.addEventListener('click', e => {
  e.preventDefault
  newQuote()
})

newBiriyaniImage = () => {
  fetch('https://biriyani.anoram.com/get')
  .then(response => response.json())
  .then(data => {
    biriyani.innerHTML = `<img src='${data.image}' />`
  })
}

newBiriyani.addEventListener('click', e => {
  e.preventDefault
  newBiriyaniImage()
})
