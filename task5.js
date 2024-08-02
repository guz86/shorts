function isUnique(str) {
  //   for (let i = 0; i < str.length; i++) {
  //     if (str.lastIndexOf(str[i]) !== i) {
  //       return false;
  //     }
  //   }
  //   return true;

  //   return new Set(str).size === str.length;

  //   const chars = new Set();
  //   for (let i = 0; i < str.length; i++) {
  //     const current = str[i];
  //     if (chars.has(current)) {
  //       return false;
  //     }
  //     chars.add(current);
  //   }
  //   return true;

  const chars = new Set();
  for (const char of str) {
    if (chars.has(char)) {
      return false;
    }
    chars.add(char);
  }
  return true;
}

console.log(isUnique("abcdef")); // -> true
console.log(isUnique("1234567")); // -> true
console.log(isUnique("abcABC")); // -> true
console.log(isUnique("abcadef")); // -> false
