const { sum, getRandomInt } = require('../math');

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  
  test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
  })
});

describe('getRandomInt', () => {
  test('should return a number within the expected limits', () => {
    const randomValue = getRandomInt(3);
    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(typeof randomValue).toBe('number')

    // This will fail on average every on every 3rd run.
    expect(randomValue).toBeLessThan(2);
  })
});
