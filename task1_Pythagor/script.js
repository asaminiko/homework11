function table(num) {
  const parent = document.getElementById('tbody')
  for (let i = 1; i <= num; i++) {
    let tr = document.createElement('tr')
    parent.appendChild(tr)
    for (let j = 1; j <= num; j++) {
      let th = document.createElement('th')
      th.textContent = i * j
      tr.appendChild(th)
    }
  }
}
table(10)
