// Задача: Обратное число
// Напиши функцию, которая принимает целое число и возвращает обратное ему число. 
// Например, если число 123, то функция должна вернуть 321.

function reverseNumber(arg0: number) {
  return +arg0.toString().split('').reverse().join('')
}


console.log(reverseNumber(123)); // 321
console.log(reverseNumber(98765)); // 56789
