// Задача: Подмассив с максимальной суммой без смежных элементов

// Напишите функцию, которая принимает массив положительных целых чисел и возвращает максимальную сумму подмассива такую, что в этом подмассиве нет смежных элементов(элементы идущие друг за другом в исходном массиве).

function maxSumNonAdjacent(nums: number[]) {
  if (nums.length === 0) {
    return 0;
  }

  if (nums.length === 1) {
    return nums[0];
  }
  let inclusiveSum = nums[0];
  let exclusiveSum = 0;

  for (let i = 1; i < nums.length; i++) {
    const prevInclusiveSum = inclusiveSum;
    const prevExclusiveSum = exclusiveSum;

    inclusiveSum = prevExclusiveSum + nums[i]
    exclusiveSum = Math.max(prevInclusiveSum, prevExclusiveSum)

  }

  return Math.max(inclusiveSum, exclusiveSum);
}

console.log(maxSumNonAdjacent([1, 2, 3, 4, 5])); // 9 (подмассив [2, 4, 5] имеет максимальную сумму)
console.log(maxSumNonAdjacent([5, 1, 1, 5])); // 10 (подмассив [5, 5] имеет максимальную сумму)
console.log(maxSumNonAdjacent([2, 7, 9, 3, 1])); // 12 (подмассив [2, 9, 1] имеет максимальную сумму)
console.log(maxSumNonAdjacent([4, 1, 1, 4, 2, 1])); // 9 (подмассив [4, 4, 1] имеет максимальную сумму)
console.log(maxSumNonAdjacent([1, 3, 1, 2])); // 4 (подмассив [3, 1] имеет максимальную сумму)

