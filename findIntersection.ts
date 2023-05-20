// Задача 3: Поиск пересечения массивов
// Напиши функцию, которая принимает два массива целых чисел и возвращает новый массив, содержащий только элементы, которые присутствуют в обоих массивах 
function findIntersection(arg0: number[], arg1: number[]): any {
  const set = new Set()
  arg0.forEach(item => {
    if (arg1.includes(item)) {
      set.add(item)
    }
  })
  return Array.from(set)
}


console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); // [3, 4]
console.log(findIntersection([1, 2, 3], [4, 5, 6])); // []


