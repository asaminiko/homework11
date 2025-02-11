const parent = document.getElementById('div')
let img = document.createElement('img')
const btn = document.addEventListener('click', () => {
  img.src = `img/${Math.floor(Math.random() * 9) + 1}.jpg`
})
parent.appendChild(img)
