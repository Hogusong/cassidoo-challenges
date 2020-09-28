require('mocha');
const expect = require('chai').expect;

const pizzaSliceCalculator = require('./pizza-slice-calculator');

const partyWith8Slices = [
  { name: 'Joe', num: 1 },
  { name: 'Cami', num: 2 },
  { name: 'Cassidy', num: 2 },
  { name: 'Chris', num: 1 },
];

const partyWith13Slices = [
  { name: 'Joe', num: 3 },
  { name: 'Cami', num: 1 },
  { name: 'Cassidy', num: 4 },
  { name: 'Chris', num: 5 },
];

const partyWith35Slices = [
  { name: 'Joe', num: 3 },
  { name: 'Cami', num: 1 },
  { name: 'Cassidy', num: 4 },
  { name: 'Chris', num: 5 },
  { name: 'Fred', num: 7 },
  { name: 'Jesse', num: 4 },
  { name: 'Nat', num: 6 },
  { name: 'Franklin', num: 5 },
];

describe('Pizza Slice Calculator', () => {
  describe('When a pizza has 8 slices', () => {
    const slicesPerPizza = 8;

    it('Make 1 pizza for people that want 6 slices', () => {
      const actualPizzas = pizzaSliceCalculator.gimmePizza(partyWith8Slices, slicesPerPizza);

      const expectedPizzas = 1;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 2 pizzas for people that want 13 slices', () => {
      const actualPizzas = pizzaSliceCalculator.gimmePizza(partyWith13Slices, slicesPerPizza);

      const expectedPizzas = 2;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 5 pizzas for people that want 35 slices', () => {
      const actualPizzas = pizzaSliceCalculator.gimmePizza(partyWith35Slices, slicesPerPizza);

      const expectedPizzas = 5;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });
  });

  describe('When a pizza has 14 slices', () => {
    const slicesPerPizza = 14;

    it('Make 1 pizza for people that want 6 slices', () => {
      const actualPizzas = pizzaSliceCalculator.gimmePizza(partyWith8Slices, slicesPerPizza);

      const expectedPizzas = 1;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 1 pizzas for people that want 13 slices', () => {
      const actualPizzas = pizzaSliceCalculator.gimmePizza(partyWith13Slices, slicesPerPizza);

      const expectedPizzas = 1;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 3 pizzas for people that want 35 slices', () => {
      const actualPizzas = pizzaSliceCalculator.gimmePizza(partyWith35Slices, slicesPerPizza);

      const expectedPizzas = 3;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });
  });
});
