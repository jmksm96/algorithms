// Задача: Проверка на повторяющиеся элементы
// Напиши функцию, которая принимает массив чисел и возвращает булево значение, указывающее, содержит ли массив повторяющиеся элементы.


function hasDuplicates(arg0: number[]) {
  const set = new Set(arg0)
  return set.size === arg0.length
}


console.log(hasDuplicates([1, 2, 3, 4, 5])); // false
console.log(hasDuplicates([1, 2, 3, 4, 2])); // true
