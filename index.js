let numbers = [3, 4, 5];
numbers.unshift(15);
console.log(numbers);
let fruit = [15, 12, 11, 3, 1, 2, 4, 5, 6, 7, 8];
fruit.splice(6, 5, 20);
console.log(fruit);
for (i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}
