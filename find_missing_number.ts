// Задача: Поиск пропущенного числа
// Напиши функцию, которая принимает массив чисел от 1 до n, где n - длина массива, за исключением одного числа.
// Функция должна найти и вернуть пропущенное число.

function findMissingNumber(arg0: number[]): any {
  let missedNumber: any

  arg0.forEach((item, index) => {
    if (item !== index + 1 && !missedNumber) {
      missedNumber = index + 1
      return
    }
  })

  return missedNumber
}



console.log(findMissingNumber([1, 2, 4, 5, 6])); // 3
console.log(findMissingNumber([1, 2, 3, 4, 5, 6, 8])); // 7
console.log(findMissingNumber([1, 3, 4, 5])); // 2

