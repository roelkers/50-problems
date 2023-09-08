export const longestPalindromicSubseq = (input: string) => {
  const inputArr = input.split("")
  const table = new Array(inputArr.length +1 ).fill(new Array(inputArr.length + 1).fill(undefined))

  const longestPalinRecur = (begin: number, end:number, curr: string): string => {
    if(begin < 0 || end >= inputArr.length) {
      return curr
    }
    if(begin- 1 > 0 && end +1 <= inputArr.length +1) {
      if(table[begin-1][end+1]) {
        if(inputArr[begin] === inputArr[end]) {
          return input.substring(begin,end+1)
        }
      }
    }
    if(inputArr[begin] === inputArr[end]) {
      const take = longestPalinRecur(begin-1,end+1,input.substring(begin,end+1))
      table[begin][end] = take
      return take
    }
    return curr
  }

  let max = "" 
  inputArr.forEach((_,index) => {
    const middle = longestPalinRecur(index,index,"") 
    if(middle.length > max.length) {
      max = middle
    }
    const ofMiddle = longestPalinRecur(index,index+1,"") 
    if(ofMiddle.length > max.length) {
      max = ofMiddle
    }
  })

  return max
}
