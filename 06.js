function contains(store, product) {
  let cola = [];
  cola.push(store);

  while (cola.length > 0) {
    const firstElement = cola[0];
    for (const element in firstElement) {
      const value = firstElement[element]
      if (typeof value === "object") {
        cola.push(value);
      } else {
        if (value === product) {
          return true;
        } 
      }
    }
    cola.shift();
  }
  return false;
}

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}

console.log(contains(almacen, 'camiseta')); // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}

console.log(contains(otroAlmacen, 'gameboy')) // false