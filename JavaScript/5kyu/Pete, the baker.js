const cakes = (recipe, available) => {
  let count = [];

  for (let i in recipe) {
    if (recipe[i] === 0)
      continue;
    count.push(available[i] ? ~~(available[i] / recipe[i]) : 0);
  }
  return Math.min(...count);
}


// must return 2
cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// must return 0
cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });
