function shrink(arr) {
  arr.sort((a, b) => a - b);
  console.log("Sorted array:", arr);

  let result = [];
  let start = arr[0];
  let end = arr[0];

  console.log("Initial start:", start, "Initial end:", end);

  for (let i = 1; i < arr.length; i++) {
    console.log("Current element:", arr[i]);

    if (arr[i] === end + 1) {
      end = arr[i];
      console.log("Updated end:", end);
    } else {
      if (start === end) {
        result.push(`${start}`);
        console.log(`Added single number range: ${start}`);
      } else {
        result.push(`${start}-${end}`);
        console.log(`Added range: ${start}-${end}`);
      }
      start = arr[i];
      end = arr[i];
      console.log("New start:", start, "New end:", end);
    }
  }

  if (start === end) {
    result.push(`${start}`);
    console.log(`Added final single number range: ${start}`);
  } else {
    result.push(`${start}-${end}`);
    console.log(`Added final range: ${start}-${end}`);
  }

  console.log("Result array:", result);
  return result.join(",");
}

const arr = [1, 5, 7, 6, 2, 9];
console.log(shrink(arr)); // '1-2,5-7,9'
