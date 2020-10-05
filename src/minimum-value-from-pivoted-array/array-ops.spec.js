require('mocha');
const expect = require('chai').expect;

const arrayOps = require('./array-ops');

describe('Minimum number valid against pivoted version 1', () => {
  const expectedMinimumValue = 3;
  const numbers = [10, 43, 104, expectedMinimumValue, 5];

  it(`For array of ${numbers} it should be ${expectedMinimumValue}`, () => {
    expect(arrayOps.gimmeMinimumValue(numbers)).to.be.eql(expectedMinimumValue);
  });
});

describe('Minimum number valid against pivoted version 2', () => {
  const expectedMinimumValue = -5;
  const numbers = [10, expectedMinimumValue, -2, 0, 9];

  it(`For array of ${numbers} it should be ${expectedMinimumValue}`, () => {
    expect(arrayOps.gimmeMinimumValue(numbers)).to.be.eql(expectedMinimumValue);
  });
});
