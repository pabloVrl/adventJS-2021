function isValid(letter) {
  // ¡No dejes que el Grinch gane!
  const lastParenthesis = {
    type: '',
    position: undefined 
  }

  for(let i = 0; i < letter.length; i++) {
    if('{}[]'.includes(letter[i])) return false

    if('()'.includes(letter[i])) {
      if(lastParenthesis.type === letter[i]) return false
      if(lastParenthesis.position === i - 1) return false

      lastParenthesis.type = letter[i]
      lastParenthesis.position = i
    }
  }
  
  if(lastParenthesis.type === '(') return false

  return true
}

console.log(isValid("bici balón bici coche"))