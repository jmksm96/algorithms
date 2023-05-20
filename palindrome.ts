// Задача: Проверка на палиндром
// Напиши функцию, которая принимает строку и определяет, является ли она палиндромом(читается одинаково в обоих направлениях).
// Функция должна вернуть булево значение true, если строка является палиндромом, и false в противном случае.

function isPalindrome(params: string) {
  const initValue = params;
  const revertedValue = params.split('').reverse().join('')

  return initValue === revertedValue
}

console.log(isPalindrome('radar'));
console.log(isPalindrome('hello'));
