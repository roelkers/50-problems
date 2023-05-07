// 21

// [1,2,3,5,10,18,21]
// [3,6,8,1,2,17]
// [1,2,3,6,8,17]

// time complexity : O(n log n), because of sorting

export const findPair = (input: number[], target: number): [number, number] | [null,null] => {
  input.sort(); 
  let startIndex = 0;
  let backIndex = input.length - 1;
  while(startIndex < backIndex) {
    const element = input[startIndex];
    if(element + input[backIndex] === target) {
      return [element, input[backIndex]]
    }
    if(element + input[backIndex] > target) {
      backIndex--;
    }
    if(element + input[backIndex] < target) {
      startIndex++;
    }
  }
  return [null,null]
}
