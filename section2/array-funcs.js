const nums = [1, 2, 3, 4, 5];

const mapNums = nums.map(num => num * 2);
const filterNums = nums.filter(num => num > 3);
const reduceNums = nums.reduce((acc, cur) => acc + cur);

console.log(nums);
console.log(mapNums);
console.log(filterNums);
console.log(reduceNums);