// Задача: Сумма двух чисел
// Напиши функцию, которая принимает массив чисел и целевое число target.
// Функция должна найти два числа в массиве, сумма которых равна target, и вернуть их индексы в виде массива.

function twoSum(array: number[], num: number) {
  let item
  let itemIndex
  const indexes = []
  for (let i = 0; i < array.length; i++) {
    item = array[i]
    itemIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (item + array[j] === num) {
        indexes.push(itemIndex, j)
        break
      }
    }
  }
  return indexes
}

console.log(twoSum([2, 7, 11, 15], 9));// [0, 1]
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
console.log(twoSum([10, 2, 14], 24)); // [0, 2]
console.log(twoSum([3, 2, 4, 15, 20, 30], 50)); // [4, 5]
