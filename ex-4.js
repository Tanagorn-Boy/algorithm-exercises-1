/* 
function findOdd(nums) {
  // Start coding here
  let result = nums.reduce((acc, cur) => {
        for(let i = 0; i < nums.length; i++){
            if(nums[i] % 2 === 0){
              return nums;
            }
        }
  }, {})


}
  */
function findOdd(nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    if (total % 2 === 0) {
      return total += nums[i];
    }
  }

  return total;
}
let result1 = findOdd([3]);
let result2 = findOdd([1, 1, 2]);
let result3 = findOdd([1, 2, 2, 3, 3, 4, 3, 3, 1]);

console.log(result1); // 0
console.log(result2); // 2
console.log(result3); // 4
