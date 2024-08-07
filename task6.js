let encodedString = "2(abc)3(cd)ef";
console.log(decodeString(encodedString));
// abcabccdcdcdef

function decodeString(s) {
  let stack = [];
  let currentString = "";
  let currentNum = 0;
  for (let char of s) {
    if (!isNaN(char)) {
      currentNum = parseInt(char);
    } else if (char === "(") {
      stack.push(currentString);
      stack.push(currentNum);
      currentString = "";
      currentNum = 0;
    } else if (char === ")") {
      let num = stack.pop();
      let prevString = stack.pop();
      currentString = prevString + currentString.repeat(num);
    } else {
      currentString += char;
    }
  }
  return currentString;
}

// function decodeStringRecursive(s) {
//   function decode(index) {
//       let result = '';
//       let num = 0;
//       while (index < s.length) {
//           let char = s[index];
//           if (char >= '0' && char <= '9') {
//               num = num * 10 + (char - '0');
//           } else if (char === '(') {
//               let [decodedString, newIndex] = decode(index + 1);
//               result += decodedString.repeat(num);
//               num = 0;
//               index = newIndex;
//           } else if (char === ')') {
//               return [result, index];
//           } else {
//               result += char;
//           }
//           index++;
//       }
//       return [result, index];
//   }
//   return decode(0)[0];
// }

// function decodeStringRegex(s) {
//   let regex = /(\d+)\(([^()]+)\)/;
//   while (regex.test(s)) {
//       s = s.replace(regex, (match, p1, p2) => p2.repeat(parseInt(p1)));
//   }
//   return s;
// }

// function decodeString(s) {
//   let queue = [];
//   let currentString = '';
//   let currentNum = 0;
//   for (let char of s) {
//       if (!isNaN(char)) {
//           currentNum = parseInt(char);
//       } else if (char === '(') {
//           queue.push(currentString);
//           queue.push(currentNum);
//           currentString = '';
//           currentNum = 0;
//       } else if (char === ')') {
//           let num = queue.pop();
//           let prevString = queue.pop();
//           currentString = prevString + currentString.repeat(num);
//       } else {
//           currentString += char;
//       }
//   }
//   return currentString;
// }