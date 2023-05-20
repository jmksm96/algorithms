function countVowels(arg: string) {
  let count = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']
  arg.split('').forEach(letter => {
    if (vowels.includes(letter.toLowerCase())) {
      count = count + 1
    }
  })

  return count
}

console.log(countVowels('Hello, World!')); // 3
console.log(countVowels('aaaa a aa a aa')); // 

