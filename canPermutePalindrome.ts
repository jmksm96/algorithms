
// Задача 1: Палиндромная перестановка
// Напиши функцию, которая принимает строку и проверяет, можно ли получить палиндром путем перестановки символов этой строки.


function canPermutePalindrome(str: string) {
  const charCount = new Map();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  console.log(charCount);

  let oddCount = 0;

  for (let count of charCount.values()) {
    if (count % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}


console.log(canPermutePalindrome('aab')); // true
console.log(canPermutePalindrome('tenet')); // true
console.log(canPermutePalindrome('car')); // false
console.log(canPermutePalindrome('denned')); // true

