/**
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

/**
 * gimmePizza - A function that returns the number of pizzas needed for hungry people
 *
 * @param  [] peepsThatWantPizza - An array of 'people' objects, with each object consisting of a name and slices property
 * @param  number slicesPerPizza - The number of slices a pizza will be cut into
 *
 * @returns number - The number of pizzas needed to feed all of the hungry people
 */
exports.gimmePizza = (peepsThatWantPizza, slicesPerPizza) => {
  const slicesOfPizzaNeeded = peepsThatWantPizza.reduce((totalSlices, peep) => totalSlices + peep.slices, 0);
  const pizzasNeeded = slicesOfPizzaNeeded / slicesPerPizza;

  return Math.ceil(pizzasNeeded);
};
