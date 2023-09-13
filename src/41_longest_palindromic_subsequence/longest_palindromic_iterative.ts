export const longestPalindromicIter = (input: string) => {
  const inputArr = input
  const table = new Array(inputArr.length+1).fill(new Array(inputArr.length+1).fill(0))
  console.log(table.length)
  console.log(table[0].length)
  const inputArr2 = input.split("").reverse().join("")
  console.log(inputArr,inputArr2)

  for (let i = 1; i < table.length; i++) {
    for (let j = 1; j < table[i].length; j++) {
      if(inputArr[i-1] === inputArr2[j-1]) {
        table[i][j] = 1 + table[i-1][j-1] 
      }
      else {
        table[i][j] = Math.max(
          table[i][j-1],table[i-1][j]
        )
      }
    }
  }

  return table[input.length][input.length]
}

