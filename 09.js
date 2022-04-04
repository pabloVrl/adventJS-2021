function groupBy(collection, it) {
  let result = {};

  collection.forEach(item => {
    let actionResult;
    if (typeof it === "function") {
      actionResult = it(item);
    } else {
      actionResult = item[it];
    }

    if (!result[actionResult]) {
      result[actionResult] = [item];
    } else {
      result[actionResult] = [...result[actionResult], item];
    }
  })

  return result;
}

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }
groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }