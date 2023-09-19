export const subsetSum = (array: number[]): boolean => {
  const totalSum = array.reduce((num,acc) => acc = acc + num,0)
  const table = new Array(totalSum).fill(new Array(totalSum).fill(undefined))
  
  const subsetSumRecur = (index: number, leftSum: number): boolean => {
    if(index < 0) {
      return false
    }
    if(leftSum === totalSum / 2) {
      table[index][leftSum] = true
      return true
    } 
    if(leftSum < totalSum / 2) {
      table[index][leftSum] = false
      return false
    } 
    if(table[index][leftSum] !== undefined) {
      return table[index][leftSum]
    }
    return subsetSumRecur(index-1, leftSum - array[index]) || subsetSumRecur(index-1, leftSum)
  }

  return subsetSumRecur(array.length - 1, totalSum)
}
