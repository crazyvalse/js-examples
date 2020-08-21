function gcd (a, b) {
  return b === 0 ? a : gcd(b, a % b)
}

console.info(gcd(3, 9))
console.info(gcd(2, 8))
console.info(gcd(2, 3))
