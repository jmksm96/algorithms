// Создайте функцию, принимающую положительное целое число от 1 до 3999 (оба включены) в качестве параметра и возвращающую строку, содержащую представление этого целого числа римскими цифрами.

// Современные римские цифры записываются путем выражения каждой цифры отдельно, начиная с самой левой цифры и пропуская любую цифру со значением, равным нулю. Римскими цифрами отображается 1990 год: 1000=M, 900=CM, 90=XC; в результате получается MCMXC. 2008 записывается как 2000=MM, 8=VIII; или MMVIII. 1666 использует каждый римский символ в порядке убывания: MDCLXVI.

export function solution(number: number): string {
  const romanHash: Record<any, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }
  let result = ''

  for (const key in romanHash) {
    result += key.repeat(Math.floor(number / romanHash[key]))
    number = number % romanHash[key]
  }

  return result
}
console.log(solution(1243)); //MCCXLII
console.log(solution(1990)); //MCMXC
console.log(solution(1444)); // MCDXLIB
