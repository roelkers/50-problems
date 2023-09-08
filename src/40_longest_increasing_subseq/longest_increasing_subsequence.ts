export const longestIncreasingSubsequence = (seq: number[]): number => {
  const table: number[][] = new Array(seq.length+1)
  table.fill(new Array(seq.length + 1).fill(undefined))

  const longestIncrRecur = (index: number, lastIndex: number, current: number[]): number => {
    if(index < 0) {
      if(current.length === 5)
        console.log(current)
      return current.length
    } 
    if(table[index][lastIndex]) {
      return table[index][lastIndex]
    }
    let take = -1
    if(current.length === 0 || seq[index] < current[current.length -1]) {
      take = longestIncrRecur(index-1,index,[...current, seq[index]])
    }
      
    const notTake = longestIncrRecur(index-1,lastIndex,[...current])

    const longest = Math.max(take, notTake)
    table[index][lastIndex] = longest
    return longest
  }

  return longestIncrRecur(seq.length-1,seq.length, [])
}
