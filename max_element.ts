// Задача: Поиск наибольшего элемента
// Напиши функцию, которая принимает массив чисел и возвращает наибольшее число из него.


// function findMax(array: number[]) {
//   const maxValue = array.slice().sort((a, b) => b - a)[0]
//   return maxValue
// }

function findMax(array: number[]) {
  let resultNum = array[0];

  for (let i = 0; i < array.length; i++) {
    const currentNum = array[i];

    for (let j = i + 1; j < array.length; j++) {
      if (currentNum > array[j]) {
        resultNum = currentNum
      } else {
        resultNum = array[j]
      }
    }
  }

  return resultNum
}


console.log(findMax([2, 5, 1, 9, 20])); // 9
console.log(findMax([-3, -11, -5])); // -3
