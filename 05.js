function daysToXmas(date) {
  // ¡Y no olvides compartir tu solución en redes!

  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()

  const xmas = new Date('Dec 25, 2021')
  const newDate = new Date(year, month, day)

  const diffTime = Math.abs(newDate - xmas)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if(xmas < date) return diffDays * -1
  return diffDays
}

const date1 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date1))