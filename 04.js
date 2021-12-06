function createXmasTree(height) {
  // ¡Y no olvides también poner los turrones!
  let tree = ''
  const width = height + (height - 1)

  // Añadir el árbol
  for(let i = 0; i < height; i++) {
    let espacios = Math.round(width/2) - (i + 1)
    for(let j = 0; j < width; j++) {
      if(j < espacios || j > (width - 1) - espacios) tree += '_'
      else tree += '*'
    } 
    tree += '\n'
  }

  // Añadir base del árbol
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < width; j++) {
      if(j === Math.round(width/2) - 1) tree += '#'
      else tree += '_'
    }
    if(i === 0) tree += '\n'
  }

  return tree
}

console.log(createXmasTree(20))

// height 2; 1 - 3
// height 3; 1 - 3 - 5
// height 4; 1 - 3 - 5 - 7
// height 5; 1 - 3 - 5 - 7 - 9
// height 6; 1 - 3 - 5 - 7 - 9 - 11