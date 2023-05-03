import {sum} from './Add';
import {sumarr} from './Add';
test('adds 1+2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds  to equal 20', () => {
  expect(sumarr([5, 5, 5, 5, 5])).toEqual(25);
});
//
