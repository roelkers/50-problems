export const kadanesAlgorithm = (numbers: number[]) => {
  let maxSoFar = -Infinity
  let maxEndingHere = 0
  for (let index = 0; index < numbers.length; index++) {
    maxEndingHere = maxEndingHere + numbers[index]
    if(maxEndingHere < 0) {
      maxEndingHere = 0
    }
    if(maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere
    }
  } 
  return maxSoFar
}

