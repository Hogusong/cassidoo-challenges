require('mocha');
const expect = require('chai').expect;

const pizzaSliceCalculator = require('./pizza-slice-calculator');

const party = [
  { name: 'Joe', slices: 3 },
  { name: 'Cami', slices: 4 },
  { name: 'Cassidy', slices: 2 },
  { name: 'Chris', slices: 4 },
];

describe('Pizza Slice Calculator', () => {
  describe('When a pizza has 8 slices', () => {
    const slicesPerPizza = 8;

    it('Make 1 pizza for people that want 6 slices', () => {
      const party = [
        { name: 'Joe', slices: 1 },
        { name: 'Cami', slices: 2 },
        { name: 'Cassidy', slices: 2 },
        { name: 'Chris', slices: 1 },
      ];

      const actualPizzas = pizzaSliceCalculator.gimmePizza(party, slicesPerPizza);

      const expectedPizzas = 1;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 2 pizzas for people that want 13 slices', () => {
      const party = [
        { name: 'Joe', slices: 3 },
        { name: 'Cami', slices: 1 },
        { name: 'Cassidy', slices: 4 },
        { name: 'Chris', slices: 5 },
      ];

      const actualPizzas = pizzaSliceCalculator.gimmePizza(party, slicesPerPizza);

      const expectedPizzas = 2;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 5 pizzas for people that want 35 slices', () => {
      const party = [
        { name: 'Joe', slices: 3 },
        { name: 'Cami', slices: 1 },
        { name: 'Cassidy', slices: 4 },
        { name: 'Chris', slices: 5 },
        { name: 'Fred', slices: 7 },
        { name: 'Jesse', slices: 4 },
        { name: 'Nat', slices: 6 },
        { name: 'Franklin', slices: 5 },
      ];

      const actualPizzas = pizzaSliceCalculator.gimmePizza(party, slicesPerPizza);

      const expectedPizzas = 5;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });
  });

  describe('When a pizza has 14 slices', () => {
    const slicesPerPizza = 14;

    it('Make 1 pizza for people that want 6 slices', () => {
      const party = [
        { name: 'Joe', slices: 1 },
        { name: 'Cami', slices: 2 },
        { name: 'Cassidy', slices: 2 },
        { name: 'Chris', slices: 1 },
      ];

      const actualPizzas = pizzaSliceCalculator.gimmePizza(party, slicesPerPizza);

      const expectedPizzas = 1;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 1 pizzas for people that want 13 slices', () => {
      const party = [
        { name: 'Joe', slices: 3 },
        { name: 'Cami', slices: 1 },
        { name: 'Cassidy', slices: 4 },
        { name: 'Chris', slices: 5 },
      ];

      const actualPizzas = pizzaSliceCalculator.gimmePizza(party, slicesPerPizza);

      const expectedPizzas = 1;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });

    it('Make 3 pizzas for people that want 35 slices', () => {
      const party = [
        { name: 'Joe', slices: 3 },
        { name: 'Cami', slices: 1 },
        { name: 'Cassidy', slices: 4 },
        { name: 'Chris', slices: 5 },
        { name: 'Fred', slices: 7 },
        { name: 'Jesse', slices: 4 },
        { name: 'Nat', slices: 6 },
        { name: 'Franklin', slices: 5 },
      ];

      const actualPizzas = pizzaSliceCalculator.gimmePizza(party, slicesPerPizza);

      const expectedPizzas = 3;

      expect(actualPizzas).to.be.eql(expectedPizzas);
    });
  });
});
