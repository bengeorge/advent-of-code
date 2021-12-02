export const part1 = (numbers: number[]) => {
  let previousValue: number | undefined = undefined;
  let count = 0;

  numbers.forEach((value) => {
    if (previousValue !== undefined && value > previousValue) {
      count++;
    }

    previousValue = value;
  });

  return count;
};
