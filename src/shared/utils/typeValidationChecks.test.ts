import { isNumber, isString } from './typeValidationChecks';

describe('isNumber Type check', () => {
  it('Its a number', () => {
    [0, 1, 2, -1, 1.345e17, '1'].map((n) => expect(isNumber(n)).toEqual(true));
  });

  it('Its not a number', () => {
    [false, true, NaN, [], {}, '1a'].map((n) => expect(isNumber(n)).toEqual(false));
  });
});

describe('isString Type Check', () => {
  it('Its a string', () => {
    ['0', 'asf123fsdf', '$ter%'].map((n) => expect(isString(n)).toEqual(true));
  });

  it('Its not a string', () => {
    [false, true, NaN, [], {}].map((n) => expect(isString(n)).toEqual(false));
  });
});
