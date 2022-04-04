function getCoins(change) {
  let result = [0, 0, 0, 0, 0, 0];
  let cambio = change;

  while (cambio > 0) {
    if (cambio >= 50) {
      result[5] += 1;
      cambio -= 50;
    } else if (cambio >= 20) {
      result[4] += 1;
      cambio -= 20;
    } else if (cambio >= 10) {
      result[3] += 1;
      cambio -= 10;
    } else if (cambio >= 5) {
      result[2] += 1;
      cambio -= 5;
    } else if (cambio >= 2) {
      result[1] += 1;
      cambio -= 2;
    } else {
      result[0] += 1;
      cambio -= 1;
    }
  }

  return result;
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos