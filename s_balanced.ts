// Задача: Проверка сбалансированности скобок
// Напиши функцию, которая принимает строку, содержащую только символы '(', ')', '{', '}', '[' и ']', и проверяет, является ли эта строка сбалансированной по отношению к скобкам.
// Строка считается сбалансированной, если каждой открывающей скобке соответствует закрывающая скобка того же типа в правильном порядке.

function isBalanced(str: string) {
  const stack = []; // Создаем пустой стек

  const openingBrackets = ['(', '{', '['];
  const closingBrackets = [')', '}', ']'];

  for (let i = 0; i < str.length; i++) {
    const char = str[i]; // Текущий символ

    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      const matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];

      if (stack.length === 0 || stack.pop() !== matchingOpeningBracket) {
        return false;
      }
    }
  }

  return stack.length === 0;
}


console.log(isBalanced("({})")); // true
console.log(isBalanced("[({})]")); // true
console.log(isBalanced("({)}")); // false

