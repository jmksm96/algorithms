
//  Сжатие строки
// Напиши функцию, которая принимает строку и возвращает сжатую версию этой строки.
// Сжатие происходит путем подсчета повторяющихся символов и замены их на символ и количество повторений.


function compressString(arg0: string): string {
  let compressedString = '';
  let count = 1;


  for (let i = 0; i < arg0.length; i++) {
    if (arg0[i] === arg0[i + 1]) {
      count++
    } else {
      compressedString += arg0[i] + count
      count = 1
    }
  }

  return compressedString.length > arg0.length ? arg0 : compressedString
}

console.log(compressString('aabcccccaaa')); // 'a2b1c5a3'
console.log(compressString('abcde')); // 'abcde' (не изменяется, так как сжатая версия не короче исходной)

