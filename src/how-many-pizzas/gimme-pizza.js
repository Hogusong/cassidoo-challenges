/*
 *
 * Given an array of people objects (where each person has a name and a number of
 * pizza slices they’re hungry for) and a number for the number of slices that the pizza
 * can be sliced into, return the number of pizzas you need to buy.
 *
 * Example:
 *
 * const arr = [
 *  { name: 'Joe', num: 9 },
 *  { name: 'Cami', num: 3 },
 *  { name: 'Cassidy', num: 4 }
 * ];
 *
 * gimmePizza(arr, 8);
 *
 * 2 // 16 slices needed, pizzas can be sliced into 8 slices, so 2 pizzas should be ordered
 *
 */

const gimmePizza = (peepsThatWantPizza, slicesPerPizza) => {
  const slicesOfPizzaNeeded = peepsThatWantPizza.reduce((totalSlices, peep) => totalSlices + peep.slices, 0);
  const pizzasNeeded = slicesOfPizzaNeeded / slicesPerPizza;

  return Math.ceil(pizzasNeeded);
};

const party = [
  { name: 'Joe', slices: 3 },
  { name: 'Cami', slices: 4 },
  { name: 'Cassidy', slices: 2 },
  { name: 'Chris', slices: 4 },
];

let pizzas = 0;
let slices = 0;
let expectedPizzas = 0;

slices = 8;
expectedPizzas = 2;
pizzas = gimmePizza(party, slices);
console.log(`13 slices needed, and ${slices} slices per pizza means we need ${expectedPizzas} pizzas: ${pizzas}`);

slices = 3;
expectedPizzas = 5;
pizzas = gimmePizza(party, slices);

console.log(`13 slices needed, and ${slices} slices per pizza means we need ${expectedPizzas} pizzas: ${pizzas}`);

slices = 2;
expectedPizzas = 7;
pizzas = gimmePizza(party, slices);

console.log(`13 slices needed, and ${slices} slices per pizza means we need ${expectedPizzas} pizzas: ${pizzas}`);

slices = 20;
expectedPizzas = 1;
pizzas = gimmePizza(party, slices);

console.log(`13 slices needed, and ${slices} slices per pizza means we need ${expectedPizzas} pizzas: ${pizzas}`);
