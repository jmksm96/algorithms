// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// *i increments the value(initially 0)
// *d decrements the value
// *s squares the value
// *o outputs the value into the return array
// Invalid characters should be ignored.

//   parse("iiisdoso") => [8, 64]

export function parse(data: string): number[] {
  const temp: number[] = []
  let tempValue = 0

  for (const char of data) {
    switch (char) {
      case 'i':
        tempValue = tempValue + 1
        break;

      case 'd':
        tempValue = tempValue - 1
        break;

      case 's':
        tempValue = tempValue ** 2
        break;

      case 'o':
        temp.push(tempValue)
        break;

    }
  }
  return temp
}

console.log(parse("iiisdoso"), [8, 64]);
console.log(parse("iiisxxxdoso"), [8, 64])
