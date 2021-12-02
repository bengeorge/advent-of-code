import {part1} from './part1';

export const part2 = (numbers: number[]) => {
  const groupedNumbers: number[] = [];

  for (let i = 2; i < numbers.length; i++) {
    groupedNumbers.push(numbers[i-2] + numbers[i-1] + numbers[i]);
  }

  return part1(groupedNumbers);
};
