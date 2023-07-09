export function isLeap(year: number): boolean {
  return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}

console.log(isLeap(1984));
console.log(isLeap(1234));
console.log(isLeap(3500));
