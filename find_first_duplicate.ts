// Задача: Поиск повторяющегося элемента
// Напиши функцию, которая принимает массив чисел и находит первый повторяющийся элемент.
// Функция должна вернуть этот повторяющийся элемент, или undefined, если повторяющихся элементов нет.

function findFirstDuplicate(arg0: number[]): any {
  let duplicatedItem

  for (let i = 0; i < arg0.length; i++) {
    for (let j = i + 1; j < arg0.length; j++) {
      if (arg0[i] === arg0[j]) {
        duplicatedItem = arg0[j]
        return duplicatedItem
      }
    }
  }
}


console.log(findFirstDuplicate([2, 3, 1, 4, 3, 2])); // 2
console.log(findFirstDuplicate([1, 2, 3, 4, 5])); // undefined


