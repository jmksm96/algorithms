// Ваша задача - отсортировать заданную строку.Каждое слово в строке будет содержать одно число.Это число - позиция, которую должно занимать слово в результате.
// Примечание: Числа могут быть от 1 до 9. Таким образом, 1 будет первым словом (а не 0).
// Если входная строка пуста, верните пустую строку.Слова во входной строке будут содержать только допустимые последовательные числа.


export function order(words: string): string {
  const array = words.split(' ')
  const hash: Record<string, any> = {}

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const pos = element.match(/[1-9]/gm) as any
    hash[pos] = array[i]
  }

  return Object.values(hash).join(' ')
}


console.log(order("is2 Thi1s T4est 3a"));
console.log(order("4of Fo1r pe6ople g3ood th5e the2"));
