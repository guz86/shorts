// диапазон чисело от 1 до N
// выкинули одно число, остальные перемешали. Получился массив arr
// найти пропущенное число
// [1,2,3,5,6,7] -> 4

function findMissing(nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += i;
  }
  for (const num of nums) {
    sum -= num;
  }
  return sum;
}

// function findMissing(nums) {
//   const n = nums.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   let actualSum = 0;
//   for (const num of nums) {
//     actualSum += num;
//   }
//   return expectedSum - actualSum;
// }
