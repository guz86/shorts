// реализовать свой собственный метод, аналогичный map
const arr = [1, 2, 3, 4, 5];
const result = arr.map((item) => item * 2);

console.log(result);

// метод должен вызываться аналогичным образом
//const result2 = arr.myMap((item) => item * 2);
//console.log(result2);

Array.prototype.myMap = function (callback) {
  const result = new Array(this.length);
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      result[i] = callback(this[i], i, this);
    }
  }
  return result;
};

const result2 = arr.myMap((item) => item * 2);
console.log(result2);


// Array.prototype.myMap = function(callback) {
//     if (typeof callback !== 'function') {
//       throw new TypeError(callback + ' is not a function');
//     }
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//       result.push(callback(this[i], i, this));
//     }
//     return result;
//   };
  
//   Array.prototype.myMap = function(callback) {
//     const result = [];
//     for (let i = 0; i < this.length; i++) {
//       if (i in this) {
//         result.push(callback(this[i], i, this));
//       }
//     }
//     return result;
//   };
  
//   Array.prototype.myMap = function(callback) {
//     const result = new Array(this.length);
//     for (let i = 0; i < this.length; i++) {
//       if (i in this) {
//         result[i] = callback(this[i], i, this);
//       }
//     }
//     return result;
//   };