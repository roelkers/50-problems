
export const partition = (array: number[]) => {
  return partitionRecur(array, [], [])
}

const sumOfArray = (array: number[]) => {
 return array.reduce((acc,item) => acc+item, 0)
}

export const partitionRecur = (array: number[], left: number[], right: number[]) => {
  const [next] = array
  if(!next) {
    if(sumOfArray(left) === sumOfArray(right)) {
      return true
    }
    return false
  }
  if(partitionRecur(array.slice(1,array.length), left, [...right,next])) {
    return true
  }  
  if(partitionRecur(array.slice(1,array.length), [...left, next], right)) {
    return true
  }
  return false
}
