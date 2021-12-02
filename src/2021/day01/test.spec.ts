import {readInput} from '../../utils';

import {part1} from './part1';
import {part2} from './part2';

describe('Advent of Code 2021 - Day 1', () => {
  let input: string;
  beforeAll(async () => {
    input = await readInput(__dirname + '/input');
  });

  describe('part 1', () => {
    it('should output x ', () => {
      const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
      expect(part1(input)).toBe(7);
    });

    it('should output correct from input', () => {
      const numbers = input.split(/\r?\n/).map(Number);
      expect(part1(numbers)).toBe(1184);
    });
  });

  describe('part 2', () => {
    it('should output x ', () => {
      const input = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
      expect(part2(input)).toBe(5);
    });

    it('should output correct from input', () => {
      const numbers = input.split(/\r?\n/).map(Number);
      expect(part2(numbers)).toBe(1158);
    });
  });
});
