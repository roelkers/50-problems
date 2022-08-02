
export const reverse = (val: string) => {
  return val.split("").reverse().join("")
}

export const secondBiggest = (A: number[]) => {
  if(A.length === 0 || A.length === 1) {
    return undefined
  }
  return A.sort((a,b) => b - a)[1]
}

export const findDuplicate = (numbers: number[]) => {
  if(numbers.length === 0) {
    return []
  }
  const sortedNumbers = numbers.sort();
  const result = []
  for(let i = 1; i < numbers.length; i ++) {
    if(sortedNumbers[i] === sortedNumbers[i-1]) {
      result.push(sortedNumbers[i])
    }
  }
  return result;
}
