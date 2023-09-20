import { log } from 'console' 

export const countPairsWithSum = (numbers: number[], k: number) => {
  numbers.sort()
  let nPairs = 0
  for (let i = 0; i < numbers.length; i++) {
    const idx = binarySearch(numbers,numbers[i]-k)
    if(idx !== -1 && idx !== i) {
      log([numbers[i],numbers[idx]])
      nPairs++;
    } 
  }
  return nPairs
}

const binarySearch = (numbers: number[], value: number): number => {
  let left = 0
  let right = numbers.length-1 

  while(left <= right) {
    const middle = left + Math.round((right - left) / 2)
    
    if(numbers[middle] === value) {
      return middle
    } 
    if(value < numbers[middle]) {
      right = middle - 1
    }
    else {
      left = middle + 1
    }
  }

  return -1
}
