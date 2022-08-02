export const merge = (left: number[], right: number[]) => {
  if(left.length === 0) {
    return right
  }
  if(right.length === 0) {
    return left
  }
  let result : number[]= []
  let i = 0
  let j = 0
  while(i < left.length && j < right.length) {
    if(left[i] <= right[j]) {
      result.push(left[i])
      i++;
    } else {
      result.push(right[j])
      j++;
    }
    if(i === left.length) {
      result = [...result, ...right.slice(j, right.length)]
    }
    if(j === right.length) {
      result = [...result, ...left.slice(i, left.length)]
    }
  }
  return result 
}

export const mergeSort = (input: number[]): number[] => {
  if(input.length === 1) {
    return input
  }
  const left = mergeSort(input.slice(0, input.length / 2))
  const right = mergeSort(input.slice(input.length / 2, input.length));

  return merge(left, right)
}

