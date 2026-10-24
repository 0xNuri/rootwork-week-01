let nums = [12, 45, 7, 89, 23, 56];
nums.push(123);
nums.pop(2);
nums.unshift (6473)
nums.shift ()
nums.splice (4, 1, 200)



let largest = nums[4];
nums.sort((a, b) => a - b);
console.log(nums);

for (let i = 0; i < nums.length; i ++){
    if (nums[i] > largest){
      largest = nums[i]
      console.log (nums[i] > largest)
    }
}
  console.log(largest)
