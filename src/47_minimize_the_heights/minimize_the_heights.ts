import {log} from 'console'

export const minimizeTheHeights = (numbers: number[], k: number) => {
  numbers.sort((a,b) => b - a)
  
  let currentMax = numbers[0]
  let currentMin = numbers[numbers.length-1]
  let largestDiff = 0 
  for (let index = 0; index < numbers.length; index++) {
    if(numbers[index] < k) {
      if(numbers[index] + k > currentMax) {
        currentMax = numbers[index] + k
      } 
    }    

    if(numbers[index] < k) {
      if(numbers[index] + k < currentMin) {
        largestDiff = numbers[index] + k
      } 
    }    
    else {
      if(
        Math.min(
          numbers[index] + k,
          numbers[index] - k,
        ) < currentMin 
      ) {
        currentMin = Math.min(
          numbers[index] + k,
          numbers[index] - k,
        )
      }
    }
  }   

  log(currentMin,currentMax)
  return currentMax - currentMin
}
