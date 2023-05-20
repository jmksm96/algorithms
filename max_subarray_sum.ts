// Задача: Наибольшая сумма подмассива
// Напиши функцию, которая принимает массив целых чисел и находит подмассив с наибольшей суммой элементов.
// Функция должна вернуть эту сумму.

// function maxSubarraySum(arg0: number[]) {
//   throw new Error("Function not implemented.");
// }

function maxSubarraySum(arr: number[]) {
  let maxSum = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}



console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])) // 6 
console.log(maxSubarraySum([1, 2, -5, 4, 3, -2, 6, -1])) // 11 


