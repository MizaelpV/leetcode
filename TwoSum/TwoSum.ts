// Initializer: TwoSum to run with Node.js

const numbers: number[] = [2, 7, 11, 15];
const target: number = 9;

const twoSum = (numbers: number[], target: number): number[] | any => {
  const map = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber: number = numbers[i];
    const complement: number = target - currentNumber;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(currentNumber, i);
  }
  return [];
};

console.log(twoSum(numbers, target));
