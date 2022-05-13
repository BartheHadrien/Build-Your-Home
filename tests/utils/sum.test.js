import { sum, sub } from 'src/utils/sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 3 * 2 to equal 6', () => {
  expect(sub(3, 2)).toBe(6);
})
