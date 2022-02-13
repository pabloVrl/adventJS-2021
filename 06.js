const almacen = {
  estanteria1: {
    producto1: "pan",
    producto2: "sopa"
  },
  estanteria2: {
    producto1: "mandarina",
    producto2: "tomate"
  },
  producto1: "camiseta"
}

let cola = [];
cola.push(almacen);

while (cola.length > 0) {
  const firstElement = cola[0];
  for (const element in firstElement) {
    const value = firstElement[element]
    if (typeof value === "object") {
      cola.push(value);
    } else console.log(value);
  }
  cola.shift();
}