const numbers = [2, 7, 11, 15];
const target = 9;

const twoSum = (numbers, target) => {
  const map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    const currentNumber = numbers[i];
    const complement = target - currentNumber;
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(currentNumber, i);
  }
  return [];
};

console.log(twoSum(numbers, target));
