// Задача: Перестановка строки

// Напишите функцию, которая принимает две строки str1 и str2 и определяет, является ли str2 перестановкой str1.
// Перестановка означает, что символы строки str1 могут быть переставлены таким образом, чтобы получить строку str2.
//  Функция должна вернуть булевое значение true, если str2 является перестановкой str1, и false в противном случае.


// O(logN) сложность решения  в алгоритме

function isPermutation(str1: string, str2: string): boolean {
  return str1.split('').sort().join() === str2.split('').sort().join()
}


// O(n) сложность решения в алгоритме


// function isPermutation(str1: string, str2: string): boolean {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   const charHash = new Map()
//   for (const char of str1) {
//     charHash.set(char, (charHash.get(char) || 0) + 1)
//   }

//   for (const char of str2) {

//     if (!charHash.has(char) || charHash.get(char) === 0) {
//       return false;
//     }
//     charHash.set(char, charHash.get(char) - 1);
//   }

//   return true
// }

console.log(isPermutation('abcd', 'dcba')); // true
console.log(isPermutation('hello', 'world')); // false
console.log(isPermutation('aaa', 'aa')); // false



