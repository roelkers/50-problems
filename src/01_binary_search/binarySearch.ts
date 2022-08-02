export const binarySearch = (nums: number[], target: number) => {
  let left = 0;
  let right = nums.length -1;
  let middle = 0;

  while(left <= right) {
    middle = left + Math.round((right - left) / 2);

    if(nums[middle] === target) {
      return middle
    }
    if(nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1
}

