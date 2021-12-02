import {readInput} from '../../utils';

import {part0} from './part1';

describe('Advent of Code 2020 - Day x', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output x ', () => {
      const input = 'test';
      expect(part0(input)).toBe('test');
    });

    it('should output correct from input', () => {
      expect(part0(input)).toBe('test');
    });
  });
});
