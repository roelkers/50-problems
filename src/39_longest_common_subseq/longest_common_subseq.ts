export const longestCommonSubseq = (stringA: string, stringB: string): number => {
  const table = new Array(stringA.length+1)
  for (let index = 0; index < table.length; index++) {
    table[index] = new Array(stringB.length+1).fill(undefined)
  }

  const longestComRecur = (i: number, j: number): number => {
    if(i == 0 || j == 0) {
      return 0
    }

    let longest = 0
    if(stringA[i] === stringB[j]) {
      longest = 1 + longestComRecur(i-1,j-1)
    }
    else {
      longest = Math.max(
        table[i][j-1] || longestComRecur(i,j-1),
        table[i-1][j] ||longestComRecur(i-1,j)
      )
    }
    table[i][j] = longest 
    return longest
  }
  return longestComRecur(stringA.length,stringB.length)
}
