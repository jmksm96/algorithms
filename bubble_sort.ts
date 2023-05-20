// Задача: Сортировка пузырьком
// Напиши функцию, которая сортирует массив чисел методом сортировки пузырьком.
// Сортировка пузырьком проходит по массиву несколько раз, сравнивая пары соседних элементов и меняя их местами, если необходимо.



function bubbleSort(array: number[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }

    }
  }
  return array
}

console.log(bubbleSort([4, 2, 7, 1, 3, 10])) // [1, 2, 3, 4, 7]