export function numberToEnglish(x: number): string {
  const dict = new Map<string, string>([
    ['0', 'zero'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
    ['10', 'ten'],
    ['11', 'eleven'],
    ['12', 'twelve'],
    ['13', 'thirteen'],
    ['14', 'fourteen'],
    ['15', 'fifteen'],
    ['16', 'sixteen'],
    ['17', 'seventeen'],
    ['18', 'eighteen'],
    ['19', 'nineteen'],
    ['20', 'twenty'],
    ['30', 'thirty'],
    ['40', 'forty'],
    ['50', 'fifty'],
    ['60', 'sixty'],
    ['70', 'seventy'],
    ['80', 'eighty'],
    ['90', 'ninety'],
    ['100', 'hundred'],
    ['1000', 'thousand']
  ]);

  const getNumber = (char: string) => dict.get(char);

  let result = '';

  if (x <= 20) {
    result = getNumber(x.toString()) as string;
  }

  if (x > 20 && x < 100) {
    const roundedNumber = x - (x % 10);
    const remainder = x % 10;
    result = getNumber(roundedNumber.toString())!;
    if (remainder !== 0) {
      result += ' ' + getNumber(remainder.toString());
    }
  }

  if (x === 100 || x === 1000) {
    result = 'one ' + dict.get(x.toString());
  }

  if (x > 100 && x < 1000) {
    const hundreds = Math.floor(x / 100);
    const tens = x % 100;

    result = getNumber(hundreds.toString()) + ' ' + dict.get('100');
    if (tens !== 0) {
      const tensString = numberToEnglish(tens);
      if (tensString !== 'zero') {
        result += ' ' + tensString;
      }
    }
  }

  if (x > 1000 && x < 10000) {
    const thousands = Math.floor(x / 1000);
    const remainder = x % 1000;

    result = numberToEnglish(thousands) + ' ' + dict.get('1000');
    if (remainder !== 0) {
      const remainderString = numberToEnglish(remainder);
      if (remainderString !== 'zero') {
        result += ' ' + remainderString;
      }
    }
  }

  if (x >= 10000 && x < 100000) {
    const tenThousands = Math.floor(x / 1000);
    const remainder = x % 1000;

    result = numberToEnglish(tenThousands) + ' ' + dict.get('1000');
    if (remainder !== 0) {
      const remainderString = numberToEnglish(remainder);
      if (remainderString !== 'zero') {
        result += ' ' + remainderString;
      }
    }
  }

  return result;
}


console.log(numberToEnglish(0)); // 'zero'
console.log(numberToEnglish(7)); // 'seven'
console.log(numberToEnglish(11)); // 'eleven'
console.log(numberToEnglish(20)); // 'twenty'
console.log(numberToEnglish(47)); // 'forty seven'
console.log(numberToEnglish(100)); // 'one hundred'
console.log(numberToEnglish(305)); // 'three hundred five'
console.log(numberToEnglish(355)); // 'three hundred fifty five'
console.log(numberToEnglish(4002)); // 'four thousand two'
console.log(numberToEnglish(3892)); // 'three thousand eight hundred ninety two'
console.log(numberToEnglish(6800)); // 'six thousand eight hundred'
console.log(numberToEnglish(14111)); // 'fourteen thousand one hundred eleven'
console.log(numberToEnglish(20005)); // 'twenty thousand five'
console.log(numberToEnglish(99999)); // 'ninety nine thousand nine hundred ninety nine'